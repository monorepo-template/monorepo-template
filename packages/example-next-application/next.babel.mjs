export default function nextBabelConfig({ dev }) {
  if (!dev) {
    return;
  }

  return {
    plugins: ['babel-plugin-istanbul'],
    presets: ['next/babel'],
  };
}
