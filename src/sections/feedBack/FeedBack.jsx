import React from 'react'
import './feedBack.css'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


import icon from "../../assets/feedback-icon.png"

const FeedBack = () => {



    const Data = [
        {
            role: "member",
            person: "Maggie H.",
            value: "I got an alert from Going to Tokyo for $550 RT and immediately messaged my fiance to book! We visited Tokyo, Kyoto, Hiroshima, and Osaka. My fiance also proposed in Tokyo!!! Such an incredibly special trip that well never forget.",
        },
        {
            role: "Member since 2015",
            person: "Drew C.",
            value: `"We'd always talked about Spain, but flights were too expensive. Thanks to one of your Europe sale notifications, our flights were only around $680 for two!"`
        },
        {
            role: "Member since 2017",
            person: "Thomas P",
            value: "Thanks for the info on the Denver to Rome flight for $346 last November. At that price, I was able to turn my individual adventure trip into a super-cool family trip with my wife and two daughters."
        },
        {
            role: "Member since 2017",
            person: 'Kristen L.',
            value: "I woke up to an email detailing a sale from Atlanta to Hawaii (which feels like it never happens!), and we booked within an hour. It was totally impulsive but the best decision we’ve made in a long time! We each paid $377 roundtrip when all was said and done."
        },
        {
            role: "Member since 2017",
            person: 'Epstain J.',
            value: "I was able to take a solo trip to Europe for $400! I flew in and out of Barcelona, but I also visited Marrakech and Lisbon. So much history and culture in a 2 week period, it was incredible."
        }
    ]

  return (
    <div className='feedBackContainer h-[auto] feedback bg-[url(./assets/feedback.jpg)] bg-cover bg-center flex flex-col justify-center items-center'>
        <div className="text-[#004449] text-[44px]">
            <h1 className='text-center'>Loved by over 
                <br />
                <span className='bg-[#D7FFC2] rounded-lg'>two million</span> travelers
            </h1>
        </div>
        <div className="">
            <img src={icon} alt="nan" />
        </div>
        
        <div className="flex gap-6">
          
                
            {
            Data.map( (item, index) => {
                return(
                <div className="w-[300px] h-[400px] flex flex-col justify-between rounded-2xl  bg-white text-[#004449] card overflow-hidden" key={index}>

                    <div className="cardTop ">
                        <h2>
                            {item.value}
                        </h2>
                    </div>
                    <div className="cardBottom">
                        <h3>{item.person}</h3>
                        <p>{item.role}</p>
                    </div>

                </div>

                )
            } )}

        </div>

        <div className="arrows flex gap-4 text-white text-[30px]">
            <FaArrowLeftLong />
            <FaArrowRightLong />
        </div>
    </div>
  )
}

export default FeedBack