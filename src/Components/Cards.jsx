import React from 'react'

export default function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1]'>
        <div className='w-full  p-12 mt-[10vh] flex gap-6 '>
            <div className='w-1/2 bg-[#004D43] h-[60vh] rounded-xl flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 bottom-10 flex text-[#CDEA68] border-[#CDEA68] rounded-full '>&copy;2019-2022</button>
            </div>
            <div className=' w-1/2  h-[60vh] flex gap-6'>
                <div className='w-1/2 bg-[#212121] h-full flex justify-center items-center rounded-xl relative'>
                    <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 left-10 bottom-10 flex text-[#ffffff] border-white rounded-full '>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='w-1/2 bg-[#212121] h-full flex justify-center  items-center rounded-xl relative'>
                    <img className='p-[17vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-5 py-1 border-2 left-10 bottom-10 flex text-[#f0f0f0] border-[#ffffff] rounded-full '>BUISNESS BOOTCAMP ALUMINI</button>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}
