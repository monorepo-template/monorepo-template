const { join } = require('path');

const TSCONFIG_PATH = require.resolve(
  join(process.cwd(), 'tsconfig.cypress.json'),
);

module.exports = TSCONFIG_PATH;
