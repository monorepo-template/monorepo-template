import type { ReactElement } from 'react';
import ItemComponent from '../../components/nav-item';
import type ItemType from '../../types/nav-item';
import ITEMS from './constants/items';

const mapItemToElement = ({ title, url }: ItemType): ReactElement => {
  return <ItemComponent key={url} title={title} url={url} />;
};

export default function Nav(): ReactElement {
  return (
    <nav>
      <ul>{ITEMS.map(mapItemToElement)}</ul>
    </nav>
  );
}
