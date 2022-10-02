module.exports = {
  extends: ['@monorepo-template/eslint-config/react-module'],
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.eslint.cypress.json'],
    tsconfigRootDir: __dirname,
  },
};
