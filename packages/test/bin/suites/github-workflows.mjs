import { readFileSync } from 'fs';
import { load as loadYaml } from 'js-yaml';
import { join } from 'path';
import CWD from '../constants/cwd.mjs';
import GITHUB_WORKFLOW_FILE_NAMES from '../constants/github-workflow-file-names.mjs';
import LOGGER from '../constants/logger.mjs';
import filterPathByWorkspace from '../utils/filter-path-by-workspace.mjs';
import mapGitHubWorkflowFileNameToJson from '../utils/map-github-workflow-file-name-to-json.mjs';

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
      for (const path of sources.paths) {
        if (!filterPathByWorkspace(path)) {
          LOGGER.addItem(`${path} (skipped; not a workspace)`);
          continue;
        }

        LOGGER.addItem(path);

        // For each workspace found, check its dependencies + devDependencies +
        //   peerDependencies for other workspaces, then require that other
        //   workspace's path be present in this `paths` array.
      }

      LOGGER.unindent();
    }

    LOGGER.unindent();
  }

  LOGGER.unindent();
}
