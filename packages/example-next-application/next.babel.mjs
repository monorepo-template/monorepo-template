export default function nextBabelConfig({ dev }) {
  if (!dev) {
    return;
  }

  return {
    presets: ['next/babel'],
    plugins: ['babel-plugin-istanbul'],
  };
}
