module.exports = function findBabelRule(rule) {
  return /babel-loader/.test(rule.loader);
};
