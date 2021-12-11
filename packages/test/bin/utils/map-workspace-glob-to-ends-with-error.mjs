export default function mapWorkspaceGlobToEndsWithError(glob) {
  return new Error(`Expected workspace glob \`${glob}\` to end with \`/*\``);
}
