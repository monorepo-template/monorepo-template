import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import CWD from '../constants/cwd.mjs';

export default function mapGitHubWorkflowFileNameToJson(fileName) {
  const path = join(CWD, '.github', 'workflows', fileName);
  const yaml = readFileSync(path, 'utf8');
  return load(yaml);
}
