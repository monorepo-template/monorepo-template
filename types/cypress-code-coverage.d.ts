// https://github.com/cypress-io/code-coverage/blob/master/task.js
declare module '@cypress/code-coverage/task' {
  export interface Config {
    env: Env;
  }

  export interface Env {
    codeCoverageTasksRegistered: boolean;
  }

  export interface Mode {
    isInteractive: boolean;
  }

  export interface On {
    (event: 'task', tasks: Tasks): void;
  }

  export interface Tasks {
    combineCoverage(sentCoverage: string): null;
    coverageReport(): Promise<string> | null;
    resetCoverage(mode: Mode): null;
  }

  export default function registerCodeCoverageTasks(
    on: On,
    config: Config,
  ): Config;
}
