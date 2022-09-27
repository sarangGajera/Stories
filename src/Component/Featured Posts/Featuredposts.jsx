import React, { useEffect, useState } from 'react'
import './featuredposts.css'
import { ArrowRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import axios from 'axios';
import { BaseUrl } from '../BaseUrl';
import { Link } from 'react-router-dom';

const Featuredposts = () => {

    const [blogdata, setBlogdata] = useState([])
    const [showmor, setShowmor] = useState(6)




    const slice = blogdata.slice(0, showmor);
    const loadmore = () => {
        setShowmor(showmor + showmor)
    }





    const Blogalldata = async () => {

        const res = await axios.get(`${BaseUrl}/blog/allBlogList`)
            .then((res) => {
                // console.log("aaaaaaaa", res.data.data);
                setBlogdata(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        Blogalldata()
    }, [])


    return (
        <div className='featuredposts'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='featured_div d-flex'>Featured Posts <div className='dot_div'></div></h2>
                    </div>
                </div>
                <div className='row'>
                    {
                        slice.map((event, ind) => {
                            return (
                                <div key={ind} className='col-lg-4 col-md-12 col-sm-12 cardss mx-auto mt-4'>
                                    <img className='featured_img' src="/images/casey-lee-awj7sRviVXo-unsplash.jpg" alt='images' />
                                    <div className='title_div_main'>
                                        <h5 className='tasty_div_p mt-1'><span className='blog_card_text'>Blog Title:</span> {event.blogTitle}</h5>
                                        <h5><span className='blog_card_text'>Blog Date:</span> {event.date}</h5>
                                        <h5 className=''><span className='blog_card_text'>Blog Category:</span> {event.category}</h5>
                                        <div className=''>
                                            <hr className='line_hr m-0' />
                                            <button className='read_div_button mt-3'><Link to={`/blogpages/${event._id}`} className="readd_diiv_button">Read More <ArrowRightOutlined className='ml-4' /></Link></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='btn_success' onClick={() => loadmore()}>Show More</button>

            </div>
        </div>
    )
}

export default Featuredposts