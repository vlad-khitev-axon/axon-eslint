module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
      },
    ],

    /* Custom Axon's rules */
    'newline-before-return': 'error',
    'generator-star-spacing': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'warn',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'never'],
  },
};
