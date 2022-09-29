import React, { useEffect, useState } from 'react'
import './recent.css'
import { ArrowRightOutlined } from '@ant-design/icons';
import { stories } from '../Date';
import { storiess } from '../Date';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';
import { Link } from 'react-router-dom';

const Recent = () => {

  const [latestblog, setLatestblog] = useState([])

  const [showmor, setShowmor] = useState(4)




  const slice = latestblog.slice(0, showmor);
  const loadmore = () => {
    setShowmor(showmor + showmor)
  }

  const LatesBlog = async () => {
    const res = await axios.get(`${BaseUrl}/blog/latestFiveBlog`)
      .then((res) => {
        console.log(":::::L", res.data.data);
        setLatestblog(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  useEffect(() => {
    LatesBlog()
  }, [])

  return (
    <div className='recent'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='recent_div d-flex'>Recent Stories<div className='dot_div'></div></h2>
          </div>
        </div>
        <div className='row div_row_main'>
          <div className='col-md-7 col-sm-12'>
            <div className='row'>
              {
                slice.map((eve, ind) => {
                  return (
                    <div key={ind} className='col-md-6 mt-4'>
                      <div>
                        <img className='imgg_divv imgg_div' src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt='images' />
                        <div className='lateblog_div'>
                          <h5 className='deseert m-0'>{eve.blogTitle}</h5>
                          <h4 className='m-0'>{eve.category}</h4>
                          <h5 className='m-0'>{eve.date}</h5>
                          <Link to={`/recentpage/${eve._id}`}><button className='red_button_recent mt-3'>Read More <ArrowRightOutlined className='ml-4' /></button></Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <button onClick={() => loadmore()} className="latestblog_div">Show More</button>

          </div>
          <div className='col-md-5 col-sm-12'>
            <div className='food_tasty'>
              <div className='tasty_div'>
                <h6>FOOD</h6>
                <h1>Tasty & Delicious Foods</h1>
              </div>
              <div className='food_button_readd'>
                <button className='food_button_read'>Read More <ArrowRightOutlined className='ml-4' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recent