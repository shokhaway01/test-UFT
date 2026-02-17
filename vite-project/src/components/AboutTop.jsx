import React from 'react'

import image1 from '../assets/Frame1.png'
import image2 from '../assets/Frame2.png'
import image3 from '../assets/Frame3.png'


const aboutData = [
    {
        image: image1,
        title: "Start with your airport.",
        body : "Choose US departure airports like your biggest airport, closest airport, and maybe even your parent’s."
    },
    {
        image: image2,
        title: "Watch the deals roll in.",
        body : "We keep a close eye on airfare to over 900 destinations around the world. When the prices drop, you know."
    },
    {
        image: image3,
        title: "Then book it.",
        body : "With flight details, booking links, and timeline estimates, all that’s left for you is to say, “Let’s go!”"
    }
]


const AboutTop = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-start gap-10  z-2'>
        <h1 className='text-[46px] text-[#004449]'>How Going ™ Works </h1>

        <div className="flex items-end gap-12">
    
            {
                aboutData.map( (item, index) => {
                    return (
                        <div className="flex flex-col w-xs text-center justify-around items-center p-0" key={index}>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='bg-[#FFFEF0] p-9 rounded-lg text-[#004449] flex flex-col gap-2'>
                                <h2 className='text-[24px]'>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    )
                } )
            }

        </div>

    </div>
  )
}

export default AboutTop