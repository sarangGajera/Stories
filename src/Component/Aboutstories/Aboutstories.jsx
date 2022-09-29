import React, { useEffect, useState } from 'react'
import './aboutstories.css'
import CountUp from 'react-countup';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';

const Aboutstories = () => {


    const [totleblog, setTotleblog] = useState([])

    const TotleBlog = async () => {
       const res = await axios.get(`${BaseUrl}/blog/howManyBlog`)
       .then((res) => {
        // console.log(":::::::dddd",res.data.data);
        setTotleblog(res.data.data)
       })
       .catch((error) => {
        console.log(error);
       })
    }

    useEffect(() => {
        TotleBlog()
    }, [])


    const [timeblog, setTimeblog] = useState([])

    const TimeBlog = async () => {
       const res = await axios.get(`${BaseUrl}/blog/howManyTime`)
       .then((res) => {
        // console.log(":::::::dddd",res.data.data);
        setTimeblog(res.data.data)
       })
       .catch((error) => {
        console.log(error);
       })
    }

    useEffect(() => {
        TimeBlog()
    }, [])


    const [userblog, setUserblog] = useState([])

    const UserBlog = async () => {
       const res = await axios.get(`${BaseUrl}/user/howManyUser`)
       .then((res) => {
        // console.log(":::::::dddd",res.data.data);
        setUserblog(res.data.data)
       })
       .catch((error) => {
        console.log(error);
       })
    }

    useEffect(() => {
        UserBlog()
    }, []) 

    return (
        <div className='aboutstories'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <img className='img_aboutstories' src='/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg' alt='images' />
                    </div>
                    <div className='col-md-6 col-sm-12 mt-4'>
                        <div className='about_stories'>
                            <h1 className='aboutt_divv'>About Stories</h1>
                            <p className='mb-5'>
                                Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='box_div'>
                                    <h1 className='years_experi'>{timeblog}</h1>
                                    <p className='years_experie'>Day</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='box_div boxx_div'>
                                    <h1 className='years_experi'><CountUp end={totleblog} duration={5}/></h1>
                                    <p className='years_experie'>Blogs</p>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='box_div'>
                                    <h1 className='years_experi'><CountUp end={userblog} duration={5}/></h1>
                                    <p className='years_experie'>All User</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='box_div boxx_div'>
                                    <h1 className='years_experi'><CountUp end={40} duration={5}/></h1>
                                    <p className='years_experie'>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutstories