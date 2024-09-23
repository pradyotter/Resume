'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import './about.css';
import { PiMouseScrollThin } from 'react-icons/pi';
import { SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaPython } from 'react-icons/fa';
import { FiFramer } from 'react-icons/fi';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import Brain from '@/components/Brain';

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='h-full '
    >
      <section className='h-full flex ' ref={containerRef}>
        <div className=' p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 lg:w-2/3 lg:pr-0 xl:1/2'>
          <div className='aboutUsContainer  flex flex-col gap-12 justify-center'>
            <h1 className='aboutUsHeading font-bold text-3xl text-[#383838] '>
              About
            </h1>
            <p className='aboutUsText flex items-start gap-3  text-xl  '>
              <i className='  w-10 h-1 mt-[.5rem] bg-yellow-500'></i>
              Throughout my academic journey, I&apos;ve honed my skills in web
              development and developed a deep appreciation for design. My
              education has provided me with a solid foundation in this field,
              which I&apos;ve further strengthened through hands-on projects and
              a commitment to continuous self-improvement.
            </p>
            <motion.i
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <PiMouseScrollThin className='mt-5 cursor-pointer' size={35} />
            </motion.i>
          </div>

          {/* SKILL CONTAINER */}
          <div
            className='skillsContainer flex flex-col gap-8 mt-[4rem] aboutUsHeading '
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: '-300%' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className='text-center aboutUsHeading text-[2rem] font-bold'
            >
              My Skills
            </motion.h1>
            <motion.div
              initial={{ x: '-300%' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className=' skillList grid grid-cols-4 grid-rows-3 max-w-[100%]   gap-x-[4rem] gap-y-[4rem] mx-auto  '
            >
              <div className='  flex flex-col gap-3 items-center  bg-[#3d3e42] rounded px-10 py-8 hover:bg-[#f0bf6c] cursor-pointer  transition-all duration-300 '>
                <FaHtml5 size={28} color='#ce530c' />
                <p className=' text-white'>Html</p>
              </div>
              <div className='  flex flex-col gap-3 items-center  bg-[#3d3e42] rounded px-10 py-8 hover:bg-[#f0bf6c] cursor-pointer  transition-all duration-300 '>
                <FaCss3Alt size={28} color='orange' />
                <p className=' text-white'>Css</p>
              </div>
              <div className='flex flex-col gap-3 items-center bg-[#3d3e42] rounded px-10 py-8 hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <IoLogoJavascript size={28} color='#ffd600' />
                <p className='text-white'>javaScript</p>
              </div>
              <div className='flex flex-col items-center gap-3  bg-[#3d3e42] rounded px-10 py-8 hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <FaReact color='#5ed3f3' size={28} />
                <p className='text-white'>React</p>
              </div>
              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer'>
                <FiFramer
                  color='black'
                  size={28}
                  style={{
                    borderRadius: '50%',
                    background: 'white',
                    padding: '2px 2px',
                  }}
                />
                <p className='text-white'>Framer</p>
              </div>
              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8 hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer  '>
                <RiTailwindCssFill size={28} color='#18b2b6' />
                <p className='text-white'>Tailwind </p>
              </div>
              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <FaSass size={28} color='#c76494' />
                <p className='text-white'>Sass </p>
              </div>
              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <RiNextjsFill
                  size={28}
                  color='black'
                  style={{
                    borderRadius: '50%',
                    background: 'white',
                    padding: '2px 2px',
                  }}
                />
                <p className='text-white'>Next </p>
              </div>

              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <DiMongodb size={28} color='#118e4d' />
                <p className='text-white'>MongoDB</p>
              </div>

              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <FaPython size={28} color='#0671b3' />
                <p className='text-white'>Python </p>
              </div>

              <div className='flex flex-col items-center gap-3 bg-[#3d3e42] rounded px-10 py-8  hover:bg-[#f0bf6c]  transition-all duration-300 cursor-pointer '>
                <SiExpress size={28} color='#ffff' />
                <p className='text-white'>Express </p>
              </div>
            </motion.div>
          </div>

          {/*End of  SKILL CONTAINER */}
        </div>
        <div className='hidden lg:block w-1/3 z-80 sticky top-0   xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
