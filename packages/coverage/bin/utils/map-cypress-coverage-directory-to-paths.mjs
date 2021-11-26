import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Determine if `cypress/coverage` is the only coverage directory (localhost) or
 *   if it contains coverage subdirectories for parallelized tests.
 * e.g. `cypress/coverage/coverage-final.json` versus
 *   `cypress/coverage/ubuntu-chrome-1/coverage-final.json`
 */

export default function mapCypressCoverageDirectoryToPaths(root) {
  const contents = readdirSync(root);
  const directories = [];
  for (const name of contents) {
    const path = join(root, name);
    const pathLstat = lstatSync(path);

    // Track all subdirectories of the root directory.
    if (pathLstat.isDirectory()) {
      directories.push(path);
      continue;
    }

    // The root directory is the only coverage directory.
    if (pathLstat.isFile()) {
      return [root];
    }
  }

  return directories;
}
