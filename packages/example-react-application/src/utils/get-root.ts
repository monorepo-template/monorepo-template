import MISSING_ROOT_ERROR from '../constants/missing-root-error';

export default function getRoot(): HTMLElement {
  const root: HTMLElement | null = document.getElementById('root');
  if (root === null) {
    throw MISSING_ROOT_ERROR;
  }
  return root;
}
