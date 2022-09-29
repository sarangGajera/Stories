import React from 'react'
import './footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PhoneOutlined, MailOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 col-sm-6'>
                        <h4 className='inform_div infoorm_div'>Stories</h4>
                        <div className='terms_div'>
                            <p>
                                Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there <br /> live the blind texts.
                            </p>
                            <div className='d-flex justify-content-around mt-5'>
                                <div className='sosiya_icons'>
                                    <TwitterOutlined className='sosiyal_icons' />
                                </div>
                                <div className='sosiya_icons'>
                                    <FacebookOutlined className='sosiyal_icons' />
                                </div>
                                <div className='sosiya_icons'>
                                    <InstagramOutlined className='sosiyal_icons' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-6'>
                        <h4 className='inform_div infoorm_div infform_div'>Information</h4>
                        <div className='terms_div'>
                            <p>Terms of Uses</p>
                            <p>About Stories</p>
                            <p>Privacy Policy</p>
                            <p>Accessibility Help</p>
                            <p>Advertise with us</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-6'>
                        <h4 className='inform_div informm_div'>Categories</h4>
                        <div className='terms_div'>
                            <p>Food</p>
                            <p>Restaurant</p>
                            <p>Dessert</p>
                            <p>Lifestyle</p>
                            <p>Recipes</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-6'>
                        <h4 className='inform_div informm_div'>Have a Questions?</h4>
                        <div className='terms_div'>
                            <div className='d-flex inss_div_sociyal'>
                                <LocationOnIcon className='mr-4 ins_div' />
                                <p>
                                    203 Fake St. Mountain View, <br /> San Francisco, California, <br /> USA
                                </p>
                            </div>
                            <div>
                                <p>
                                    <PhoneOutlined className='mr-4 ins_div' />
                                    +2 392 3929 210
                                </p>
                            </div>
                            <div className='d-flex inss_div_sociyal'>
                                <MailOutlined className='mr-4 ins_div' />
                                <p>info@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <p className='copyright_footer'>Copyright ©{year} All rights reserved | This template is made with ❤️ by </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer