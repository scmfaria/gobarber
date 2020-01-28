module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    ['airbnb-base', 'prettier'],
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  root: true,
  rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["errors", {"argsIgnorePattern": "next" }],
      "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
  },
};
