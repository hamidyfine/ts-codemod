/* -------------------------------------------------------------------------- */
/* PROMPTS                                                                    */
/* -------------------------------------------------------------------------- */

const source = {
    type   : 'input',
    name   : 'source',
    message: 'Enter the path to source file(s):',
    hint   : 'You can pass single file: ./packages/trader/index.jsx or using glob: ./packages/trader/**/*.jsx',
    validate(value: string) {
        if (value.length > 0) {
            return true;
        }
        return `Please enter a valid path to file(s).
Examples:
To select single file: app/account/src/Modules/Page404/Components/Icon404.jsx
To select multiple files: app/packages/account/**/*.jsx`;
    },
};

const type_of_codemod = {
    type   : 'list',
    name   : 'codemod_type',
    message: 'What codemod do you want to use?',
    choices: ['Change extension', 'Convert proptypes to TS'] as const,
};

const select_target_extension = {
    type   : 'input',
    name   : 'extension',
    message: 'Enter the new extension: (e.g. jsx or tsx)',
};

export { source, type_of_codemod, select_target_extension };
