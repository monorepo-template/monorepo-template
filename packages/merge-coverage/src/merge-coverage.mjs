import { writeFileSync } from 'fs';
import makeDir from 'make-dir';
import { join } from 'path';
import getCoverageMap from './utils/get-coverage-map.mjs';

/*
Consider `bin/merge-coverage` being a monorepo-template coverage merging module,
  while moving `src/merge-coverage` to a more generic multi-directory coverage
  merging module.
*/

const DEFAULT_OPTIONS = Object.create(null);

export default async function mergeCoverage(
  paths,
  {
    enableLogging = true,
    outputDir = '.nyc_output',
    outputFile = 'out.json',
    reporter = ['clover', 'json', 'lcov', 'text'],
    workingDirectory = process.cwd(),
  } = DEFAULT_OPTIONS,
) {
  const map = await getCoverageMap({
    enableLogging,
    paths,
    reporter,
    workingDirectory,
  });

  const OUTPUT_DIR = join(workingDirectory, outputDir);
  await makeDir(OUTPUT_DIR);

  const OUTPUT_FILE = join(OUTPUT_DIR, outputFile);

  if (enableLogging) {
    console.log(`Writing coverage file: ${OUTPUT_FILE}`);
  }

  const mapStr = JSON.stringify(map, null, 2);
  writeFileSync(OUTPUT_FILE, mapStr, 'utf8');
}
