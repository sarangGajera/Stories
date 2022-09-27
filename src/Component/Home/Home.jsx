import React from 'react'
import './home.css'
import { ArrowRightOutlined, ArrowLeftOutlined, } from '@ant-design/icons';

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
           <div className='row'>
               <div className='col-md-7 col-sm-12 p-0'>
                  <img className='img_slider' src='/images/lily-banse--YHSwy6uqvk-unsplash.jpg' alt='images'/>
               </div>
               <div className='col-md-5 col-sm-12 p-0'>
                     <div className='love_div'>
                         <h6>FEATURED POSTS</h6>
                         <h1>
                            Love the <br/>
                            Delicious & <br/>
                            Tasty Foods
                         </h1>
                         <p>
                            A small river named Duden flows <br/>by their place and  supplies it with <br/>the necessary regelialia
                         </p>
                         <button className='readmore_button'>Read More <ArrowRightOutlined className='ml-3 icon_right_div'/></button>

                         <div className='button_main_div'>
                            <button className='forward_button'><ArrowLeftOutlined/> Forward</button>
                            <button className='next_button'>Next <ArrowRightOutlined/></button>
                         </div>
                     </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Home