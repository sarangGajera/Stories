import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BaseUrl } from '../../BaseUrl'
import Navbar from '../../Navbar/Navbar'
import { Affix } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import './blogpages.css'
import { RightOutlined, SearchOutlined, CalendarOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import Footer from '../../Footer/Footer'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Blogpages = () => {

    const { id } = useParams()
    console.log("::::::v",id);

    const [bottom, setBottom] = useState(10);
    const [signiinuser, setSigniinuser] = useState([])

    const [like, setLike] = useState({
        like: "1",
    })
    const [dislike, setDislike] = useState({
        dislike: "1"
    })

    const [ulike, setUlike] = useState()

    const [likeactive, setLikeactive] = useState(false)
    const [bookmark, setBookmarke] = useState(false)
    const [diselikeactive, setDiselikeactive] = useState(false)


    function likef() {
        if (likeactive) {
            setLikeactive(false)
        } else {
            setLikeactive(true)
            if (diselikeactive) {
                setDiselikeactive(false)
            }
        }
    }


    function bookmarku() {
        if (bookmark) {
            setBookmarke(false)
        } else {
            setBookmarke(true)
            if (diselikeactive) {
                setDiselikeactive(false)
            }
        }
    }

    function dislikef() {
        if (diselikeactive) {
            setDiselikeactive(false)
        } else {
            setDiselikeactive(true)
            if (likeactive) {
                setLikeactive(false)
            }
        }
    }





    const onChlike = (event) => {
        const name = event.target.name
        const value = event.target.value

        setLike({ ...like, [name]: value })
    }

    const onSublike = async (event) => {
        event.preventDefault()
        // console.log(like)

        await axios.post(`${BaseUrl}/blog/likeDislikeBlog/${id}`, like)
            .then((res) => {
                // console.log("bbbbbbbb", res);
                setUlike(res)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const onChDislike = (event) => {
        const name = event.target.name
        const value = event.target.value

        setDislike({ ...dislike, [name]: value })
    }

    const onSubDislike = async (event) => {
        event.preventDefault()
        // console.log(dislike)

        await axios.post(`${BaseUrl}/blog/likeDislikeBlog/${id}`, dislike)
            .then((res) => {
                // console.log("bbbbbbbb", res);
                setUlike(res)
            })
            .catch((error) => {
                console.log(error);
            })
    }




    const userProffile = async (id) => {
        const res = await axios.get(`${BaseUrl}/blog/viewBlogById/${id}`)
            .then((res) => {
                console.log("::::::::2", res.data.data);
                setSigniinuser(res.data.data)
            })
            .catch((error) => {
                console.log("ssssss", error);
            })
    }

    useEffect(() => {
        userProffile(id)
    }, [ulike])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, });
    }, []);


    var z = localStorage.getItem("signin_iduser")


    const onsubaddbookmark = async (event) => {
        event.preventDefault()

        await axios.post(`${BaseUrl}/blog/addInBookmark/${id}/${z}`)
            .then((res) => {
                console.log(":::::::1111", res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className='blogpages'>
            <Navbar />
            <div className='blog_view'>
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
                                        <h5 className='m-0'>{signiinuser.category}</h5>
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
                                    <h3 className='text_established'>{signiinuser.blogTitle}</h3>
                                    <p className='text_lorem_p'>
                                        {signiinuser.description}
                                    </p>
                                </div>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='mt-5'>
                                        <Affix offsetBottom={bottom}>
                                            <div onClick={() => setBottom(bottom + 0)}>
                                                <div className='btn_main_div'>
                                                    <form onSubmit={onSublike}>
                                                        <button className='btn_llike'><LikeOutlined onClick={likef} className={likeactive ? "text-danger" : "text-dark"} name='like' value={like.like} onChange={onChlike} /><div className='hr_liine'></div>{signiinuser.like}</button>
                                                    </form>
                                                    <div className='hr_line'></div>
                                                    <form onSubmit={onSubDislike}>
                                                        <button className='btn_llike'><DislikeOutlined onClick={dislikef} className={diselikeactive ? "text-danger" : "text-dark"} name='dislike' value={dislike.dislike} onChange={onChDislike} /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Affix>
                                    </div>
                                    <div className='mt-5'>
                                        <form onSubmit={onsubaddbookmark}>
                                            <button className='btn_bookmark'><BookmarkBorderIcon onClick={bookmarku} className={bookmark ? "text-danger" : "text-dark"} name="blog_id" /></button>
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

export default Blogpages