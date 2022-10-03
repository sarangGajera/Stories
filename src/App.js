import React from 'react'
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Component/About Us/Aboutus';
import Routesfolder from './Component/RoutesFolder/Routesfolder';
import Foods from './Component/Foods/Foods';
import Contact from './Component/Contact Us/Contact';
import Signin from './Component/FormFolder/Signin/Signin';
import Signup from './Component/FormFolder/SignUp/Signup';
import Profile from './Component/Navbar/Profile/Profile';
import Insertblog from './Component/Navbar/InsertBlog/Insertblog';
import Blogpages from './Component/Pages/Blogpage/Blogpages';
import Editblog from './Component/Navbar/EditBlog/Editblog';
import Recentpage from './Component/Pages/RecentPage/Recentpage';
import { ToastContainer } from 'react-toastify';
import Homefinger from './Component/homefinger/Homefinger';
import Foodpage from './Component/Pages/Foodpage/Foodpage';
import Blogar from './Component/Blogar/Blogar';
import Bloguserprofile from './Component/Blogar/Bloguserprofile/Bloguserprofile';

const App = () => {
  return (
    <>


      <Routes>
        <Route exact path='/' element={<Homefinger/>}/>
        <Route exact path='/routesfolder' element={<Routesfolder/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/blogger' element={<Blogar/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route exact path='/insertblog' element={<Insertblog/>}/>
        <Route path='/blogpages/:id' element={<Blogpages/>}/>
        <Route path='/editblog/:id' element={<Editblog/>}/>
        <Route path='/recentpage/:id' element={<Recentpage/>}/>        
        <Route path='/foodpage' element={<Foodpage/>}/>
        <Route path='/bloguserprofile/:id' element={<Bloguserprofile/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App