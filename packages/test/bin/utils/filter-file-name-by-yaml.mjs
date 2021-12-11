const YAML_FILE = /\.ya?ml$/;

export default function filterFileNameByYaml(fileName) {
  return YAML_FILE.test(fileName);
}
