export default function getPackagePath() {
  const path = process.env.PACKAGE_PATH;
  if (!path) {
    return process.cwd();
  }
  return path;
}
