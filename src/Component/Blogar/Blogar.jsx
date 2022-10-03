import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Subcribe from '../Subcribe/Subcribe'
import './blogar.css'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import { Link } from 'react-router-dom'

const Blogar = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0});
      }, []);

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
                                    <Link to={`/bloguserprofile/${eve._id}`}>
                                        <div className="card border-0 mt-4">

                                            {

                                                eve.gender === "Male" && <img className="card-img-top img_cards" src='/images/whereslugo-DMVD9RkZIwQ-unsplash.jpg' alt='images' />
                                            }
                                            {

                                                eve.gender === "male" && <img className="card-img-top img_cards" src='/images/whereslugo-DMVD9RkZIwQ-unsplash.jpg' alt='images' />
                                            }
                                            {
                                                eve.gender === "Female" && <img className="card-img-top img_cards" src='/images/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg' alt='images' />
                                            }
                                            {
                                                eve.gender === "female" && <img className="card-img-top img_cards" src='/images/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg' alt='images' />
                                            }

                                            <div className="card-body card_body">
                                                <h5 className="card-title">{eve.userName}</h5>
                                                <p className="card-text card_text">{eve.gender}</p>
                                                <p className="card-text card_text">{eve.interestFiled}</p>
                                            </div>
                                        </div>
                                    </Link>
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