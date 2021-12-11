import mapWorkspaceGlobToEndsWithError from '../utils/map-workspace-glob-to-ends-with-error.mjs';

export default function mapWorkspaceGlobToRelativePath(glob) {
  if (!glob.endsWith('/*')) {
    throw mapWorkspaceGlobToEndsWithError(glob);
  }
  return glob.replace(/\/\*$/, '');
}
