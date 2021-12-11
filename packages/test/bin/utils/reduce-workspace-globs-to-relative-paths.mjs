import { readdirSync } from 'fs';
import mapWorkspaceGlobToEndsWithError from '../utils/map-workspace-glob-to-ends-with-error.mjs';

export default function reduceWorkspaceGlobsToRelativePaths(
  oldRelativeWorkspacePaths,
  newWorkspaceGlob,
) {
  if (!newWorkspaceGlob.endsWith('/*')) {
    throw mapWorkspaceGlobToEndsWithError(newWorkspaceGlob);
  }

  const newRelativeWorkspacesPath = newWorkspaceGlob.replace(/\/\*$/, '');

  // We use `/` instead of `path.join()` because this should pass on developers'
  //   Windows machines and the path will be `/` during CI.
  const mapWorkspaceFileNameToRelativePath = fileName =>
    `${newRelativeWorkspacesPath}/${fileName}`;

  const newWorkspaceFileNames = readdirSync(newRelativeWorkspacesPath);
  const newRelativeWorkspacePaths = newWorkspaceFileNames.map(
    mapWorkspaceFileNameToRelativePath,
  );
  return [...oldRelativeWorkspacePaths, ...newRelativeWorkspacePaths];
}
