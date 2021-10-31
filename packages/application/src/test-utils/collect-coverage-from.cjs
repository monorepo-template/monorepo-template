const { exclude } = require('../../.nycrc.json');

const mapExcludeToJestCollectCoverageFrom = item => `!<rootDir>/${item}`;

module.exports = [
  '<rootDir>/src/**/*.{ts,tsx}',
  ...exclude.map(mapExcludeToJestCollectCoverageFrom),
];
