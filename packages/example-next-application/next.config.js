import compose from '@monorepo-template/compose-next-webpack';
import createConfigureBabel from '@monorepo-template/webpack-configure-next-babel';
import configureYarnBerry from '@monorepo-template/webpack-configure-next-yarn-berry';
import nextBabelConfig from './next.babel.mjs';

const configureBabel = createConfigureBabel(nextBabelConfig);
export default {
  productionBrowserSourceMaps: true,
  webpack: compose(configureBabel, configureYarnBerry),
};
