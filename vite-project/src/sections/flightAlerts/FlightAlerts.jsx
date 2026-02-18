import React from 'react'
import './flightAlerts.css'

import alert from "../../assets/alert.png"

const FlightAlerts = () => {
  return (
    <div className='w-full h-[100vh] bg-[#FFFEF0] flex justify-center items-center relative'>
        <div className="w-[70%] h-[70%] bg-[#BAEBFF] rounded-xl flightAlerts flex flex-col items-center justify-around">
            <h1 className='text-4xl font-bold text-[#1B1B1B] overflow-hidden'>Never overpay for flights again</h1>   
            <h2 className='text-2xl text-[#1B1B1B] overflow-hidden max-w-xl text-center'>Everything great about going on vacation without the stress of searching for flights.</h2>   
            <button className='bg-[#483CFF] text-white py-2 px-4 rounded-full w-[140px] h-[100px] '>GET <br /> FREE <br /> FLIGHTS <br /> ALERTS</button>
            <img src={alert} alt="Plane" className='absolute left-40 top-6'/>
        </div>
    </div>
  )
}

export default FlightAlerts