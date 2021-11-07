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
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.e2e.ts',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
    '!<rootDir>/src/**/*.test.{ts,tsx}',
    '!<rootDir>/src/test-utils/**',
  ],

  moduleNameMapper: {
    '\\.(?:css|gif|jpg|png|scss)$': '<rootDir>/src/test-utils/empty.ts',
  },

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
