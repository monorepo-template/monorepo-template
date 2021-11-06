module.exports = function findOneOf(rule) {
  return Object.prototype.hasOwnProperty.call(rule, 'oneOf');
};
