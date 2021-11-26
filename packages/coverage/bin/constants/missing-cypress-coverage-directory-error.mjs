const MISSING_CYPRESS_COVERAGE_DIRECTORY_ERROR = new Error(
  'Expected Cypress coverage directory to exist. Did you forget to run `yarn cypress`?',
);

export default MISSING_CYPRESS_COVERAGE_DIRECTORY_ERROR;
