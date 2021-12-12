import GITHUB_WORKFLOW_FILE_NAMES from '../constants/github-workflow-file-names.mjs';
import LOGGER from '../constants/logger.mjs';
import mapGitHubWorkflowFileNameToJson from '../utils/map-github-workflow-file-name-to-json.mjs';
import mapPathToPackageJson from '../utils/map-path-to-package-json.mjs';
import mapPathToWorkspace from '../utils/map-path-to-workspace.mjs';

const WORKSPACE_PACKAGE_VERSION = /^workspace:/;

const DEPENDENCY_PROPERTIES = [
  'dependencies',
  'devDependencies',
  'peerDependencies',
];

export default function testGitHubWorkflows() {
  LOGGER.addItem('GitHub workflows');

  // GitHub workflow relative paths
  LOGGER.indent();
  for (const gitHubWorkflowFileName of GITHUB_WORKFLOW_FILE_NAMES) {
    const gitHubWorkflowRelativePath = `.github/workflows/${gitHubWorkflowFileName}`;
    const gitHubWorkflowJson = mapGitHubWorkflowFileNameToJson(
      gitHubWorkflowFileName,
    );

    if (!Object.prototype.hasOwnProperty.call(gitHubWorkflowJson, 'on')) {
      LOGGER.addItem(
        `${gitHubWorkflowRelativePath} (skipped; does not target any events)`,
      );
      continue;
    }

    LOGGER.addItem(gitHubWorkflowRelativePath);

    if (typeof gitHubWorkflowJson.on !== 'object') {
      throw new Error(
        `Expected \`${gitHubWorkflowRelativePath}\`'s \`on\` property to be an object.`,
      );
    }

    // GitHub workflow event triggers
    LOGGER.indent();
    for (const [event, sources] of Object.entries(gitHubWorkflowJson.on)) {
      if (typeof sources !== 'object') {
        throw new Error(
          `Expected \`${gitHubWorkflowRelativePath}\`'s \`on.${event}\` to be an object.`,
        );
      }

      if (!Object.prototype.hasOwnProperty.call(sources, 'paths')) {
        LOGGER.addItem(`${event} (skipped; does not target any paths)`);
        continue;
      }

      LOGGER.addItem(event);

      if (!Array.isArray(sources.paths)) {
        throw new Error(
          `Expected \`${gitHubWorkflowRelativePath}\`'s \`on.${event}.paths\` to be an array.`,
        );
      }

      if (!sources.paths.includes(gitHubWorkflowRelativePath)) {
        throw new Error(
          `Expected \`${gitHubWorkflowRelativePath}\`'s \`on.${event}.paths\` to include itself ('${gitHubWorkflowRelativePath}').`,
        );
      }

      // GitHub workflow event trigger paths
      LOGGER.indent();
      const workspacePackageJsons = new Map();
      for (const path of sources.paths) {
        const workspacePath = mapPathToWorkspace(path);
        if (typeof workspacePath === 'undefined') {
          LOGGER.addItem(`${path} (skipped; not a workspace)`);
          continue;
        }

        if (workspacePackageJsons.has(workspacePath)) {
          LOGGER.addItem(`${path} (skipped; already tested)`);
          continue;
        }

        LOGGER.addItem(path);

        const packageJson = mapPathToPackageJson(workspacePath);
        workspacePackageJsons.set(workspacePath, packageJson);
      }

      const filterWorkspacePackageJsonsByPackageName = packageName => {
        for (const packageJson of workspacePackageJsons.values()) {
          if (packageJson.name === packageName) {
            return true;
          }
        }
        return false;
      };

      for (const [
        workspacePath,
        packageJson,
      ] of workspacePackageJsons.entries()) {
        // Check the workspace's `dependencies` + `devDependencies` +
        //   `peerDependencies` for other workspaces.
        for (const property of DEPENDENCY_PROPERTIES) {
          if (!Object.prototype.hasOwnProperty.call(packageJson, property)) {
            continue;
          }

          // For each dependency, check if it is a workspace package.
          for (const [packageName, packageVersion] of Object.entries(
            packageJson[property],
          )) {
            if (!WORKSPACE_PACKAGE_VERSION.test(packageVersion)) {
              continue;
            }

            if (filterWorkspacePackageJsonsByPackageName(packageName)) {
              continue;
            }

            throw new Error(
              `Expected \`${gitHubWorkflowRelativePath}\`'s \`on.${event}.paths\` to include \`${packageName}\`'s workspace path, because it is a dependency of \`${workspacePath}\`.`,
            );
          }
        }
      }

      LOGGER.unindent();
    }

    LOGGER.unindent();
  }

  LOGGER.unindent();
}
