module.exports = {
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  root: false,

  env: {
    jest: true,
    node: true,
  },

  extends: [
    'plugin:jsx-a11y/strict',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@monorepo-template/react-fixable',
    '@monorepo-template/react-strict',
    '@monorepo-template/react-typescript',
    '@monorepo-template/react-typescript/react-scripts-4',
  ],

  overrides: [
    {
      files: ['*.json'],
      extends: ['@monorepo-template/react-typescript/json'],
    },
  ],

  parserOptions: {
    tsconfigRootDir: __dirname,
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      jsx: false,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
