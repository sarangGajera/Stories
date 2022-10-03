import Footer from '../Footer/Footer'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Subcribe from '../Subcribe/Subcribe'
import './blogar.css'

const Blogar = () => {
    return (
        <div className='lifestylee'>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
            <Subcribe />
            <Footer />
        </div>
    )
}

export default Blogar