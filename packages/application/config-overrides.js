const cypressConfigOverride = require('@monorepo-template/cypress-coverage-config-override');

module.exports = function override(config, env) {
  return cypressConfigOverride(config, env);
};
