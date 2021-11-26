import mergeCoverage from '@monorepo-template/merge-coverage';
import { existsSync } from 'fs';
import NYC from 'nyc';
import { join } from 'path';
import MISSING_CYPRESS_COVERAGE_DIRECTORY_ERROR from './constants/missing-cypress-coverage-directory-error.mjs';
import MISSING_JEST_COVERAGE_DIRECTORY_ERROR from './constants/missing-jest-coverage-directory-error.mjs';
import mapCypressCoverageDirectoryToPaths from './utils/map-cypress-coverage-directory-to-paths.mjs';

const CWD = process.cwd();
const CYPRESS_COVERAGE_DIRECTORY = join(CWD, 'cypress', 'coverage');
const JEST_COVERAGE_DIRECTORY = join(CWD, 'jest', 'coverage');
const TEMP_DIRECTORY = '.nyc_output';

if (!existsSync(CYPRESS_COVERAGE_DIRECTORY)) {
  throw MISSING_CYPRESS_COVERAGE_DIRECTORY_ERROR;
}

if (!existsSync(JEST_COVERAGE_DIRECTORY)) {
  throw MISSING_JEST_COVERAGE_DIRECTORY_ERROR;
}

const coveragePaths = [
  JEST_COVERAGE_DIRECTORY,
  ...mapCypressCoverageDirectoryToPaths(CYPRESS_COVERAGE_DIRECTORY),
];

await mergeCoverage(coveragePaths, {
  outputDirectory: TEMP_DIRECTORY,
  workingDirectory: CWD,
});

const nyc = new NYC({
  cwd: CWD,
  reporter: ['clover', 'json', 'lcov', 'text'],
  skipEmpty: true,
  skipFull: false,
  tempDirectory: TEMP_DIRECTORY,
});

await nyc.report();

const THRESHOLDS = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
};

await nyc.checkCoverage(THRESHOLDS, false);
