import LOGGER from './constants/logger.mjs';
import testGitHubWorkflows from './suites/github-workflows.mjs';

testGitHubWorkflows();

LOGGER.log();

console.log('');
console.log('Success');
