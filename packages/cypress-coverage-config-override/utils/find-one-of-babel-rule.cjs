const findBabelRule = require('../utils/find-babel-rule.cjs');
const findOneOf = require('../utils/find-one-of.cjs');

module.exports = function findOneOfBabelRule(rule) {
  return findOneOf(rule) && rule.oneOf.some(findBabelRule);
};
