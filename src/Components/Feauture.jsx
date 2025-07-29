import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'


const Feauture = () => {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-10 '>
            <div className='w-full h-10  px-10 border-b-2 pb-28 '>
                <h1 className='text-[8vh] tracking-tight'>Feautured Projects</h1>
            </div>
            <div className='w-full flex '>
                <div className='w-1/2 flex items-center mt-16 -mb-16 ml-16 gap-3'>
                    <div className='w-3 h-3 bg-black rounded-full'></div>
                    <h1>FYDE</h1>
                </div>
                <div className='w-1/2 flex items-center mt-16 -mb-16 gap-3'>
                    <div className='w-3 h-3 bg-black rounded-full'></div>
                    <h1>VISE</h1>
                </div>
            </div>
            <div className='px-16'>
                <div className='cards flex gap-6 mt-20 '>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}

                        className='cardContainer w-1/2 h-[90vh] relative  '>
                        <h1 className=' flex overflow-hidden absolute z-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2  text-[18vh] text-[#CDEA68] font-founders-grotesk'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span
                                    className='inline-block'
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}

                                >{item}</motion.span>
                            ))}
                        </h1>
                        <div className='w-full h-full bg-green-600 overflow-hidden rounded-xl hover:scale-[0.95] duration-700 '>
                            <img className="bg-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className='cardContainer w-1/2 h-[90vh] relative'>
                        <h1 className=' flex overflow-hidden absolute z-10 right-full translate-x-1/2 -translate-y-1/2 top-1/2  text-[18vh] text-[#CDEA68] font-founders-grotesk'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span
                                    className='inline-block'
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}

                                >{item}</motion.span>
                            )}
                        </h1>
                        <div className='w-full h-full bg-green-600 overflow-hidden rounded-xl hover:scale-[0.95] duration-700'>
                            <img className="bg-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='w-full  mb-[20vh] flex '>
                <div className='w-1/2 mt-5 ml-16  flex gap-3  '>
                    {["audit", "copywriting", "sales deck", "slides design"].map((items, index) =>
                        <button className=' px-4 py-2  border-[1px] uppercase border-zinc-800  hover:bg-black duration-300 rounded-full flex items-center justify-center hover:text-white text-black '>{items}</button>
                    )}
                </div>
                <div className='w-1/2 mt-5 -ml-8  flex gap-3  '>
                    {["agency", "company presentation"].map((items, index) =>
                        <button className=' px-4 py-2  border-[1px] uppercase border-zinc-800  hover:bg-black duration-300 rounded-full flex items-center justify-center hover:text-white text-black     '>{items}</button>
                    )}
                </div>
            </div>
            <div className='w-full flex items-center justify-center cursor-pointer mb-[20vh]  '>
                <div  className='w-[38vh] gap-3 px-2 py-5 bg-zinc-900 text-white flex items-center justify-center border-[1px] uppercase border-zinc-800 duration-200 rounded-full hover:bg-black hover:text-white transition-colors'>
                    View all case studies <div className='bg-white w-3 h-3 rounded-full'></div>
                </div>
            </div>

        </div>
    )
}

export default Feauture
