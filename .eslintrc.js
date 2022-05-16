module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true,
        commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],
        'no-param-reassign': ['error', { props: false }],
        'no-console': 'error',
        'no-fallthrough': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-underscore-dangle': 'warn',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
