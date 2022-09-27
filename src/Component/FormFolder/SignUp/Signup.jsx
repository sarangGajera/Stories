import React, { useState } from 'react'
import './signup.css'
import { Form, Button, Checkbox, DatePicker, Input, Select, InputNumber } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

const Signup = () => {

    const Navigate = useNavigate()

    const [signup, setSignup] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        aboutme: "",
        age: "",
        gender: "Male",
        email: "",
        number: "",
        interestFiled: "",
        city: "",
        state: "",
        country: "",
        password: "",
        confirmPassword: ""
    })

    const signuponCh = (event) => {
        const name = event.target.name
        const value = event.target.value

        // console.log(name, value)

        setSignup({ ...signup, [name]: value })
    }

    const signupsub = async (event) => {
        event.preventDefault()
        console.log(signup)

        await axios.post(`${BaseUrl}/user/registration`, signup)
            .then((res) => {
                console.log(res);
                if (res.data.status === 201) {
                    Navigate("/signin")
                }
                setSignup({
                    userName: "",
                    firstName: "",
                    lastName: "",
                    aboutme: "",
                    age: "",
                    gender: "",
                    email: "",
                    number: "",
                    interestFiled: "",
                    city: "",
                    state: "",
                    country: "",
                    password: "",
                    confirmPassword: ""
                })

            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div class="container-fluid">
            <div class="row row_signin_pagess">
                <div className='col-md-6 p-0'>
                    <div className='sign_up_div'>
                        <div>
                            <div className='img_div_logo'>
                                <img src='/images/saturnn.png' alt='images' />
                            </div>
                            <div>
                                <h3 className='div_textt'>Bee part of our awesome team and <br /> have fun with us</h3>
                            </div>
                            <div className='img_div_logoo'>
                                <img src='/images/startupp.png' alt='images' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 p-0'>
                    <div className='sign_up_from_div'>
                        <div>
                            <div className='link_buttonn'>
                                <Link className='sign_in_buttonn' to="/signin">Sign in</Link>
                                <Link className='sign_up_buttonn' to="/signup">Sign Up</Link>
                            </div>

                            <div className='fromm_divv'>
                                <div>
                                    <h1 className='logup_div_textt'>Create an account</h1>
                                </div>
                                <form onSubmit={signupsub} className="form_sign_updivv">
                                    <div className='input_group_div'>
                                        <div className="form-group grroup_from ">
                                            <input type="text" className="form-control conntrol_input" style={{ width: "590px" }} name="userName" value={signup.userName} onChange={signuponCh} id="exampleInputUserName1" aria-describedby="userNameHelp" placeholder="Enter userName" />
                                        </div>
                                    </div>
                                    <div className='d-flex input_group_div'>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input" name="firstName" value={signup.firstName} onChange={signuponCh} id="exampleInputfirstName1" placeholder="Enter firstName" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input " name="lastName" value={signup.lastName} onChange={signuponCh} id="exampleInputlastName1" placeholder="Enter lastName" />
                                        </div>

                                        <div className="form-group grroup_from">
                                            <input type="email" className="form-control conntrol_input" name="email" value={signup.email} onChange={signuponCh} id="exampleInputemail1" placeholder="Enter email" />
                                        </div>
                                    </div>

                                    <div className='d-flex input_group_div'>
                                        <div className="form-group grroup_from">
                                            <input type="tel" className="form-control conntrol_input" name="age" value={signup.age} onChange={signuponCh} maxLength="3" minLength="2"
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }} id="exampleInputage1" placeholder="Enter age" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <select className="form-select form-control conntrol_input" name="gender" value={signup.gender} onChange={signuponCh} aria-label="Default select example">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="tel" className="form-control conntrol_input" name="number" value={signup.number} onChange={signuponCh} maxLength="10" minLength="10"
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }} id="exampleInputnumber1" placeholder="Enter number" />
                                        </div>
                                    </div>


                                    <div className='d-flex input_group_div'>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input" name="interestFiled" value={signup.interestFiled} onChange={signuponCh} id="exampleInputEnter1" placeholder="Enter intrerastField" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="password" className="form-control conntrol_input" name="password" value={signup.password} onChange={signuponCh} id="exampleInputPassword1" placeholder="Enter Password" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="password" className="form-control conntrol_input" name="confirmPassword" value={signup.confirmPassword} onChange={signuponCh} id="exampleInputPassword1" placeholder="Enter confirmPassword" />
                                        </div>
                                    </div>

                                    <div className='d-flex input_group_div'>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input" name="city" value={signup.city} onChange={signuponCh} id="exampleInputcity1" placeholder="Enter city" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input" name="state" value={signup.state} onChange={signuponCh} id="exampleInputstate1" placeholder="Enter state" />
                                        </div>
                                        <div className="form-group grroup_from">
                                            <input type="text" className="form-control conntrol_input" name="country" value={signup.country} onChange={signuponCh} id="exampleInputcountry1" placeholder="Enter country" />
                                        </div>
                                    </div>
                                    <div className='input_group_div'>
                                        <div className="form-group grroup_from">
                                            <input type="text" style={{ width: "590px" }} className="form-control conntrol_input control_form" name="aboutme" value={signup.aboutme} onChange={signuponCh} id="exampleInputcountry1" placeholder="Enter About me" />
                                        </div>
                                    </div>

                                    <button type="submit" className="signn_in_buttonn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup