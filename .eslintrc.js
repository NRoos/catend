module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript/base',
    ],
    parserOptions: {
        project: './tsconfig.json'
    }
};