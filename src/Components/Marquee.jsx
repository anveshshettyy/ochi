import  {motion} from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full py-[16vh] bg-[#004D43] rounded-t-3xl'>
      <div className='text border-t-2 border-b-2 border-[#F1F1F1] flex whitespace-nowrap   py-10 overflow-hidden'>
        <motion.h1  initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity , duration: 5}}  className='text-[28vw] font-founders-grotesk leading-none text-white uppercase pt-5 mb-[-7vw] pr-20'>We  Are  Ochi</motion.h1>

        <motion.h1  initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity , duration: 5}}  className='text-[28vw] font-founders-grotesk leading-none text-white uppercase pt-5 mb-[-7vw] pr-20 '>We  Are  Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
