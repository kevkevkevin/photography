import React from 'react';
//import images
import WomanImg from '../img/home/woman.png'
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions'


const Home = () => {
  return (
  <motion.section 
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & image wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div 
        initial={{ opacity: 0, y: '-50%' }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-50%' }}
        transition={transition1}
        className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 text-shadow-xl shadow-white-500/50'>
            photographer <br /> & film maker
          </h1>
          <p className='text-[26px] lg:text[36px] font-primary mb-5 lg:mb-12'>Jeddah, KSA</p>
          <Link to={'./contact'} className='btn mb-[30px] hover:bg-[#E8F1F6 ] transition-all delay-35 hover:text-[#000]'>Hire Me</Link>
        </motion.div>
        {/* image */}
        <div className='flex justify-end lg:max-h-max relative top-[-170px] lg:top-[0px]'>
          <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className='relative lg:-right-40 overflow-hidden'>
            <motion.img
            whileHover={{scale: 1.1}}
            transition={transition1}
            src={WomanImg} alt='' />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Home;
