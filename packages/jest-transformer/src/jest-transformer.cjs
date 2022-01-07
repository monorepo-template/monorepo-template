const { createTransformer } = require('babel-jest').default;
const PRESET_ENV = require('./constants/preset-env.cjs');
const PRESET_REACT = require('./constants/preset-react.cjs');

module.exports = createTransformer({
  presets: [PRESET_ENV, PRESET_REACT, '@babel/preset-typescript'],
});
