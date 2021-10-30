module.exports = function hasOneOf(rule) {
  return Object.prototype.hasOwnProperty.call(rule, 'oneOf');
};
