module.exports = {
  cacheDirectory: './jest/cache',
  collectCoverage: true,
  coverageDirectory: './jest/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',

  collectCoverageFrom: [
    '<rootDir>/src/**/*.{cjs,jsx,jsx,mjs,ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
  ],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  moduleNameMapper: {
    '^.+\\.module\\.(?:css|sass|scss)$': require.resolve('identity-obj-proxy'),
    '\\.(?:gif|jpg|png)$':
      '@monorepo-template/jest-preset/src/constants/empty-string.ts',
  },

  transform: {
    '^.+\\.tsx?$': require.resolve('@monorepo-template/jest-transformer'),
  },
};
