'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='h-screen'
    >
      <div className='h-full px-4 mt-4 md:mt-0 md:flex md:flex-col   md:justify-center sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
        <div className=' h-full flex flex-col gap-12 items-center mt-[8rem] justify-center '>
          <h1 className=' heading text-4xl font-bold md:text-6xl  '>
            Welcome to My Creative Space
          </h1>
          <p className='para  tracking-wider md:text-xl md:w-1/2'>
            Hi there! I&apos;m Pradunya, a passionate and dedicated Front End
            Developer with a keen interest in web development. I graduated from
            Dayananda Sagar College of Engineering with a Master&apos;s degree
            in Computer Applications, and I am eager to apply my knowledge and
            skills to real-world challenges and make a meaningful impact.
          </p>
          <div className='flex gap-4'>
            <button className='p-4 rounded-lg ring-black bg-black text-white'>
              <Link href='/portfolio'>View My Work</Link>
            </button>
            <button className='p-4 rounded-lg ring-black bg-black text-white'>
              {' '}
              <Link href='/contact'>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
