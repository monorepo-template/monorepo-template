const mapRulesToInstrumented = require('./utils/map-rules-to-instrumented.cjs');

module.exports = function cypressCoverageConfigOverride(config) {
  console.log('Overriding Webpack configuration to add Cypress coverage.');

  return {
    ...config,
    module: {
      ...config.module,
      rules: mapRulesToInstrumented(config.module.rules),
    },
  };
};
