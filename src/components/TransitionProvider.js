'use client';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const path = usePathname();
  const isAboutPage = path === '/about';
  const portfolioPage = path === '/portfolio';

  return (
    <AnimatePresence mode='wait'>
      <div
        key={path}
        className={`w-screen min-h-[100%] ${
          isAboutPage
            ? 'bg-gradient-to-b from-[#ffffff] to-[#858addc4]'
            : portfolioPage
            ? 'bg-gradient-to-b from-blue-100 to-red-100'
            : 'bg-gradient-to-b from-[#BBD8F1] to-[#EDEDED]'
        }`}
      >
        <motion.div
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='bg-black h-screen w-screen rounded-b-[100px] z-40 fixed'
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='text-white text-2xl md:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-black fixed z-50'
        >
          <h1 className=' uppercase'>
            {path === '/' ? 'home' : path.substring(1)}
          </h1>
        </motion.div>
        <motion.div
          initial={{ height: '100%' }}
          animate={{ height: '0vh', transition: { delay: 0.8, ease: easeOut } }}
          className=' h-screen w-screen rounded-t-[100px] bottom-0 z-30 fixed'
        ></motion.div>
        <div className='h-24'>
          <NavBar />
        </div>
        <div className='min-h-[100%]'>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
