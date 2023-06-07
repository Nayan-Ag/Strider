import React from 'react'
import './Testimonials.css';
export default function Testimonialscard(props) {
  return (
    <div className='testi'>
      <div className="container">
        <div className="image">
            <img src={props.src} alt="" />
        </div>
        <div className="content">
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
        </div>
      </div>
    </div>
  )
}

