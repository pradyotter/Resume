'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import './portfolio.css';

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Super Foods',
    desc: 'Super Foods is an app that helps you find recipes quickly. Enter an ingredient or dish name in the search box to get detailed descriptions and recipes. Discover healthy meals, snacks, and gourmet dishes with easy-to-follow instructions and nutritional information. Enjoy cooking with Super Foods!',
    img: '/super_foods.png',
    link: 'https://super-foods.vercel.app/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Virtuo Vault',
    desc: 'Virtuo Vault is your go-to app for staying updated on cryptocurrency trends. Get real-time information on current coins and their market value, allowing you to track their performance at a glance. Additionally, Virtuo Vault provides insights into trending coins, helping you stay informed about the latest developments in the cryptocurrency market. ',
    img: '/virtuo_vault.png',
    link: 'https://crypto-verse-theta.vercel.app/',
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='h-screen'
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen  h-[calc(100vh-6rem)] flex items-center justify-center  text-8xl'>
          <h1 className='portfolioHeading'>Design Showcase</h1>
        </div>
        <div className='sticky top-0 flex h-screen  gap-4 items-center overflow-x-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => {
              return (
                <div
                  className={`h-screen w-screen gap-12 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className='flex flex-col fontParagraph  gap-8  text-white'>
                    <h1 className='text-xl md:text-4xl lg:text-6xl xl:text-8xl'>
                      {item.title}
                    </h1>
                    <div className='relative w-80 h-56 sm:w-[300px] sm:h-[300px] md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                      <Image
                        className='rounded-xl'
                        src={item.img}
                        alt={item.name}
                        fill
                      />
                    </div>
                    <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      className='flex justify-end sm:justify-end '
                    >
                      <button className=' p-2 text-sm md:p-4 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold rounded '>
                        Preview Project
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen gap-16 flex items-center justify-center text-center flex-col'>
        <h1 className='portfolioHeading lg:text-7xl xl:text-8xl md:text-6xl'>
          Pursuing a Project?
        </h1>
        <div className='relative '>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath
                xlinkHref='#circlePath'
                className='lg:text-lg xl:text-xl'
              >
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
