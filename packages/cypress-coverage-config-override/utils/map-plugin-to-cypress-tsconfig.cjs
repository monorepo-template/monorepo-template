const TSCONFIG_PATH = require('../constants/tsconfig-path.cjs');
const filterPluginByTypeScript = require('../utils/filter-plugin-by-typescript.cjs');

module.exports = function mapPluginToCypressTSConfig(plugin) {
  if (!filterPluginByTypeScript(plugin)) {
    return plugin;
  }

  // Since `plugin` is not a vanilla object, we cannot use the spread operator
  //   to simply make a new object.
  plugin.tsconfig = TSCONFIG_PATH;
  plugin.options.tsconfig = TSCONFIG_PATH;

  return plugin;
};
