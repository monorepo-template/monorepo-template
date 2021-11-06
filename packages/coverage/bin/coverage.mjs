import mergeCoverage from '@monorepo-template/merge-coverage';
import NYC from 'nyc';
import { join } from 'path';

const CWD = process.cwd();
const CYPRESS_COVERAGE_DIRECTORY = join(CWD, 'cypress', 'coverage');
const JEST_COVERAGE_DIRECTORY = join(CWD, 'jest', 'coverage');
const TEMP_DIRECTORY = '.nyc_output';

await mergeCoverage([CYPRESS_COVERAGE_DIRECTORY, JEST_COVERAGE_DIRECTORY], {
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
