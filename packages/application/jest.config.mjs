import COLLECT_COVERAGE_FROM from './src/test-utils/collect-coverage-from.cjs';

export default {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  collectCoverageFrom: COLLECT_COVERAGE_FROM,
  coverageDirectory: './jest/coverage',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(?:css|gif|jpg|png|scss)$': '<rootDir>/src/test-utils/empty.ts',
  },

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
