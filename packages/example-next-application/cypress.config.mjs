export default {
  fixturesFolder: false,
  projectId: '4akrvv',
  redirectionLimit: 2,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    specPattern: 'src/**/*.e2e.ts',
  },
  env: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    NODE_ENV: 'development',
  },
};
