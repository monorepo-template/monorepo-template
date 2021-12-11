import PACKAGE_JSON from '../constants/package-json.mjs';
import mapPackageJsonToRelativeWorkspacePaths from '../utils/map-package-json-to-relative-workspace-paths.mjs';

const RELATIVE_WORKSPACE_PATHS =
  mapPackageJsonToRelativeWorkspacePaths(PACKAGE_JSON);

export default RELATIVE_WORKSPACE_PATHS;
