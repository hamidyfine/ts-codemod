/* -------------------------------------------------------------------------- */
/* SAMPLE COMMAND STRUCTURE                                                   */
/* -------------------------------------------------------------------------- */
import util from 'util';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { files, checkFileExistence, handleResponse, TResponse } from '../utils';

const rename = util.promisify(fs.rename);

export const changeFileExtension = async (file_path: string, extension: string) => {
    const current_extension = path.extname(file_path);

    const new_extension = extension.startsWith('.')
        ? extension.slice(1)
        : extension;

    if (current_extension.length > 0) {
        const new_path = file_path.replace(current_extension, `.${new_extension}`);
        await rename(file_path, new_path);
        console.log(chalk.green('    ✔ File Extension Changed.'));
    }
};

const changeExtension = (program: any) => {
    program
        .command('ext')
        .description('Change extension of the file(s)')
        .option('-s, --source <source>', 'Source to the file(s)')
        .option('-e, --extension <ext>', 'Target Extension')
        .action(async (options: any, stdout: any) => {
            const response: TResponse = await handleResponse(options, stdout, ['source', 'extension']);

            // Process Files
            const inputFiles = files(response.source);
            await checkFileExistence(inputFiles, true);

            // Run Command
            let i = 1;
            console.log(chalk.yellow(`Changing file extension to ${chalk.green.bold(response.extension)}:`));
            for await (const file of inputFiles) {
                console.log(chalk.blue(`${i}/${inputFiles.length} File: ${file}`));
                await changeFileExtension(file, response.extension);
                i++;
            }

            // Finish Messages
            process.stdout.write(`\n${chalk.green('Codemod ran successfully.')}\n`);
            process.stdout.write(`${chalk.red('Please make sure to commit the changes after running each codemod to get better git diff.')}\n`);
            console.log();
        });
};

export default changeExtension;
