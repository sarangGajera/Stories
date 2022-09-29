import React, { useEffect, useState } from 'react'
import Aboutstories from '../Aboutstories/Aboutstories'
import Featuredposts from '../Featured Posts/Featuredposts'
import Holidayseasons from '../HolidaySeasons/Holidayseasons'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Recent from '../Recent/Recent'
import Rogerbosch from '../RogerBosch/Rogerbosch'
import Subcribe from '../Subcribe/Subcribe'
import Footer from '../Footer/Footer'
import SyncLoader from "react-spinners/SyncLoader";

const Routesfolder = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>

      {
        loading ?
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='loading'>
                  <SyncLoader size={30} color="#36d7b7"/>
                </div>
              </div>
            </div>
          </div>

          :
          <>
            <Navbar />
            <Home />
            <Recent />
            <Featuredposts />
            <Rogerbosch />
            <Holidayseasons />
            <Aboutstories />
            <Subcribe />
            <Footer />
          </>
      }
    </>
  )
}

export default Routesfolder