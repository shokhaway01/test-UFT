import React from 'react'
import './greeting.css'
import Header from '../../components/header'
import GreetingMessage from '../../components/greetingMessage'
import Carousel from '../../components/Carousel'



const Greeting = () => {
  return (
    <div className='greeting'>
        <Header/>
        <GreetingMessage />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Carousel />
    </div>
  )
}

export default Greeting