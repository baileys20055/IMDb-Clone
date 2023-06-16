import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Props = { title: string; address: string; Icon: IconType };

export default function NavItem({ title, address, Icon }: Props) {
  return (
    <div>
      <li className="list-none">
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
          <Icon className="text-2xl sm:hidden mx-2" />
          <span className="hidden sm:inline my-2 text-sm">{title}</span>
        </Link>
      </li>
    </div>
  );
}
