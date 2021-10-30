import type { ReactElement } from 'react';
import ItemComponent from '../../components/nav-item';
import type ItemType from '../../types/nav-item';
import ITEMS from './constants/items';

export default function Nav(): ReactElement {
  return (
    <nav>
      <ul>
        {ITEMS.map(
          ({ title, url }: ItemType): ReactElement => (
            <ItemComponent key={url} title={title} url={url} />
          ),
        )}
      </ul>
    </nav>
  );
}
