const BABEL_PLUGIN_ISTANBUL_PATH = require('../constants/babel-plugin-istanbul-path.cjs');

module.exports = function mapBabelRuleToInstrumented(rule) {
  console.log(
    `Importing \`babel-plugin-istanbul\` from ${BABEL_PLUGIN_ISTANBUL_PATH}`,
  );

  return {
    ...rule,
    options: {
      ...rule.options,
      plugins: [...rule.options.plugins, BABEL_PLUGIN_ISTANBUL_PATH],
    },
  };
};
