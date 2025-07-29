import React from 'react'

export default function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl'>
            <h1 className='text-[3.4vw] tracking-tight leading-[4vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='w-full border-t-[2px] mt-[10vh] border-[#99AD53] flex'>
                <div className='w-1/2 p-2 '>
                    <h1 className='text-[8vh]'>Our approach:</h1>
                    <button className='mt-4 w-[28vh] h-[9vh] rounded-full bg-black text-white uppercase flex justify-center gap-10 items-center text-[2.5vh]'>Read More
                        <div className='w-2 h-2 bg-[#F1F1F1] rounded-full'>
                        </div>
                    </button>
                </div>
                <div className='w-1/2 h-[60vh] bg-red-600 rounded-2xl mt-8'>
                    <img className='h-full w-full object-cover rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}
