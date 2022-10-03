import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './bloguserprofile.css'
import { storiess } from '../../Date'
import { RightOutlined, ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import Navbar from '../../Navbar/Navbar';
import Subcribe from '../../Subcribe/Subcribe';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

const Bloguserprofile = () => {

    const { id } = useParams()
    console.log(id);
    var z = localStorage.getItem("signin_token")


    let config = {
        headers: {
            token: z,
        }
    }


    const [userhowmanyblog, setUserhowmanyblog] = useState([])

    const UserHowManyBlog = async () => {
        const res = await axios.get(`${BaseUrl}/user/howManyBlogByUser/${id}`, config)
        .then((res) => {
            console.log("::::::CCCCC",res.data.data);
            setUserhowmanyblog(res)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        UserHowManyBlog()
    }, [])


    return (
        <div className='bloguserprofile'>
           <Navbar/>
            <div className='food_back_div'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='main_div_title'>
                                <h1 className='food_div_textp'>Food</h1>
                                <div className='link_div'>
                                    <Link className="link_home" to="/routesfolder">Home <RightOutlined /></Link>
                                    <p className='about_link'>Blogger <RightOutlined /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container container_divd d-flex'>
                <div className='row row_foods mb-5'>
                    {
                        storiess.map(() => {
                            return (
                                <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                                    <div className='card_main_div'>
                                        <img className='img_card_div' src='/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg' alt='images' />
                                        <div className='dessert_div_text'>
                                            <div className='march_text_div'>
                                                <h5 className='m-0 dessert_titles'>DessertMarch</h5>
                                                <h5 className='mt-2 dessert_titles'>March 01, 2018</h5>
                                            </div>
                                            <h4 className='tasty_text'>Tasty & Delicious Foods</h4>
                                            <button className='btn_food'>Read More<ArrowRightOutlined className='ml-3' /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='row row_profile_div'>
                    <div className='col-lg-12 mt-5'>
                        <div className='profile_div_food'>
                            <div className='cards_divs'>
                                <h4 className='profile_fodd_div'>About Me</h4>
                                <img className='food_profile_photo' src='/images/stepan-kulyk-xOv_oEF7REA-unsplash.jpg' alt='images' />
                                <p className='profile_text_detels'>
                                    Hi! My name is <span className='profile_cathy'>Cathy Deon</span>, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </p>
                                <div className='inut_main_div'>
                                    <form>
                                        <div className='inut_main'>
                                            <input type="search" className="input_search" />
                                            <SearchOutlined className='search_div' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h2 className='categ_titlt'>Categories</h2>
                            <div className='foods'><Link to="/foods"><h1>Food</h1></Link></div>
                            <div className='lifestyle'><Link to="/foods" onClick={window}><h1>Lifestyle</h1></Link></div>
                            <div className='others'><Link to="/foods" onClick={window}><h1>Others</h1></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Subcribe/>
            <Footer/>
        </div>
    )
}

export default Bloguserprofile