import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type Item from '../../types/nav-item';

export default function NavItem({ title, url }: Readonly<Item>): ReactElement {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  );
}
