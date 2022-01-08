const PRESET_ENV = [
  require.resolve('@babel/preset-env'),
  {
    targets: {
      node: 'current',
    },
  },
];

module.exports = PRESET_ENV;
