'use client';
import { motion } from 'framer-motion';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (reset) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  let text = 'Say Hello';
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 3, ease: 'easeInOut' }}
      className='h-screen '
    >
      <div className='h-full flex flex-col lg:flex-row   md:px-12 lg:px-20 xl:px-48'>
        <div className='h-1/2  lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          {text.split('').map((word, index) => {
            return (
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {word === ' ' ? '\u00A0' : word}
              </motion.p>
            );
          })}
          😀
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-1/2 lg:h-full lg:w-1/2  bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
        >
          <textarea
            rows={3}
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='user_message'
          />
          <span>My mail address is:</span>
          <input
            name='user_email'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none'
          />
          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
            Send
          </button>
          {success && (
            <span className='text-green-600'>
              Your Message has been sent Succesfullt
            </span>
          )}
          {error && (
            <span className='text-red-600'>
              Your Message has been sent Succesfully
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
