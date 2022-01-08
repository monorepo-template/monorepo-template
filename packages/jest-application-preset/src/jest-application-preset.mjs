import JEST_PRESET from './constants/jest-preset.mjs';

export default {
  ...JEST_PRESET,

  collectCoverageFrom: [
    ...JEST_PRESET.collectCoverageFrom,
    '!<rootDir>/src/**/*.e2e.ts',
  ],

  coverageThreshold: {
    ...JEST_PRESET.coverageThreshold,
    global: {
      ...JEST_PRESET.coverageThreshold?.global,
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
