'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ link }) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      className={`rounded p-1 ${
        link.url === path ? 'bg-black text-white' : ''
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
