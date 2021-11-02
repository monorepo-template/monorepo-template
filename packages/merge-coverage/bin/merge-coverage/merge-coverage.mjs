import { writeFileSync } from 'fs';
import libCoverage from 'istanbul-lib-coverage';
import makeDir from 'make-dir';
import NYC from 'nyc';
import { cpus } from 'os';
import { join, resolve } from 'path';
import pMap from 'p-map';

const CWD = process.cwd();
const nyc = new NYC({});

process.env.NYC_CWD = CWD;

// Instead of getting coverage from all coverage files in a base directory, we
//   get coverage from all coverage files across multiple directories.
// https://github.com/istanbuljs/nyc/blob/ab7c53b2f340b458789a746dff2abd3e2e4790c3/index.js#L420-444
const getCoverageMap = async paths => {
  const map = libCoverage.createCoverageMap({});

  const pMapOptions = {
    concurrency: cpus().length,
  };

  for (const path of paths) {
    console.log(`Found coverage file: ${path}`);
    const files = await nyc.coverageFiles(path);

    const handlePMap = async file => {
      const report = await nyc.coverageFileLoad(file, path);
      map.merge(report);
    };

    await pMap(files, handlePMap, pMapOptions);
    map.data = await nyc.sourceMaps.remapCoverage(map.data);
    if (nyc.config.excludeAfterRemap) {
      map.filter(filename => nyc.exclude.shouldInstrument(filename));
    }
  }

  return map;
};

// const PATHS = process.argv.slice(2).map(path => resolve(path));
const map = await getCoverageMap([
  join(CWD, 'cypress', 'coverage'),
  join(CWD, 'jest', 'coverage'),
]);

const OUTPUT_DIR = resolve('./.nyc_output');
await makeDir(OUTPUT_DIR);

const OUTPUT_FILE = join(OUTPUT_DIR, 'out.json');
console.log(`Writing coverage file: ${OUTPUT_FILE}`);
writeFileSync(OUTPUT_FILE, JSON.stringify(map, null, 2), 'utf8');

// ---

const THRESHOLDS = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
};

await nyc.report();
await nyc.checkCoverage(THRESHOLDS, true);
