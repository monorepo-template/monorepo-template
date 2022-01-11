module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  root: false,

  env: {
    jest: true,
  },

  parserOptions: {
    tsconfigRootDir: __dirname,
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      jsx: false,
    },
  },

  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
