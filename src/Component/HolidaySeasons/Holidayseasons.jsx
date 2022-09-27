import React from 'react'
import './holidayseasons.css'
import { ArrowRightOutlined } from '@ant-design/icons';

const Holidayseasons = () => {
    return (
        <div className='holidayseasons'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='d-flex align-items-center Holiday'>Holiday Seasons Recipes<div className='dot_div'></div></h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                        <div className='imgg_divs'>
                            <div className='foods_div'>
                                <h6>Food</h6>
                                <h1>
                                    ham sandwich on <br /> white surface
                                </h1>
                            </div>
                            <div className='more_div'>
                                <button>Read More <ArrowRightOutlined className='ml-4' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className='lifestyle_img'>
                                <div className='foods_div'>
                                    <h6>Lifestyle</h6>
                                    <h1>
                                    White and red <br/> ceramic plate
                                    </h1>
                                </div>
                                <div className='more_div'>
                                    <button>Read More <ArrowRightOutlined className='ml-4' /></button>
                                </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className='cards_divv'><h1 className='m-0'>Categories</h1></div>
                        <div className='foods'><h1>Foods</h1></div>
                        <div className='lifestyle'><h1>Lifestyle</h1></div>
                        <div className='others'><h1>Others</h1></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Holidayseasons