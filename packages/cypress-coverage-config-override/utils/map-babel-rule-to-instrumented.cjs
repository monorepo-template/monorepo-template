const BABEL_PLUGIN_ISTANBUL_PATH = require('../constants/babel-plugin-istanbul-path.cjs');

module.exports = function mapBabelRuleToInstrumented(rule) {
  return {
    ...rule,
    options: {
      ...rule.options,
      plugins: [...rule.options.plugins, BABEL_PLUGIN_ISTANBUL_PATH],
    },
  };
};
