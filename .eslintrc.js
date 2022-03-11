module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/state-in-constructor': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'no-unused-vars': 0,
  },
};
