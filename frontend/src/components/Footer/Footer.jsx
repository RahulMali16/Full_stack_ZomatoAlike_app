import React from 'react'
import './Footer.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>

                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam soluta aliquid nobis recusandae. Modi!</p>
                    <div className="footer-social-icon">

                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91-9324030942</li>
                        <li>Contact@tomato.com</li>
                    </ul>
                </div>


            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 C Tomato.com - All Right Reserved  
            || can contact - Rahul Mali</p>

        </div>
    )
}

export default Footer