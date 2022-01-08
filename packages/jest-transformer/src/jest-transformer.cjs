const { createTransformer } = require('babel-jest').default;
const TRANSFORM_OPTIONS = require('./constants/transform-options.cjs');

module.exports = createTransformer(TRANSFORM_OPTIONS);
