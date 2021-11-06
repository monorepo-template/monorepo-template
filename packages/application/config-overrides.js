const cypressConfigOverride = require('@monorepo-template/cypress-coverage-config-override');

const isCypressEnvironment = process.argv.includes('--cypress');

module.exports = function override(config) {
  if (!isCypressEnvironment) {
    return config;
  }

  return cypressConfigOverride(config);
};
