import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../BaseUrl';
import './profile.css'
import ClipLoader from "react-spinners/ClipLoader";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, EditOutlined, HomeOutlined, ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Profile = () => {

    var x = localStorage.getItem("signin_iduser")
    var z = localStorage.getItem("signin_token")
    // console.log("lllll", x);

    const [signinuser, setSigninuser] = useState([])
    const [userblog, setUserblog] = useState([])
    const [loading, setLoading] = useState(false)
    const [delereu, setDelereu] = useState()


    const [togg, setTogg] = useState(true)
    const editTogg = () => {
        setTogg(!togg)
    }


    let config = {
        headers: {
            token: z,
        }
    }

    // console.log("cccccc", config);
    const userProfile = async () => {
        const res = await axios.get(`${BaseUrl}/user/getUserById/${x}`, config)

            .then((res) => {
                console.log("0000000", res.data.data);
                setSigninuser(res.data.data)
            })
            .catch((error) => {
                console.log("sddddsssss", error);
            })
    }

    useEffect(() => {
        userProfile()
    }, [togg])



    const [hello, setHello] = useState({
        userName: "",
        age: "",
        city: "",
        aboutme: ""
    })

    const onchaedit = (event) => {
        const name = event.target.name
        const value = event.target.value

        setHello({ ...hello, [name]: value })
    }

    const onSubmittedit = async (event) => {
        event.preventDefault()
        // console.log("sssss", hello)



        await axios.put(`${BaseUrl}/user/updateUserData/${x}`, hello)
            .then((res) => {
                // console.log(res);
                if (res.data.status === 200) {
                    setTogg(true)
                }
            })
            .catch((error) => {
                console.log("nnnnnn", error);
            })
    }


    const getUseredi = async (x) => {
        await axios.get(`${BaseUrl}/user/getUserById/${x}`, config)
            .then((res) => {
                // console.log("ttttttt", res.data.data);
                setHello(res.data.data)
            })
            .catch((error) => {
                // console.log("bbbbbbb", error);
            })
    }

    useEffect(() => {
        getUseredi(x)
    }, [])





    const Ublog = async (x) => {
        const res = await axios.get(`${BaseUrl}/blog/getBlogByUserId/${x}`)
            .then((res) => {
                // console.log("bbbbbbb", res.data.data);
                setUserblog(res.data.data)
                setDelereu(res.data.data);
            })
            .catch((error) => {
                console.log("cccffffffccc", error);
            })
    }

    useEffect(() => {
        Ublog(x)
    }, [delereu])

    

    const deleteuserblog = async (id) => {
        const res = await axios.delete(`${BaseUrl}/blog/deleteBlog/${id}`)
            .then((res) => {
                console.log(res);
                setDelereu();
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 900)
    }, [])




    // /blog/updateBlog/
    // /blog/deleteBlog
    return (
        <>

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
                        <div>
                            {
                                togg ? (
                                    <div>
                                        <div className='container-fluid p-2 overflow-hidden'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='update_btn'>
                                                        <Link to="/routesfolder" className='back_btnn contact_buttonn'><HomeOutlined className='back_btn' /></Link>
                                                        <button onClick={editTogg} className='contact_buttonn'><EditOutlined /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='container'>



                                            <div className='row row_profile_div'>
                                                <div className='col-md-12'>
                                                    <div className='text-center py-4'>
                                                        <h1 className='profile_div m-0'>Profile</h1>
                                                        <p className='p_div'>I'm a creative webdeveloper</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-4 col-md-6'>

                                                    <div className='user_main_div'>

                                                        <div className='user_ditel'>
                                                            <div className='user_img'>
                                                                {

                                                                    signinuser.gender === "Male" && "male" && "male" && "Male" && <img className='' src='/images/man.png' alt='images' />
                                                                }
                                                                {
                                                                    signinuser.gender === "Female" && "female" && "female" && "Female" && <img className='' src='/images/woman.png' alt='images' />
                                                                }
                                                            </div>
                                                            <h2 className='mt-4 user_name'>
                                                                HELLO,I'M <br />
                                                                {signinuser.firstName}



                                                            </h2>
                                                            <p className='lorem_div mt-3'>
                                                                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Cum minima fuga earum fugiat <br /> eligendi ratione nobis accusantium
                                                            </p>
                                                            <div className='mt-3'>
                                                                <FacebookOutlined className='sociyal_icons' />
                                                                <TwitterOutlined className='sociyal_icons' />
                                                                <InstagramOutlined className='sociyal_icons' />
                                                                <LinkedinOutlined className='sociyal_icons' />
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='col-lg-4 col-md-6'>
                                                    <div className='ml-5 mt-5 details_div_min'>
                                                        <h3 className='details_div'>Details</h3>
                                                        <div>
                                                            <h6 className='name_divv'>Name:</h6>
                                                            <p>{signinuser.userName}</p>
                                                        </div>
                                                        <div>
                                                            <h6 className='name_divv'>Age:</h6>
                                                            <p>{signinuser.age} years</p>
                                                        </div>
                                                        <div>
                                                            <h6 className='name_divv'>Location:</h6>
                                                            <p>{signinuser.city}, The Netherlands, Earth</p>
                                                        </div>
                                                        <div>
                                                            <FacebookOutlined className='sociyal_iconss' />
                                                            <TwitterOutlined className='sociyal_iconss' />
                                                            <InstagramOutlined className='sociyal_iconss' />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-lg-4'>
                                                    <div className='mt-5 about_me'>
                                                        <h3 className='details_div'>About me</h3>
                                                        <p className='ipsum_div'>
                                                            {signinuser.aboutme}
                                                        </p>
                                                        <button className='contact_button'>CONTACT ME</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='line_profile mb-5' />
                                            <div className='row'>
                                                {

                                                    userblog.map((eve, ind) => {
                                                        return (
                                                            <div key={ind} className='col-md-12'>
                                                                <div className='profile_blog'>
                                                                    <div className='w-50 text_blog_div'>
                                                                        <h4>{eve.blogTitle}</h4>
                                                                        <p className='p_cat_blog'>{eve.category}</p>
                                                                        <div className='d-flex justify-content-between div_book_date'>
                                                                            <div>
                                                                                <h5>{eve.date}</h5>
                                                                            </div>
                                                                            <div>
                                                                                <Link to={`/editblog/${eve._id}`}><EditOutlined className='edit_icons_div'/></Link>
                                                                                <DeleteOutlined onClick={() => deleteuserblog(eve._id)} className='edit_icons_divv'/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <img className='img_blog_profile' src='images/mateusz-zatorski-vXYglqFX01Q-unsplash.jpg' alt='images' />
                                                                    </div>
                                                                </div>
                                                                <hr className='hr_ublog_div'/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : (

                                    <form onSubmit={onSubmittedit}>
                                        <div className='container-fluid p-2 overflow-hidden'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='updatee_btn'>
                                                        <ArrowLeftOutlined className='back_btn' onClick={editTogg}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='text-center py-4'>
                                                        <h1 className='profile_div m-0'>Profile</h1>
                                                        <p className='p_div'>I'm a creative webdeveloper</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row m-0'>

                                                <div className='col-md-6 col-lg-4 p-0'>

                                                    <div className='user_main_div'>

                                                        <div className='user_ditel'>
                                                            <div className='user_imgg'>
                                                                {
                                                                    signinuser.gender === "Male" && "male" && "male" && "Male" && <img className='' src='/images/man.png' alt='images' />
                                                                }
                                                                {
                                                                    signinuser.gender === "Female" && "female" && "female" && "Female" && <img className='' src='/images/woman.png' alt='images' />
                                                                }
                                                            </div>
                                                            <h2 className='mt-4 user_name'>
                                                                HELLO,I'M <br />
                                                                {signinuser.firstName}
                                                            </h2>
                                                            <p className='lorem_div mt-3'>
                                                                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Cum minima fuga earum fugiat <br /> eligendi ratione nobis accusantium
                                                            </p>
                                                            <div className='mt-3'>
                                                                <FacebookOutlined className='sociyal_icons' />
                                                                <TwitterOutlined className='sociyal_icons' />
                                                                <InstagramOutlined className='sociyal_icons' />
                                                                <LinkedinOutlined className='sociyal_icons' />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='col-md-6 col-lg-4 mt-5'>
                                                    <div className='ml-5 dettail_div'>
                                                        <dvi className="detail_divv ml-5">
                                                            <h3 className='details_div'>Details</h3>
                                                            <div>
                                                                <h6 className='name_divv'>Name:</h6>

                                                                <p>
                                                                    <input type="text" name='userName' value={hello.userName} onChange={onchaedit} className='input_edit_in' id="fname" />
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <h6 className='name_divv'>Age:</h6>
                                                                <p>
                                                                    <input type="tel" name='age' value={hello.age} onChange={onchaedit} className="input_edit_in" style={{ width: "30px" }} maxLength="3" minLength="2"
                                                                        onKeyPress={(event) => {
                                                                            if (!/[0-9]/.test(event.key)) {
                                                                                event.preventDefault();
                                                                            }
                                                                        }} id="tel" />
                                                                    years
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <h6 className='name_divv'>Location:</h6>
                                                                <p>
                                                                    <div className="form-group">
                                                                        <input type="text" name='city' value={hello.city} onChange={onchaedit} style={{ width: "100px" }} className='input_edit_in' id="fname" />
                                                                    </div>, The Netherlands, Earth
                                                                </p>

                                                            </div>
                                                            <div>
                                                                <FacebookOutlined className='sociyal_iconss' />
                                                                <TwitterOutlined className='sociyal_iconss' />
                                                                <InstagramOutlined className='sociyal_iconss' />
                                                            </div>
                                                        </dvi>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-lg-4'>
                                                    <div className='asbout_divv mt-5'>
                                                        <h3 className='details_div'>About me</h3>
                                                        <p className='ipsum_div'>
                                                            <div class="ffoorm_group">
                                                                <textarea name='aboutme' value={hello.aboutme} onChange={onchaedit} id="text_area" className='input_edit_in' rows="10" cols="50" />
                                                                <button className='contact_button'>Submit</button>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default Profile