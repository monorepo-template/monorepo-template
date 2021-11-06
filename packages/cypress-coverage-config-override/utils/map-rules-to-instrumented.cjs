const MISSING_ONE_OF_RULE_ERROR = require('../constants/missing-one-of-rule-error.cjs');
const findOneOfBabelRule = require('../utils/find-one-of-babel-rule.cjs');
const mapOneOfBabelRuleToInstrumented = require('../utils/map-one-of-babel-rule-to-instrumented.cjs');

module.exports = function mapRulesToInstrumented(rules) {
  const oneOfRuleBabelRuleIndex = rules.findIndex(findOneOfBabelRule);
  if (oneOfRuleBabelRuleIndex === -1) {
    throw MISSING_ONE_OF_RULE_ERROR;
  }

  const oneOfBabelRule = rules[oneOfRuleBabelRuleIndex];
  return [
    ...rules.slice(0, oneOfRuleBabelRuleIndex),
    mapOneOfBabelRuleToInstrumented(oneOfBabelRule),
    ...rules.slice(oneOfRuleBabelRuleIndex + 1),
  ];
};
