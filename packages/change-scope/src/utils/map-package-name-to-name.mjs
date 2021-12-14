const NOT_FOUND = -1;

// This function needs a better name.
// It maps a scoped package name `@scope/name` to `name`.
export default function mapPackageNameToName(packageName) {
  if (packageName.indexOf('/') === NOT_FOUND) {
    return packageName;
  }
  return packageName.split('/')[1];
}
