import './whyus.css';
import '../../index.css';
import Us1 from './images/us1.jpeg';
import Us2 from './images/us2.jpeg';
import Us3 from './images/us3.jpeg';
import Us4 from './images/us4.jpeg';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function whyus() {
    return (
        <div className='whyus'>
            <div className="container">
                <div className="image">
                    <div className="image_sec_1">
                        <img src={Us1} alt="" className='image_1' />
                        <img src={Us3} alt="" className='image_2' />
                    </div>
                    <div className="image_sec_1">
                        <img src={Us2} alt="" className='image_3' />
                        <img src={Us4} alt="" className='image_4' />
                    </div>
                </div>
                <div className="content">
                    <h1>Why Strider..?</h1>
                    <p>Striver is a peer-to-peer business model. It makes it simple, easy to use, and tends to be more profitable for both parties. This also gives us the opputunities to customize and personalise your guests experience the way we want</p>
                    <div className="line">
                        <hr />
                    </div>
                    <p>Meanwhile, Striver also give you the choice of CouchSurfing along with facilities of AirBnb. We STRIVER also go by the rule “A Host never ask a guest to pay for their lodging, and a guest should not offer.”
                    </p>
                    <button><NavLink className="link" to="/about">About Us</NavLink></button>
                </div>
            </div>
        </div>
    )
}
