import React, { useEffect, useState } from 'react'
import './signin.css'
import { Form, Input, } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';
import ClipLoader from "react-spinners/ClipLoader";


const Signin = () => {

    const Navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [signin, setSignin] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 900)
    }, [])

    const signinlogin = (event) => {
        const name = event.target.name
        const value = event.target.value
        // console.log(name, value)

        setSignin({ ...signin, [name]: value })
    }

    const signinonsub = async (event) => {
        event.preventDefault()
        console.log(signin)



        // const config = {
        //     headers: { Authorization: `Bearer ${signin_token}` }
        // };

        // const bodyParameters = {
        //     key: "value"
        // };

        // Axios.post(
        //     'http://localhost:8000/api/v1/get_token_payloads',
        //     bodyParameters,
        //     config
        // ).then(console.log).catch(console.log);








        await axios.post(`${BaseUrl}/user/login`, signin)
            .then((res) => {
                console.log("ddddd", res);
                if (res.data.status === 200) {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        Navigate("/routesfolder")
                    }, 900)
                    localStorage.setItem("signin_token", res.data.token)
                    localStorage.setItem("signin_iduser", res.data.data)
                }
                setSignin({
                    email: "",
                    password: ""
                })
            })
            .catch((error) => {
                console.log("nnnnnn", error.response.status);
                if (error.response.status) {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                    }, 4000)
                }
            })
    }

    return (
        <div>
            {
                loading ?

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='loading'>
                                    <ClipLoader size={60} />
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="container-fluid overflow-hidden">
                        <div className="row row_signin_pagess">
                            <div className='col-md-6 p-0'>
                                <div className='logo_div'>
                                    <div>
                                        <div className='img_div_logo'>
                                            <img src='/images/saturn.png' alt='images' />
                                        </div>
                                        <div>
                                            <h3 className='div_text'>Be part of our awesome team and <br /> have fun with us</h3>
                                        </div>
                                        <div className='img_div_logoo'>
                                            <img src='/images/rocket (1).png' alt='images' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-0'>
                                <div className='from_div'>
                                    <div>
                                        <div className='link_button'>
                                            <Link className='sign_in_button' to="/signin">Sign in</Link>
                                            <Link className='sign_up_button' to="/signup">Sign Up</Link>
                                        </div>

                                        <div className='fromm_div'>
                                            <div>
                                                <h1 className='login_div_text'>Login in your account</h1>
                                            </div>
                                            <form onSubmit={signinonsub}>
                                                <div className="form-group form-groupp">
                                                    <input type="email" name="email" value={signin.email} onChange={signinlogin} className="form-control form-controll" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                                <div className="form-group form-groupp">
                                                    <input type="password" name="password" value={signin.password} onChange={signinlogin} className="form-control form-controll" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                <button type="submit" className="signn_in_button">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Signin