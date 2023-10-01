import React from 'react'
import { FaHome, FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';
import "./footer.css";

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <div>   <p>India</p>
                   <p>Andhra Pradesh</p>
                   <p>Kakinada</p>
                   </div>
                </div>
                
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    9381446301</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    bharath007ram@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>
                    Social Pages
                </h4>
                <div className='social'>
                <div className='email'>
                    <FaFacebook size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                </div>
                <div className='email'>
                    <FaTwitter size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                </div>
                <div className='email'>
                    <FaLinkedin size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer