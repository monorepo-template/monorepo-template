import configureYarnBerry from '@monorepo-template/webpack-configure-next-yarn-berry';
import nextBabelConfig from './next.babel.mjs';

const BABEL_LOADER_REGEXP = /next[/\\]dist[/\\]build[/\\]babel[/\\]loader/;

const findBabelLoader = rule =>
  Object.prototype.hasOwnProperty.call(rule, 'use') &&
  BABEL_LOADER_REGEXP.test(rule.use.loader);

const findNextSwcLoader = rule =>
  Object.prototype.hasOwnProperty.call(rule, 'use') &&
  rule.use.loader === 'next-swc-loader';

const configureNextBabel = (webpackConfig, options) => {
  const babelOptions = nextBabelConfig(options);
  if (typeof babelOptions === 'undefined') {
    return webpackConfig;
  }

  // Override all files with these Babel options.
  const overrides = [
    {
      test: /.*/,
      ...babelOptions,
    },
  ];

  const mapRuleToNextBabelRule = rule => {
    if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
      return {
        ...rule,
        oneOf: rule.oneOf.map(mapRuleToNextBabelRule),
      };
    }

    // Extend the Babel loader with Next/Babel config.
    if (findBabelLoader(rule)) {
      return {
        ...rule,
        use: {
          ...rule.use,
          options: {
            ...rule.use.options,
            overrides: [...rule.use.options.overrides, ...overrides],
          },
        },
      };
    }

    // Replace the Next SWC loader with Next/Babel config.
    if (findNextSwcLoader(rule)) {
      return {
        ...rule,
        use: {
          // Based on Next's Babel loader.
          // https://github.com/vercel/next.js/blob/79016b879f200c99cc3c3b69b2b84dee14b6615e/packages/next/build/webpack-config.ts#L440
          loader: 'next/dist/build/babel/loader',
          options: {
            cwd: options.dir,
            development: options.dev,
            distDir: `${options.dir}/${rule.use.options.nextConfig.distDir}`,
            hasJsxRuntime: true,
            hasReactRefresh: rule.use.options.hasReactRefresh,
            isServer: rule.use.options.isServer,
            overrides,
            pagesDir: rule.use.options.pagesDir,
          },
        },
      };
    }

    // Irrelevant rules are unchanged.
    return rule;
  };

  return {
    ...webpackConfig,
    module: {
      ...webpackConfig.module,
      rules: webpackConfig.module.rules.map(mapRuleToNextBabelRule),
    },
  };
};

export default {
  webpack(config, options) {
    const newConfig = configureNextBabel(
      configureYarnBerry(config, options),
      options,
    );
    return newConfig;
  },
};
