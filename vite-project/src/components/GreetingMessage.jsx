import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const GreetingMessage = () => {
  return (
    <div className='greeting-message flex p-0 items-center h-[70vh] justify-center text-left flex-col gap-4'>
                <div className="greeting-message-container">
                    <h1 className='overpaying text-[80px] font-bold'>Less overpaying.</h1>
                    <h1 className='traveling text-[80px]'>More traveling.</h1>
    
                    <p className='text-[32px] text-[#FFFEF0] mt-4'>Meet the travel membership that <br /> saves you hundreds on flights</p>
                    <br />
                    <div className="w-[300px] h-[36px] text-[16px] bg-[#0BFF80] text-[#004449] py-1 px-8 mt-2 rounded-full flex items-center justify-center gap-2 cursor-pointer">
                    <button className=''>Get Free Flight Alerts</button>
                    <FaArrowRightLong />
                    </div>
                </div>
                
            </div>
  )
}

export default GreetingMessage