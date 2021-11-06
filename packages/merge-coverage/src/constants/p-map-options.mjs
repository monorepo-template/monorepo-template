import { cpus } from 'os';

const P_MAP_OPTIONS = {
  concurrency: cpus().length,
};

export default P_MAP_OPTIONS;
