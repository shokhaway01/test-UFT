import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './sections/about/About'
import Greeting from './sections/greeting/Greeting'
import RealDeals from "./sections/realDeals/realDeals"

function App() {

  return (
    <>
     <Greeting />
     <About />
     <RealDeals />
    </>
  )
}

export default App
