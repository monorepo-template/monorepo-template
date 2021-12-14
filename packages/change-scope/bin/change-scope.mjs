import { join } from 'path';
import changeScope from '../index.mjs';
import PACKAGE_PATH from './constants/package-path.mjs';
import REPOSITORY_OWNER from './constants/repository-owner.mjs';

console.log('');
console.log(
  `Changing scope of \`${join(
    PACKAGE_PATH,
    'package.json',
  )}\` to \`@${REPOSITORY_OWNER}/\`.`,
);

changeScope(PACKAGE_PATH, REPOSITORY_OWNER);

console.log('');
console.log('Success');
