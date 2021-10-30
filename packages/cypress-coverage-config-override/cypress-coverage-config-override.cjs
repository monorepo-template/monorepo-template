const mapRulesToInstrumented = require('./utils/map-rules-to-instrumented.cjs');

module.exports = function cypressCoverageConfigOverride(config, env) {
  if (env !== 'development') {
    return config;
  }

  return {
    ...config,
    module: {
      ...config.module,
      rules: mapRulesToInstrumented(config.module.rules),
    },
  };
};
