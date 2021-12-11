import { readdirSync } from 'fs';
import { join } from 'path';
import MISSING_GITHUB_DIRECTORY_ERROR from '../constants/missing-github-directory-error.mjs';
import MISSING_GITHUB_WORKFLOWS_DIRECTORY_ERROR from '../constants/missing-github-workflows-directory-error.mjs';
import filterFileNameByYaml from '../utils/filter-file-name-by-yaml.mjs';

export default function mapPathToGitHubWorkflowFileNames(path) {
  if (!readdirSync(path).includes('.github')) {
    throw MISSING_GITHUB_DIRECTORY_ERROR;
  }

  const gitHubAbsolutePath = join(path, '.github');
  const gitHubFileNames = readdirSync(gitHubAbsolutePath);
  if (!gitHubFileNames.includes('workflows')) {
    throw MISSING_GITHUB_WORKFLOWS_DIRECTORY_ERROR;
  }

  const gitHubWorkflowsAbsolutePath = join(gitHubAbsolutePath, 'workflows');
  return readdirSync(gitHubWorkflowsAbsolutePath).filter(filterFileNameByYaml);
}
