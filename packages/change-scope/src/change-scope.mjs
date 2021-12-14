import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import mapPackageNameToName from './utils/map-package-name-to-name.mjs';
import mapPackageNameToScope from './utils/map-package-name-to-scope.mjs';

export default function changeScope(dir, newScope) {
  const path = join(dir, 'package.json');

  const oldJsonStr = readFileSync(path, 'utf8');
  const oldJson = JSON.parse(oldJsonStr);
  const oldPackageName = oldJson.name;
  const oldName = mapPackageNameToName(oldPackageName);
  const oldScope = mapPackageNameToScope(oldPackageName);

  const newName = `${oldScope ? `${oldScope}-` : ''}${oldName}`;
  const newPackageName = `@${newScope}/${newName}`;
  const newJson = {
    ...oldJson,
    name: newPackageName,
  };
  const newJsonStr = JSON.stringify(newJson, null, 2);

  writeFileSync(path, newJsonStr, 'utf8');
}
