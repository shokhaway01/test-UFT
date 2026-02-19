import React from 'react'
import AboutTop from '../../components/AboutTop'
import AboutBottom from '../../components/AboutBottom'
import './about.css'
import Image from '../../assets/sicilia.png'

const About = () => {
  return (
    <div className={`w-full h-[180vh] about-section relative overflow-hidden`}>

        <AboutTop />
        <AboutBottom />

    </div>
  )
}

export default About