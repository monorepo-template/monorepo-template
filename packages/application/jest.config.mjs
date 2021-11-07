import { exclude } from './.nycrc.json';

const mapExcludeToJestCollectCoverageFrom = item => `!<rootDir>/${item}`;

export default {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  coverageDirectory: './jest/coverage',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    ...exclude.map(mapExcludeToJestCollectCoverageFrom),
  ],

  moduleNameMapper: {
    '\\.(?:css|gif|jpg|png|scss)$': '<rootDir>/src/test-utils/empty.ts',
  },

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
