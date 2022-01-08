import JEST_PRESET from './constants/jest-preset.mjs';

export default {
  ...JEST_PRESET,

  coverageThreshold: {
    ...JEST_PRESET.coverageThreshold,
    global: {
      ...JEST_PRESET.coverageThreshold?.global,
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
