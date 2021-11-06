const MISSING_BABEL_LOADER_ERROR = require('../constants/missing-babel-loader-error.cjs');
const findBabelRule = require('../utils/find-babel-rule.cjs');
const mapBabelRuleToInstrumented = require('../utils/map-babel-rule-to-instrumented.cjs');

module.exports = function mapOneOfBabelRuleToInstrumented(rule) {
  const babelRuleIndex = rule.oneOf.findIndex(findBabelRule);
  if (babelRuleIndex === -1) {
    throw MISSING_BABEL_LOADER_ERROR;
  }

  const babelRule = rule.oneOf[babelRuleIndex];
  return {
    ...rule,
    oneOf: [
      ...rule.oneOf.slice(0, babelRuleIndex),
      mapBabelRuleToInstrumented(babelRule),
      ...rule.oneOf.slice(babelRuleIndex + 1),
    ],
  };
};
