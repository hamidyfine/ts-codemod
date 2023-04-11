/* -------------------------------------------------------------------------- */
/* SAMPLE COMMAND STRUCTURE                                                   */
/* -------------------------------------------------------------------------- */
import chalk from 'chalk';
import path from 'path';
import util from 'util';
import child_process from 'child_process';
import { files, checkFileExistence, handleResponse, TResponse } from '../utils';
import { changeFileExtension } from './change-extension';

const exec = util.promisify(child_process.exec);

export const runJscodeshift = async (file_path: string, file_extension: string) => {
    const codemod_full_path = path.join(__dirname, '../src/utils/transform.js');
    const { stdout, stderr } = await exec(
        `jscodeshift -t ${codemod_full_path} ${file_path} --parser=tsx`,
    );
    
    if (stdout.indexOf('ERR') > -1) {
        console.log(`stdout: ${stdout}`);
    } else if (stderr.indexOf('ERR') > -1) {
        console.log(`stderr: ${stderr}`);
    } else if (file_extension !== '') {
        await changeFileExtension(file_path, file_extension);
    }

    if (stderr.indexOf('ERR') === -1) {
        console.log(chalk.green('    ✔ File Migrated.'));
    }
};

const toTS = (program: any) => {
    program
        .command('pts')
        .description('Migrate from js(x) to ts(x)')
        .option('-s, --source <source>', 'Source to the file(s)')
        .option('-e, --extension <extension>', 'Change extension of the file')
        .action(async (options: any, stdout: any) => {
            const response: TResponse = await handleResponse(options, stdout, ['source', 'extension']);
            
            // Process Files
            const inputFiles = files(response.source);
            await checkFileExistence(inputFiles, true);

            // Run Command
            let i = 1;
            console.log(chalk.yellow('Migrating files to TypeScript:'));
            for await (const file of inputFiles) {
                console.log(chalk.blue(`${i}/${inputFiles.length} File: ${file}`));
                await runJscodeshift(file, response.extension);
                i++;
            }

            // Finish Messages
            process.stdout.write(`${chalk.red('Please make sure to commit the changes after running each codemod to get better git diff.')}\n`);
            console.log();
        });
};

export default toTS;
