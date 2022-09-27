import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BaseUrl } from '../../BaseUrl'
import './editblog.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import ClipLoader from "react-spinners/ClipLoader";

const Editblog = () => {

    const { id } = useParams()

    // console.log("ccccc",id);

    const Navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 900)
    }, [])

    const [iblog, setIblog] = useState({
        blogTitle: "",
        userName: "",
        date: "",
        description: "",
        category: "",
    })


    const Insblog = (event) => {
        const name = event.target.name
        const value = event.target.value

        // console.log(name, value)

        setIblog({ ...iblog, [name]: value })
    }

    const oniBlog = async (event) => {
        event.preventDefault()
        console.log(iblog)

        await axios.put(`${BaseUrl}/blog/updateBlog/${id}`, iblog)
            .then((res) => {
                // console.log(res.data.status);
                if (res.data.status === 200) {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        Navigate("/profile")
                    }, 900)
                }

            })
            .catch((error) => {
                console.log(error);
            })
    }


    const Userblogu = async (id) => {
        const res = await axios.get(`${BaseUrl}/blog/viewBlogById/${id}`)
            .then((res) => {
                // console.log("tttttt",res.data.data);
                setIblog(res.data.data)
            })
            .catch((error) => {
                // console.log("ddddddd",error);
            })
    }

    useEffect(() => {
        Userblogu(id)
    }, [])

    return (
        <>
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
                    <form onSubmit={oniBlog}>
                        <div className='insertblog'>
                            <div className='container-fluid'>
                                <div className='col-md-12 p-1'>
                                    <div className='mt-2'>
                                        <Link to="/profile" className="back_btnn"><ArrowLeftOutlined className='back_btn' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='container contaiber_div_ins'>
                                <div className='row my-4'>
                                    <div className='col-lg-12 col-md-12'>
                                        <div>
                                            <div>
                                                <h4 className='blog_in_ed_div'>Edit Blog</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row_insrt_blog_div'>
                                    <div className='col-lg-8 col-md-7 col-sm-12'>
                                        <div className='blog_div'>
                                            <h6>Edit Blog</h6>
                                            <hr />
                                            <div className="form-group">
                                                <label className='lable_div' for="exampleInputtext1">Blog Title</label>
                                                <input type="text" className="form-control" name='blogTitle' value={iblog.blogTitle} onChange={Insblog} id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter Blog Title" />
                                            </div>
                                            <div class="form-group">
                                                <label className='lable_div' for="exampleFormControlTextarea1">Description</label>
                                                <textarea class="form-control" name='description' value={iblog.description} onChange={Insblog} id="exampleFormControlTextarea1" rows="6"></textarea>
                                            </div>
                                            <div className='blog_btn_icon_div'>
                                                <button className='blog_priv'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-5 col-sm-12'>
                                        <div className='blog_input_div'>
                                            <div className="form-group">
                                                <label className='lable_div' for="exampleInputtext1">User Name</label>
                                                <input type="text" className="form-control" name='userName' value={iblog.userName} onChange={Insblog} id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter User Name" />
                                            </div>
                                            <div className="form-group">
                                                {/* <label className='lable_div' for="exampleInputtext1">Category</label>
                                                <input type="text" className="form-control" name='category' value={iblog.category} onChange={Insblog} id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter User Name" /> */}

                                                <div className="form-group">
                                                    <label className='lable_div' for="exampleInputtext1">Category</label>
                                                    <select className="form-select form-control form_control" name='category' value={iblog.category} onChange={Insblog} aria-label="Default select example">
                                                        <option>Select Blog</option>
                                                        <option value="Food blogs">Food blogs</option>
                                                        <option value="Travel blogs">Travel blogs</option>
                                                        <option value="Health and fitness blogs">Health and fitness blogs</option>
                                                        <option value="Lifestyle blogs">Lifestyle blogs</option>
                                                        <option value="Book and writing blogs">Book and writing blogs</option>
                                                        <option value="News blogs">News blogs</option>
                                                        <option value="Technical Blogs">Technical Blogs</option>
                                                        <option value="Sports blogs">Sports blogs</option>
                                                        <option value="Education Blogs">Education Blogs</option>
                                                        <option value=" Business blogs"> Business blogs</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className='lable_div' for="exampleInputtext1">Date</label>
                                                <input type="date" className="form-control" name='date' value={iblog.date} onChange={Insblog} id="exampleInputText1" aria-describedby="textHelp" placeholder="Enter User Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            }
        </>
    )
}

export default Editblog