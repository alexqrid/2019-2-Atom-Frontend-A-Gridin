module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: 'airbnb-base',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      indent: 0,
      'no-underscore-dangle': 0,
      'prefer-template': 0,
      'prefer-const': 0,
      'no-var': 0,
      'vars-on-top': 0,
      'default-case': 0,
      'no-tabs': 0,
    },
  };
