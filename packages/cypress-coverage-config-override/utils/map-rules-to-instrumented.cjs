const MISSING_ONE_OF_RULE_ERROR = require('../constants/missing-one-of-rule-error.cjs');
const hasOneOf = require('../utils/has-one-of.cjs');
const mapOneOfRuleToInstrumented = require('../utils/map-one-of-rule-to-instrumented.cjs');

module.exports = function mapRulesToInstrumented(rules) {
  const oneOfRuleIndex = rules.findIndex(hasOneOf);
  if (oneOfRuleIndex === -1) {
    throw MISSING_ONE_OF_RULE_ERROR;
  }

  const oneOfRule = rules[oneOfRuleIndex];
  return [
    ...rules.slice(0, oneOfRuleIndex),
    mapOneOfRuleToInstrumented(oneOfRule),
    ...rules.slice(oneOfRuleIndex + 1),
  ];
};
