import CWD from '../constants/cwd.mjs';
import mapPathToGitHubWorkflowFileNames from '../utils/map-path-to-github-workflow-file-names.mjs';

const GITHUB_WORKFLOW_FILE_NAMES = mapPathToGitHubWorkflowFileNames(CWD);

export default GITHUB_WORKFLOW_FILE_NAMES;
