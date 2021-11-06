const mapPluginToCypressTSConfig = require('../utils/map-plugin-to-cypress-tsconfig.cjs');

module.exports = function mapPluginsToCypressTSConfig(plugins) {
  return plugins.map(mapPluginToCypressTSConfig);
};
