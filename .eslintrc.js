module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    rules: {
        '@typescript-eslint/indent': [2,4],
        'react/react-in-jsx-scope' : 'off',
        '@typescript-eslint/no-unused-vars' : 'warn',
        'no-trailing-spaces' : 'off',
        '@typescript-eslint/explicit-function-return-type' : 'off',
        'react/no-deprecated': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'i18next/no-literal-string': ['error', {markupOnly: true, onlyAttribute: ['']}],
    },
    globals: {
        __IS_DEV__: true,
    }
}
