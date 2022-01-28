/// <reference types="cypress" />
import cypressCodeCoverageTask from '@cypress/code-coverage/task';

if (typeof process.env.NYC_REPORT_DIR === 'undefined') {
  process.env.NYC_REPORT_DIR = 'cypress/coverage';
}

export default function cypressPlugins(
  on: Cypress.PluginEvents,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  config: Cypress.PluginConfigOptions,
): Cypress.PluginConfigOptions {
  cypressCodeCoverageTask(on, config);
  return config;
}
