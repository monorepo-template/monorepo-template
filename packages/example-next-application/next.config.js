export default {
  webpack(config, options) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(tsx|ts|js|mjs|jsx)$/,
            include: input => {
              return (
                !input.includes('/.yarn/cache/') &&
                !input.includes('/.yarn/$$virtual/') &&
                !input.includes('/.yarn/unplugged/')
              );
            },
            use: options.defaultLoaders.babel,
          },
        ],
      },
    };
  },
};
