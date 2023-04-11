/* -------------------------------------------------------------------------- */
/* UTILS                                                                      */
/* -------------------------------------------------------------------------- */
import fg from 'fast-glob';
import isGitDirty from 'is-git-dirty';
import chalk from 'chalk';
import path from 'path';
import { prompt } from 'enquirer';
import { source, select_target_extension } from '../utils/prompt';

export type TResponse = {
    source: string;
    extension: string;
}

export const handleResponse = async (options: any, stdout: any, q: string[]) => {
    const hasDot = stdout.args.includes('.');
    const response: TResponse = {
        extension: '',
        source   : '',
    };

    Object.keys(options).forEach((key) => {
        if (options[key].startsWith('-')) {
            console.log(chalk.red(`Invalid arguments passed to: ${key}`));
            process.exit(1);
        }
    });

    // Source
    if (!options.source && hasDot === false && q.includes('source') || typeof options.source === 'boolean') {
        const q_res: TResponse = await prompt(source);
        response.source = q_res.source;
    } else if (hasDot || options.source) {
        response.source = hasDot ? process.cwd() : options.source;
    }

    // Extension
    if (!options.extension && q.includes('extension') || typeof options.extension === 'boolean') {
        const q_res: TResponse = await prompt(select_target_extension);
        response.extension = q_res.extension;
    } else if (options.extension) {
        response.extension = options.extension;
    }

    return response;
};

export const files = (source: string) => {
    return fg.sync(source.trim(), {
        absolute: true,
        ignore  : ['**/node_modules/**'],
    });
};

export const checkFileExistence = (files: Array<string>, checkGit: boolean) => {
    if (files.length === 0) {
        process.stderr.write(
            'Error: No files found. Please check the path option.\n',
        );
        process.exit();
    }

    if (checkGit) {
        checkGitDirty(files);
    }
};

export const checkGitDirty = (files: any) => {
    return isGitDirty(path.dirname(files[0]));
};
