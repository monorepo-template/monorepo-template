import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  coverageDirectory: './jest/coverage',
  errorOnDeprecated: true,
  modulePaths: [],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  setupFiles: [require.resolve('react-app-polyfill/jsdom')],
  setupFilesAfterEnv: [],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{cjs,jsx,jsx,mjs,ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.e2e.ts',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
  ],

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'ts',
    'tsx',
    'web.js',
    'web.jsx',
    'web.ts',
    'web.tsx',
  ],

  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(?:css|sass|scss)$': 'identity-obj-proxy',
    '\\.(?:gif|jpg|png)$': '<rootDir>/src/test/constants/null.ts',
  },

  transform: {
    '^.+\\.(cjs|js|jsx|mjs|ts|tsx)$':
      'react-scripts/config/jest/babelTransform.js',
    '^.+\\.css$': 'react-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(cjs|css|js|json|jsx|mjs|ts|tsx)$)':
      'react-scripts/config/jest/fileTransform.js',
  },

  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(cjs|js|jsx|mjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
