import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feauture from './Components/Feauture'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen  text-black '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feauture />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
