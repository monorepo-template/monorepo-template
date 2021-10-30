import type { Config, On } from '@cypress/code-coverage/task';
import cypressCodeCoverageTask from '@cypress/code-coverage/task';

export default function cypressPlugins(on: On, config: Config): Config {
  cypressCodeCoverageTask(on, config);
  return config;
}
