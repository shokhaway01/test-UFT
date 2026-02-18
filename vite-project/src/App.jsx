import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './sections/about/About'
import Greeting from './sections/greeting/Greeting'
import RealDeals from "./sections/realDeals/realDeals"
import FeedBack from './sections/feedBack/FeedBack';
import FlightAlerts from './sections/flightAlerts/FlightAlerts';

function App() {

  return (
    <>
     <Greeting />
     <About />
     <RealDeals />
     <FeedBack />
     <FlightAlerts />
    </>
  )
}

export default App
