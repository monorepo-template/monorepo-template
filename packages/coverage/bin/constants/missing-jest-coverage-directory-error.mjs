const MISSING_JEST_COVERAGE_DIRECTORY_ERROR = new Error(
  'Expected Jest coverage directory to exist. Did you forget to run `yarn jest`?',
);

export default MISSING_JEST_COVERAGE_DIRECTORY_ERROR;
