import React, { useEffect } from 'react'
import Aboutstories from '../Aboutstories/Aboutstories'
import Featuredposts from '../Featured Posts/Featuredposts'
import Holidayseasons from '../HolidaySeasons/Holidayseasons'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Recent from '../Recent/Recent'
import Rogerbosch from '../RogerBosch/Rogerbosch'
import Subcribe from '../Subcribe/Subcribe'
import Footer from '../Footer/Footer'

const Routesfolder = () => {

  return (
    <>

        <Navbar/>
        <Home/>
        <Recent/>
        <Featuredposts/>
        <Rogerbosch/>
        <Holidayseasons/>
        <Aboutstories/>
        <Subcribe/>
        <Footer/>
    </>
  )
}

export default Routesfolder