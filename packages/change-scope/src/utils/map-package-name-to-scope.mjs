const SCOPE = /^(?:@)([^/]+)(?:\/)/;

export default function mapPackageNameToScope(packageName) {
  const scope = packageName.match(SCOPE);
  if (scope === null) {
    return null;
  }
  return scope[1];
}
