import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import '../index.css'
import { easeIn, motion } from 'framer-motion';

export default function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen pt-1'>
            <div className='textStructure mt-40 px-12'>
                {["we create", "eye opening", "presentations"].map((item, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className='w-fit flex items-center gap-2 '>
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}

                                        className='w-[9vw] h-[5.7vw] bg-red-500 relative -top-[1.7vw] rounded-md'></motion.div>)}
                                <h1 className="leading-[6.5vw]  uppercase text-[9vw]  font-founders-grotesk">{item}</h1>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className='border-t-[1px] border-zinc-400 mt-[82px] flex justify-between items-center py-3 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <div key={index} className='text-md tracking-tight leading-none text-[2.5vh]'>{item}</div>
                    )
                })}
                <div className='flex items-center gap-5 group'>
                    <div className='px-4 py-2 border-[1px] uppercase border-zinc-800 duration-200 rounded-full group-hover:bg-black group-hover:text-white transition-colors'>
                        Start the project
                    </div>
                    <div className='w-10 h-10 rounded-full border border-black flex justify-center duration-700 items-center group-hover:bg-black group-hover:text-white transition-colors'>
                        <span className='rotate-45'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        
        </div >
    )
}
