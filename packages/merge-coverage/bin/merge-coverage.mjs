import { resolve } from 'path';
import mergeCoverage from '..';

const PATHS = process.argv.slice(2).map(path => resolve(path));

await mergeCoverage(PATHS, {
  workingDirectory: process.cwd(),
});
