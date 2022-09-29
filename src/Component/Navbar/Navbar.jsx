import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import { DownOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import BoyIcon from '@mui/icons-material/Boy';

const Navbar = () => {

    useEffect(() => {
        window.scrollTo({ top: -100 });
    }, []);

    const Navigate = useNavigate()

    var x = localStorage.getItem("signin_token")
    var z = localStorage.getItem("signin_iduser")
    // console.log("vvvv", z);

    const haandleClose = () => {
        localStorage.removeItem("signin_token")
        localStorage.removeItem("signin_iduser")
        Navigate("/routesfolder")
    }

    // const str = "This";
    //  var v = str.slice(0, 1)
    // console.log("::::::::",v);
    const menu = (
        <Menu
            selectable
            defaultSelectedKeys={['3']}
            items={[
                {
                    key: '1',
                    label: <NavLink className='m-0 navv_pro' to="/profile">Profile</NavLink>,
                },
                {
                    key: '2',
                    label: <h6 className='m-0 navv_pro' onClick={haandleClose}>Logout</h6>,
                }
            ]}
        />
    );


    const menuu = (
        <Menu
            selectable
            defaultSelectedKeys={['3']}
            items={[
                {
                    key: '1',
                    label: <NavLink className="menuu_link" to="/insertblog">Insert Blog</NavLink>
                }
            ]}
        />
    );

    return (
        <div>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand d-flex" to="/routesfolder">Cofer<div className='dot_div'></div></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <AlignLeftOutlined />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/routesfolder">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/foods">Foods</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/lifestyle">Lifestyle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pro_log_div'>
                                    {
                                        (x == null && z == null) ?
                                            <div className='login_btn_nav'><NavLink className='m-0 nav_pro nav_prroo' to="/signin">Login</NavLink></div>
                                            :
                                            <div className='d-flex'>
                                                <div>
                                                    <Dropdown overlay={menuu}>
                                                        <Typography.Link>
                                                            <Space className='item_div nav-link'>
                                                                Blog
                                                                <DownOutlined />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>

                                                <div>
                                                    <Dropdown overlay={menu}>
                                                        <Typography.Link>
                                                            <Space>
                                                                <BoyIcon className='icons_male' />
                                                            </Space>
                                                        </Typography.Link>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar