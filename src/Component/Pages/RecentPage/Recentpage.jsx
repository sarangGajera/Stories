import React, { useState } from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import './recentpage.css'
import { Link } from 'react-router-dom'
import { RightOutlined, SearchOutlined, CalendarOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { Affix } from 'antd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const Recentpage = () => {

    const [bottom, setBottom] = useState(10);
    
    return (
        <div className='recentpage'>
            <Navbar />
            <div className='blog_vieww'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='article_div'>
                                <h1 className='article_sig'>Article Single</h1>
                                <div className='main_div_link'>
                                    <Link to="/" className='link_div_ho'>Home <RightOutlined className='ml-1' /></Link>
                                    <Link to="" className='link_div_sig'>Article Single <RightOutlined className='ml-1' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row my-5'>
                        <div className='col-lg-4'>
                            <div className='categories_div'>

                                <div className="in_ic_div">
                                    <input type="search" className='input_search_div' placeholder='Type a keyword and hit enter' />
                                    <SearchOutlined className='search_icons' />
                                </div>

                                <div className='Categori_div_main'>
                                    <h4 className='text_cat'>Categories</h4>
                                </div>

                                <div className='travel_div_main'>
                                    <div className='travel_div'>
                                        <h5 className='m-0'>Travel</h5>
                                        <h5 className='m-0 trav_count'>(12)</h5>
                                    </div>
                                    <hr />
                                    <div className='travel_div'>
                                        <h5 className='m-0'>Tour</h5>
                                        <h5 className='m-0 trav_count'>(22)</h5>
                                    </div>
                                    <hr />
                                    <div className='travel_div'>
                                        <h5 className='m-0'>Destination</h5>
                                        <h5 className='m-0 trav_count'>(37)</h5>
                                    </div>
                                    <hr />
                                    <div className='travel_div'>
                                        <h5 className='m-0'>Drinks</h5>
                                        <h5 className='m-0 trav_count'>(42)</h5>
                                    </div>
                                    <hr />
                                    <div className='travel_div'>
                                        <h5 className='m-0'>(50)</h5>
                                        <h5 className='m-0 trav_count'>(14)</h5>
                                    </div>
                                    <hr />
                                    <div className='travel_div'>
                                        <h5 className='m-0'>Travel</h5>
                                        <h5 className='m-0 trav_count'>(140)</h5>
                                    </div>
                                </div>

                                <div className='recent_blog_div'>

                                    <div>
                                        <h3 className='recent_text'>Recent Blog</h3>
                                    </div>

                                    <div className='even_div_min'>

                                        <div className='even_div'>
                                            <div className='even_img'>
                                                <img className='even_imgg' src='/images/chad-montano-eeqbbemH9-c-unsplash.jpg' alt='images' />
                                            </div>
                                            <div className='text_even_div'>
                                                <p className='power_text'>
                                                    Even the all-powerful <br /> Pointing has no control <br /> about the blind texts
                                                </p>
                                                <p className='sociyal_text_div'>
                                                    <CalendarOutlined /> <span>February 12,2022</span> <UserOutlined className='ml-2' /> <span>Admin</span> <MessageOutlined className='ml-2' /> <span>19</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className='even_div mt-3'>
                                            <div className='even_img'>
                                                <img className='even_imgg' src='/images/heather-ford-teuvnOXOGVo-unsplash.jpg' alt='images' />
                                            </div>
                                            <div className='text_even_div'>
                                                <p className='power_text'>
                                                    Even the all-powerful <br /> Pointing has no control <br /> about the blind texts
                                                </p>
                                                <p className='sociyal_text_div'>
                                                    <CalendarOutlined /> <span>February 12,2022</span> <UserOutlined className='ml-2' /> <span>Admin</span> <MessageOutlined className='ml-2' /> <span>19</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className='even_div mt-3'>
                                            <div className='even_img'>
                                                <img className='even_imgg' src='/images/randy-fath-SQ20tWzxXO0-unsplash.jpg' alt='images' />
                                            </div>
                                            <div className='text_even_div'>
                                                <p className='power_text'>
                                                    Even the all-powerful <br /> Pointing has no control <br /> about the blind texts
                                                </p>
                                                <p className='sociyal_text_div'>
                                                    <CalendarOutlined /> <span>February 12,2022</span> <UserOutlined className='ml-2' /> <span>Admin</span> <MessageOutlined className='ml-2' /> <span>19</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 mt-2'>
                            <div className='long_div'>
                                <div>
                                    <h3 className='text_established'>hello</h3>
                                    <p className='text_lorem_p'>
                                        hello1
                                    </p>
                                </div>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='mt-5'>
                                        <Affix offsetBottom={bottom}>
                                            <div onClick={() => setBottom(bottom + 0)}>
                                                <div className='btn_main_div'>
                                                    <form>
                                                        <button className='btn_llike'><LikeOutlined name='like'/><div className='hr_liine'></div></button>
                                                    </form>
                                                    <div className='hr_line'></div>
                                                    <form>
                                                        <button className='btn_llike'><DislikeOutlined name='dislike' /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Affix>
                                    </div>
                                    <div className='mt-5'>
                                        <form>
                                            <button className='btn_bookmark'><BookmarkBorderIcon name="blog_id" /></button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Recentpage