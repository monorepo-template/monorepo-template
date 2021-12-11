import { readFileSync } from 'fs';
import { load as loadYaml } from 'js-yaml';
import { join } from 'path';
import CWD from '../constants/cwd.mjs';
import GITHUB_WORKFLOW_FILE_NAMES from '../constants/github-workflow-file-names.mjs';
import filterPathByWorkspace from '../utils/filter-path-by-workspace.mjs';

for (const gitHubWorkflowFileName of GITHUB_WORKFLOW_FILE_NAMES) {
  const gitHubWorkflowAbsolutePath = join(
    join(CWD, '.github', 'workflows'),
    gitHubWorkflowFileName,
  );
  const gitHubWorkflowYaml = readFileSync(gitHubWorkflowAbsolutePath, 'utf8');
  const gitHubWorkflowJson = loadYaml(gitHubWorkflowYaml);

  if (!Object.prototype.hasOwnProperty.call(gitHubWorkflowJson, 'on')) {
    continue;
  }

  const gitHubWorkflowRelativePath = `.github/workflows/${gitHubWorkflowFileName}`;
  if (typeof gitHubWorkflowJson.on !== 'object') {
    throw new Error(
      `Expected \`${gitHubWorkflowRelativePath}\`'s \`on\` property to be an object.`,
    );
  }

  for (const [event, sources] of Object.entries(gitHubWorkflowJson.on)) {
    if (typeof sources !== 'object') {
      throw new Error(
        `Expected \`${gitHubWorkflowRelativePath}\`'s \`on.${event}\` to be an object.`,
      );
    }
    if (!Object.prototype.hasOwnProperty.call(sources, 'paths')) {
      continue;
    }
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

    for (const path of sources.paths) {
      if (!filterPathByWorkspace(path)) {
        continue;
      }
      console.log(
        'Found workspace path: ' + path + ' in ' + gitHubWorkflowRelativePath,
      );

      // For each workspace found, check its dependencies + devDependencies +
      //   peerDependencies for other workspaces, then require that other
      //   workspace's path be present in this `paths` array.
    }
  }
}

console.log('Success');
