import React from 'react'
import './subcribe.css'
import {
    AutoComplete,
    Button,
    Cascader,
    Col,
    DatePicker,
    Input,
    InputNumber,
    Row,
    Select,
    Tooltip,
} from 'antd';

const Subcribe = () => {
    return (
        <div className='subcribe'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <div>
                            <h1 className='subcribe_div'>Subcribe to our Newsletter<div className='dot_div'></div></h1>
                            <p className='small_div'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is <br /> a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                            <div className='input_subscribe'>
                                <Input.Group compact className='hello'>
                                    <Input className='input_email' size="large" style={{width:"30%", height:"60px"}} placeholder="Enter email address" />
                                    <Button className='subscribe_button' size="large" style={{height:"60px"}}>Subscribe</Button>
                                </Input.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subcribe