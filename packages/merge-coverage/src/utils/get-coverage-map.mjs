import libCoverage from 'istanbul-lib-coverage';
import NYC from 'nyc';
import pMap from 'p-map';
import { join } from 'path';
import P_MAP_OPTIONS from '../constants/p-map-options.mjs';

/**
 * Instead of getting coverage from all coverage files in a base directory, we
 *   get coverage from all coverage files across multiple directories.
 * https://github.com/istanbuljs/nyc/blob/ab7c53b2f340b458789a746dff2abd3e2e4790c3/index.js#L420-444
 */
export default async function getCoverageMap({
  enableLogging,
  paths,
  reporter,
  workingDirectory,
}) {
  const map = libCoverage.createCoverageMap({});

  const nyc = new NYC({
    cwd: workingDirectory,
    reporter,
    skipEmpty: true,
    skipFull: false,
  });

  const filterByShouldInstrument = filename => {
    const shouldInstrument = nyc.exclude.shouldInstrument(filename);
    if (!shouldInstrument) {
      return false;
    }
    if (enableLogging) {
      console.log(
        `Excluding coverage file after remap: ${join(path, filename)}`,
      );
    }
    return true;
  };

  for (const path of paths) {
    const handlePMap = async file => {
      if (enableLogging) {
        console.log(`Merging coverage file: ${join(path, file)}`);
      }

      const report = await nyc.coverageFileLoad(file, path);
      map.merge(report);
    };

    const files = await nyc.coverageFiles(path);
    await pMap(files, handlePMap, P_MAP_OPTIONS);
    map.data = await nyc.sourceMaps.remapCoverage(map.data);
    if (nyc.config.excludeAfterRemap) {
      map.filter(filterByShouldInstrument);
    }
  }

  return map;
}
