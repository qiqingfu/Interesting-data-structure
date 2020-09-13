/**
 * Created by qiqf on 2020/9/13
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
      },
    ],
    // https://cn.eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-plusplus': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['util', './src/util']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
}
