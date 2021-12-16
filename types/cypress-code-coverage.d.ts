// https://github.com/cypress-io/code-coverage/blob/master/task.js
declare module '@cypress/code-coverage/task' {
  export interface Config {
    readonly env: Env;
  }

  export interface Env {
    readonly codeCoverageTasksRegistered: boolean;
  }

  export interface Mode {
    readonly isInteractive: boolean;
  }

  export interface On {
    (event: 'task', tasks: Tasks): void;
    (event: string): void;
  }

  export interface Tasks {
    readonly combineCoverage: (sentCoverage: string) => null;
    readonly coverageReport: () => Promise<string> | null;
    readonly resetCoverage: (mode: Mode) => null;
  }

  export default function registerCodeCoverageTasks(
    on: On,
    // `config` is mutable.
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    config: Config,
  ): Config;
}
