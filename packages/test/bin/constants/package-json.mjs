import CWD from '../constants/cwd.mjs';
import mapPathToPackageJson from '../utils/map-path-to-package-json.mjs';

const PACKAGE_JSON = mapPathToPackageJson(CWD);

export default PACKAGE_JSON;
