module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        '@typescript-eslint/indent': [2,4],
        'react/react-in-jsx-scope' : 'off',
        'no-trailing-spaces' : 'off',
        '@typescript-eslint/explicit-function-return-type' : 'off',
        'react/no-deprecated': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
    },
    globals: {
        __IS_DEV__: true,
    }
}
