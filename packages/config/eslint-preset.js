module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'next',
        'react-app',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:security/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        next: {
            rootDir: ['apps/*/', 'packages/*/'],
        },
    },
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
    rules: {
        'react/jsx-key': 'off',
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], //should add ".ts" if typescript project
        'react-hooks/exhaustive-deps': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'space-before-blocks': 'error',
        'import/prefer-default-export': 'off',

        // Something is grumpy about these rules re: node imports - TODO
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        curly: 'error',
        // 'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'off',
        'jsdoc/newline-after-description': 'off',
        'no-empty': 'error',
        // This is used intentionally in a bunch of ci_source/providers
        'no-var': 'error',
        'no-empty-function': 'off',
        'no-redeclare': 'error',
        'no-unused-vars': 'off',

        '@next/next/no-html-link-for-pages': 'off',

        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],

        // There are a bunch of existing uses of 'let' where this rule would trigger
        'prefer-const': 'off',

        // This project has a ton of interacting APIs, and sometimes it's helpful to be explicit, even if the type is trivial
        '@typescript-eslint/no-inferrable-types': 'off',

        'no-unused-expressions': 'off',

        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',

        '@next/next/no-img-element': 'off',

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                singleQuote: true,
            },
        ],
    },
    overrides: [
        {
            files: [
                '**/*.test.js',
                '**/*.test.jsx',
                '**/*.test.tsx',
                '**/*.spec.js',
                '**/*.spec.jsx',
                '**/*.spec.tsx',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
