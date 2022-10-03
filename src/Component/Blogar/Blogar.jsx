import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Subcribe from '../Subcribe/Subcribe'
import './blogar.css'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'

const Blogar = () => {

    const [userlist, setUserlist] = useState([])

    const UserAllList = async () => {
        const res = await axios.get(`${BaseUrl}/user/allUserList`)
            .then((res) => {
                console.log(res.data.data);
                setUserlist(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        UserAllList()
    }, [])


    return (
        <div className='lifestylee'>
            <Navbar />
            <div className='container'>
                <div className='row my-4'>
                    {
                        userlist.map((eve, ind) => {
                            return (
                                <div key={ind} className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                                    <div class="card border-0 mt-4">
                                        {/* <img src="/images/profile.png" className="card-img-top img_cards" alt="..." /> */}

                                        {

                                            eve.gender === "Male" && "male" && "male" && "Male" && <img className="card-img-top img_cards" src='/images/profile.png' alt='images' />
                                        }
                                        {
                                            eve.gender === "Female" && "female" && <img className="card-img-top img_cards" src='/images/profile (1).png' alt='images' />
                                        }
                                        {
                                            eve.gender === "female" && <img className="card-img-top img_cards" src='/images/profile (1).png' alt='images' />
                                        }

                                        <div class="card-body card_body">
                                            <h5 class="card-title">{eve.userName}</h5>
                                            <h5 class="card-title">{eve.email}</h5>
                                            <p class="card-text">{eve.gender}</p>
                                            <p class="card-text">{eve.interestFiled}</p>
                                        </div>
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

export default Blogar