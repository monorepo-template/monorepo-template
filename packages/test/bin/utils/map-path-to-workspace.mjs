import RELATIVE_WORKSPACE_PATHS from '../constants/relative-workspace-paths.mjs';

export default function mapPathToWorkspace(path) {
  for (const relativeWorkspacePath of RELATIVE_WORKSPACE_PATHS) {
    if (path.startsWith(relativeWorkspacePath)) {
      return relativeWorkspacePath;
    }
  }
}
