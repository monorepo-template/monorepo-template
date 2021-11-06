const mapRulesToInstrumented = require('../utils/map-rules-to-instrumented.cjs');

module.exports = function mapModuleToInstrumented(m) {
  return {
    ...m,
    rules: mapRulesToInstrumented(m.rules),
  };
};
