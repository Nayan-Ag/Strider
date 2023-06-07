import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import './Propertycard.css';
import { NavLink } from 'react-router-dom';
const PropertyCard = (props) => {
  return (
    <div className='MyCard'>
      <div className="card-image">
        <img src={props.src} alt="" />
      </div>
      <div className="about-card">
        <p>{props.type}</p>
        <p>{props.desc}</p>
      </div>
      <div className="guest">
        <p><AiOutlineUser></AiOutlineUser>{props.guest}</p>
        <p><BiBed></BiBed>{props.bed}</p>
      </div>
      <div className="breakline"><hr /></div>
      <div className="charges">
        <p><span><strong>{props.rate}</strong></span>/night</p>
        <div className="book-btn">
          <button><NavLink className="link" to={props.dest}>Book Room</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
