import React from 'react';
import Nav from '../components/Nav';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import Line from '../components/Line';
import MarqueElem from '../components/MarqueElem';
const Page1 = () => {
  return (
    <div className='w-full h-screen relative'>
      <Loading />
      <Nav />
      <section className='w-full p-10 text-[#19191B] flex flex-col items-center justify-between'>
        <div className="leading-none flex items-center justify-between w-full">
          <motion.h1 style={{ fontFamily: "RhythmBold" }} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2}} className='text-[15rem] text-[#19191B]'>RAIN</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}} className='text-[1.5rem]'>
            Award-winning sports content that <br /> connects audiences across <br /> podcasts, video, and social media.
          </motion.p>
        </div>
        
      </section>
      {/* Animated Line Using Framer Motion */}
      <Line />
      <section className='w-full p-10 text-[#19191B] flex flex-col items-center justify-between'>
        <div className="leading-none flex items-center justify-between w-full">
          <MarqueElem />
          <motion.h1 style={{ fontFamily: "RhythmBold" }} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2}} className='text-[15rem] text-[#19191B] uppercase '>delay</motion.h1>
        </div>
      </section>
    </div>
  );
};

export default Page1;
