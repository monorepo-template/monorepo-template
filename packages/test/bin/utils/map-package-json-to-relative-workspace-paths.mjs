import MISSING_PACKAGE_WORKSPACES_PROPERTY_ERROR from '../constants/missing-package-workspaces-property-error.mjs';
import PACKAGE_WORKSPACES_TYPE_ERROR from '../constants/package-workspaces-type-error.mjs';
import reduceWorkspaceGlobsToRelativePaths from '../utils/reduce-workspace-globs-to-relative-paths.mjs';

export default function mapPackageJsonToRelativeWorkspacePaths(packageJson) {
  if (!Object.hasOwnProperty.call(packageJson, 'workspaces')) {
    throw MISSING_PACKAGE_WORKSPACES_PROPERTY_ERROR;
  }

  if (!Array.isArray(packageJson.workspaces)) {
    throw PACKAGE_WORKSPACES_TYPE_ERROR;
  }

  return packageJson.workspaces.reduce(reduceWorkspaceGlobsToRelativePaths, []);
}
