import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './homefinger.css'

const Homefinger = () => {
    const Navigate = useNavigate()

    const [togg, setTogg] = useState(true)


    const editToog = () => {
        setTogg(!togg)
        setTimeout(() => {
            setTogg(false)
            Navigate("/routesfolder")
        }, 1000)
    }


    return (
        <div className='home_finger'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='div_cofer_main'>
                        <div className=''>
                            <h1 className='cofer_div_main m-0'>Cofer<div className='dot_div mt-5'></div></h1>
                            <h3 className='finger_title_div mt-3'>Blog Website</h3>
                        </div>
                        <div className='home_fingerr'>
                            {
                                togg ?
                                    <div className='img_main_div'>
                                        <img className="img_img_finger" onClick={editToog} src='/images/fingerprint-icon-18-removebg-preview.png' />
                                    </div>
                                    :
                                    <div className='img_divv'>
                                        <img className='img_fingerr' src='/images/663-fingerprint-scan-unscreen.gif' />
                                    </div>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homefinger