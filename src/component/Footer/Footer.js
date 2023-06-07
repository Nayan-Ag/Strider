import React from 'react'
import './Footer.css'
import Footer1 from './images/footer1.jpg'
import Footer2 from './images/footer2.jpg'
import Footer3 from './images/footer3.jpg'
import Footer4 from './images/footer4.jpg'
import Footer5 from './images/footer5.jpg'
import Footer6 from './images/footer6.jpg'
import Logo from './images/logo.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="content-1">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>Strider</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit in obcaecati dolor deserunt aperiam, reiciendis vel modi illo quaerat!</p>
                <div className="icons">
                    <p><AiFillInstagram /></p>
                    <p><FaFacebookF /></p>
                    <p><AiFillYoutube /></p>
                    <p><AiOutlineTwitter /></p>
                </div>
            </div>

            <div className="content-2">
                <h1>Pages</h1>
                <p><NavLink exact className="link" to="/">Home</NavLink></p>
                <p><NavLink exact className="link" to="/about">About</NavLink></p>
                <p><NavLink className="link" to="/explore">Rooms</NavLink></p>
                <p><NavLink className="link" to="/contact">Contact</NavLink></p>
            </div>

            <div className="content-3">
                <h1>Follow on Instagram</h1>
                <div className="row">
                    <div className="row_img">
                        <img src={Footer1} alt="" />
                    </div>

                    <div className="row_img">
                        <img src={Footer2} alt="" />
                    </div>

                    <div className="row_img">
                        <img src={Footer3} alt="" />
                    </div>

                </div>
                <div className="row">

                    <div className="row_img">
                        <img src={Footer4} alt="" />
                    </div>

                    <div className="row_img">
                        <img src={Footer5} alt="" />
                    </div>

                    <div className="row_img">
                        <img src={Footer6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
