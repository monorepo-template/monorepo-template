import Module from '@monorepo-template/example-react-module';
import type { ReactElement } from 'react';
import Nav from '../../components/nav';

export default function Home(): ReactElement {
  return (
    <>
      <Nav />
      <Module />
    </>
  );
}
