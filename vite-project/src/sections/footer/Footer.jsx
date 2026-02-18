import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import footerLogo from "../../assets/footerLogo.png"
import './footer.css'

const Footer = () => {


    const data = [
        {
            title: "About",
            links: ["HOW IT WORKS", "ABOUT US", "CAREERS", "PREMIUM MEMBERSHIP", "ELITE MEMBERSHIP", "NEWSROOM", "MEMBER STORIES", "REFERAL", "GIFT CARDS"]
        },
        {
            title: "Resources",
            links: ["ON THE FLY", "TRAVEL GLOSSARY", "WINDOW SEAT BLOG", "HOW TO FIND CHEAP FLIGHTS", "STUDY ABROAD SCHOLARSHIPS", "TRAVEL COMMUNNITY", "ADVERTISE WITH US", "MEDIA KIT"]
        },
        {
            title: "Support",
            links: ["HELP CENTER","CONTACT US"]
        },
        {
            title: "Follow Us",
            links: [<FaFacebookF />, <FaYoutube />]
        }

    ]

  return (
    <footer className=''>
        <div className=' flex justify-around  gap-8 text-sm font-medium bg-[#004449] text-[#FFFEF0] footer-body'>
            {data.map( (item,idx) => (
                <div className="flex flex-col gap-x-7 footer-column" key={idx}>
                    <div className="">
                    {item.title}
                    </div>

                    <ul>
                        {item.links.map( (link, idx) => (
                            <li key={idx}>{link}</li>
                        ))}
                    </ul>
                </div>
            ) )}
        </div>
        <div className='footer-bottom flex items-center justify-between bg-white gap-4 text-sm font-medium bg-pink-300'>
            <div className=""><img src={footerLogo} alt="asda" /></div>
            <div className=""><h1>TEAMS PRIVACY © GOING 2023</h1></div>
        </div>
    </footer>
  )
}

export default Footer