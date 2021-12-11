import RELATIVE_WORKSPACE_PATHS from '../constants/relative-workspace-paths.mjs';

export default function filterPathByWorkspace(path) {
  for (const relativeWorkspacePath of RELATIVE_WORKSPACE_PATHS) {
    if (path.startsWith(relativeWorkspacePath)) {
      return true;
    }
  }
  return false;
}
