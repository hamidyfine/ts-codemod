module.exports = {
    extends: ['alloy', 'alloy/typescript', 'eslint:recommended'],
    env    : {
        node: true,
    },
    'rules': {
        'max-len': [
            'error',
            {
                code: 256,
            },
        ],
        quotes                       : ['error', 'single'],
        indent                       : ['error', 4],
        semi                         : ['error', 'always'],
        'comma-dangle'               : ['error', 'always-multiline'],
        'no-debugger'                : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'              : ['error', 'never'],
        'linebreak-style'            : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'class-methods-use-this': 'off',
        'no-trailing-spaces'    : [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],
        'arrow-parens'           : ['error', 'always'],
        'no-underscore-dangle'   : 'off',
        'space-in-parens'        : 'off',
        'no-prototype-builtins'  : 'off',
        'import/no-unresolved'   : 'off',
        'import/extensions'      : 'off',
        'no-multiple-empty-lines': 'off',
        'no-unneeded-ternary'    : 'error',
        'brace-style'            : [
            'error',
            '1tbs',
        ],
        curly                                           : ['error', 'all'],
        'no-else-return'                                : 'error',
        'no-lonely-if'                                  : 'error',
        'import/no-named-as-default'                    : 'off',
        'import/no-extraneous-dependencies'             : 'off',
        'import/prefer-default-export'                  : 'off',
        'require-jsdoc'                                 : 'off',
        'node/no-extraneous-import'                     : 'off',
        'no-process-exit'                               : 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
};
