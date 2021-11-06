// TODO: Move to `@monorepo-template/application-jest-config` and require from
//   `${process.cwd()}/.nycrc.json`.
const { exclude } = require('../../.nycrc.json');

const mapExcludeToJestCollectCoverageFrom = item => `!<rootDir>/${item}`;

module.exports = [
  '<rootDir>/src/**/*.{ts,tsx}',
  ...exclude.map(mapExcludeToJestCollectCoverageFrom),
];
