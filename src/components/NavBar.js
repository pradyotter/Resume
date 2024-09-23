'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLink from './navLink';
import { motion, stagger } from 'framer-motion';
const links = [
  { url: '/', title: 'Home' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
  { url: '/about', title: 'About' },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const listVariant = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const listItemVariant = {
    closed: {
      opacity: 0,
      y: -10,
    },
    opened: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className='h-full flex  items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className=''>
        <Link href='/'>
          <h1 className='logo text-[3rem] font-light'>Pradunya</h1>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 text-xl '>
        {links.map((link) => {
          return <NavLink key={link.title} link={link} />;
        })}
      </div>
      <div className='hidden md:flex gap-8 '>
        <Link href='https://github.com/pradyotter'>
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/pradunya-bhuyan/'>
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>
      </div>
      <div className='md:hidden'>
        <button
          className='w-10 h-8 flex flex-col justify-between relative z-50  '
          onClick={() => {
            setOpen(!open);
          }}
        >
          <motion.div
            variants={topVariant}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariant}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 bg-black text-white w-screen h-full  flex flex-col items-center justify-center gap-8 text-4xl'
          >
            {links.map((link) => {
              return (
                <motion.div variants={listItemVariant} key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
