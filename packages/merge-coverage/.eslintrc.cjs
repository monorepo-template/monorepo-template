module.exports = {
  root: false,

  env: {
    jest: true,
    node: true,
  },

  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};
