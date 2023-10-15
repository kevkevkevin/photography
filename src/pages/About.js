import React from 'react';
//import images
import WomanImage from '../img/about/woman.png'
//import link
import { Link } from 'react-router-dom';

//import framer 
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
  <motion.section
  initial={{ opacity: 0, y: '100%' }} 
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '100%' }}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* Image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomanImage} alt=''/>
        </div>
        {/* text */}
        <motion.div
        initial={{ opacity: 0, y: '-100%' }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-80%' }}
        transition={transition1} 
        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet constrector adiplicing elit.<b>Lorem ipsum dolor</b> sit amet constrector adiplicing elit.Lorem ipsum dolor sit amet constrector adiplicing elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet constrector adiplicing elit.Lorem ipsum dolor sit amet constrector adiplicing elit.Lorem ipsum dolor sit amet constrector adiplicing elit.</p>
          <Link to={'/portfolio'} className='btn '>View my works</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default About;
