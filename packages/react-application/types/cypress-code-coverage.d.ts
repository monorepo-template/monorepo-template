declare module '@cypress/code-coverage/task' {
  import 'cypress';
  export default function registerCodeCoverageTasks(
    on: Cypress.PluginEvents,
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    config: Cypress.PluginConfigOptions,
  ): void;
}
