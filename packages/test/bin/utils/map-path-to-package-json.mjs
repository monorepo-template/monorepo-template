import { readFileSync } from 'fs';
import { join } from 'path';

export default function mapPathToPackageJson(path) {
  const packageFileName = join(path, 'package.json');
  const packageContents = readFileSync(packageFileName, 'utf8');
  const packageJson = JSON.parse(packageContents);
  return packageJson;
}
