module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier']
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    /* Custom Axon's rules */
    'newline-before-return': 'error',
    'generator-star-spacing': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'warn',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'never'],
  }
};