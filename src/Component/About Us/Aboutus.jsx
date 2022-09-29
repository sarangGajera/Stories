import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Aboutstories from '../Aboutstories/Aboutstories'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Rogerbosch from '../RogerBosch/Rogerbosch'
import Subcribe from '../Subcribe/Subcribe'
import './aboutus.css'
import { RightOutlined } from '@ant-design/icons';
import ClipLoader from "react-spinners/ClipLoader";

const Aboutus = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 980)
  }, [])

  return (
    <>
      {
        loading ?

          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='loading'>
                  <ClipLoader size={60} />
                </div>
              </div>
            </div>
          </div>

          :
          <div className='aboutuss'>
            <Navbar />
            <div className='aboutus'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h1 className='abou_divv'>About Us</h1>
                    <div className='link_div'>
                      <NavLink className="link_home" to="/routesfolder">Home <RightOutlined /></NavLink>
                      <p className='about_link'>About us <RightOutlined /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Aboutstories />
            <Rogerbosch />
            <Subcribe />
            <Footer />
          </div>
      }
    </>
  )
}

export default Aboutus