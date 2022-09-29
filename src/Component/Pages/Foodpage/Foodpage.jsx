import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import './foodpage.css'
import { RightOutlined } from '@ant-design/icons';

const Foodpage = () => {
    return (
        <div className='foodpage'>
            <Navbar />
            <div className='food_back_div'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='main_div_title'>
                                <h1 className='food_div_textp'>Food</h1>
                                <div className='link_div'>
                                    <Link className="link_home" to="/routesfolder">Home <RightOutlined /></Link>
                                    <p className='about_link'>About us <RightOutlined /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-10 col-md-9 col-sm-12'>
                   <div className='card_main_div'>
                       <img className='img_card_div' src='/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg' alt='images'/>
                       <div className='dessert_div_text'>
                           <h2>DessertMarch 01, 2018</h2>
                       </div>
                   </div>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-12'>
                    <div>
                        dbdlnjvsjnbvsb
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Foodpage