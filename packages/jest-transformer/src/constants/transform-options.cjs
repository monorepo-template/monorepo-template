const PRESET_ENV = require('../constants/preset-env.cjs');
const PRESET_REACT = require('../constants/preset-react.cjs');
const PRESET_TYPESCRIPT = require('../constants/preset-typescript.cjs');

const TRANSFORM_OPTIONS = {
  presets: [PRESET_ENV, PRESET_REACT, PRESET_TYPESCRIPT],
};

module.exports = TRANSFORM_OPTIONS;
