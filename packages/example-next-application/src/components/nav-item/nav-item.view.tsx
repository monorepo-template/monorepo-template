import type { ReactElement } from 'react';
import Link from 'next/link';
import type Item from '../../types/nav-item';

export default function NavItem({ title, url }: Readonly<Item>): ReactElement {
  return (
    <li>
      <Link href={url}>{title}</Link>
    </li>
  );
}
