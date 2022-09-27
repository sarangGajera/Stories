import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Subcribe from '../Subcribe/Subcribe'
import './contact.css'
import { Link, useNavigate } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons';
import { Address } from '../Date'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const Navigate = useNavigate()
    const [usecon, setUsecon] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })


   const UserContent = (event) => {

       const name = event.target.name
       const value = event.target.value

    //    console.log(name, value);

       setUsecon({...usecon, [name]: value}) 

   }

    const onSubcontact = async (event) => {
        event.preventDefault()
        console.log(usecon)

        await axios.post(`${BaseUrl}/contact/insert`, usecon)
            .then((res) => {
                // console.log(res);
                if (res.data.status === 201) {
                    toast.success("You have contacted us. It has reached us. We will fully maintain the confidentiality of your information.", {
                        position: "top-center"
                    })
                    Navigate("/")
                }
                setUsecon({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 21.212545;
        const lon = 72.889519;

        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })

    return (
        <div className='contact'>
            <Navbar />
            <div className='contacts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='contact_div_main'>
                                <h1 className='text-center display-3 font-weight-bold heading_text_div'>Contact Us</h1>
                                <div className='link_div'>
                                    <Link className="link_home" to="/">Home <RightOutlined /></Link>
                                    <p className='about_link'>About us <RightOutlined /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row row_containers'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <iframe id='iframeId' height="520px" width="100%"></iframe>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form_div_contactt'>
                            <form onSubmit={onSubcontact} className='form_div_contact'>
                                <div className="form-group">
                                    <input type="text" className="form-control control_form" name='name' value={usecon.name} onChange={UserContent} aria-describedby="nameHelp" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control control_form" name='email' value={usecon.email} onChange={UserContent} placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control control_form" name='subject' value={usecon.subject} onChange={UserContent} placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="6" name='message' value={usecon.message} onChange={UserContent} placeholder='Message'></textarea>
                                </div>

                                <button className='sent_contact_btn'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='row row_containers mb-5'>
                    {
                        Address.map((eve, ind) => {
                            return (
                                <div key={eve} className='col-lg-3 col-md-4 mx-auto'>
                                    <div className='main_sociley_div'>
                                        <div className='img_div_main'>
                                            <img className='img_div_sociley' src={eve.images} alt='images' />
                                        </div>
                                        <h4 className='titl_addres'>{eve.title}</h4>
                                        <h4 className='titl_address text-center'>{eve.text}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Subcribe />
            <Footer />
        </div>
    )
}

export default Contact