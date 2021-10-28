export default function createRoot(): HTMLElement {
  const root: HTMLElement = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
  return root;
}
