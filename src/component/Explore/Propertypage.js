import React from 'react'
import './Propertypage.css'
import { AiOutlineUser } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { FaAirbnb } from 'react-icons/fa'
import { AiFillPhone} from 'react-icons/ai'
import { GiHeatHaze } from 'react-icons/gi'
import { GiFireplace } from 'react-icons/gi'
import { BsLaptop } from 'react-icons/bs'
import { TbParking } from 'react-icons/tb'
import { GiKitchenScale } from 'react-icons/gi'
import { GrGamepad } from 'react-icons/gr'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import Gallery1 from './images/gallery1.jpg'
import Gallery2 from './images/gallery2.jpg'
import Gallery3 from './images/galllery3.jpg'
import Gallery4 from './images/gallery4.jpg'

const Propertypage = (props) => {
  return (
    <div className='property_page'>
      <div className="prop_page">
        <div className="content">
          <h1>{props.type}</h1>
          <p>{props.desc}</p>
        </div>

        <span className="fixed_content">
          <h1>Reservate Room</h1>
          <span>{props.roomdesc}</span>
          <p className='from'>From</p>
          <div className="price">

            <span className="price_high">{props.price}</span>/night</div>
          <div className="line_break">
            <div className="hr">
              <hr />
            </div>
          </div>

          <div className="cart">
            <div className="option-1">
              <p>Location</p>
              <select name="cars" id="cars">
                <option value="volvo">Banglore</option>
                <option value="saab">Chennai</option>
                <option value="mercedes">Ahmedabad</option>
              </select>
            </div>
            <div className="option-2">
              <p>Nights</p>
              <select name="cars" id="cars">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            </div>
          </div>
          <div className="button">
            <button className="cart_btn">
              Add to Cart
            </button>
          </div>
          <div className="line">
            <span className='hr_line'><hr /></span>
            <span className='or'>OR</span>
            <span className='hr_line'><hr /></span>
          </div>
          <div className="airbnb">
            <button>
              <FaAirbnb />
              <p><a href="https://www.airbnb.co.in/">Book on Airbnb</a></p>
            </button>
          </div>
        </span>

        <div className="person">

          <div className="beds">
            <p><AiOutlineUser></AiOutlineUser><span> {props.guests} guests </span></p>
            <p><BiBed></BiBed><span> {props.bed} bed </span></p>
            <p><BiBath></BiBath><span> {props.bath} bathroom </span></p>
            <p><AiFillPhone></AiFillPhone><span> {props.num}</span></p>
          </div>
          <div className="about">
            <h1>About the Cabin</h1>
            <p>A single bed cabin is a compact and private accommodation unit designed to cater to the needs of a single individual. These cabins offer a cozy space for solo travelers seeking a comfortable place to rest and relax.</p>
            <ul className='list'>
              <li>Single bed cabins are typically smaller in size compared to other types of accommodations. T</li>
              <li>Single bed cabins offer a level of privacy, allowing guests to have their own personal space. </li>
              <li>Single bed cabins typically provide storage options to help guests keep their belongings organized. </li>
            </ul>
            <p>A single bed cabin is a cozy and intimate accommodation option designed specifically for solo travelers. These compact cabins provide a private space where individuals can unwind  they offer a place for guests to relax and rejuvenate after a long day.</p>
            {/* <p> They often include amenities such as lighting, power outlets, and storage options for personal belongings. Some single bed cabins may even have a small desk or table for work or leisure activities. While the size may be more intimate compared to larger accommodations, the emphasis is on creating a private retreat where guests can recharge. </p> */}
          </div>

          <div className="amenities">
            <h1>Room Amenities</h1>
            <div className="amenity">

              <div className="row">
                <div className="options">
                  <GiHeatHaze />
                  <p>Heater</p>
                </div>
                <div className="options">
                  <GiFireplace />
                  <p>Fireplace</p>
                </div>
              </div>
              <div className="row">
                <div className="options">
                  <BsLaptop />
                  <p>TV</p>
                </div>
                <div className="options">
                  <BiBath />
                  <p>Hot tub</p>
                </div>
              </div>

              <div className="row">

                <div className="options">
                  <TbParking />
                  <p>Parking</p>
                </div>
                <div className="options">
                  <GiKitchenScale />
                  <p>Full Kitchen</p>
                </div>
              </div>

              <div className="row">

                <div className="options">
                  <GrGamepad />
                  <p>Game room</p>
                </div>
                <div className="options">
                  <CgSmartHomeRefrigerator />
                  <p>Refrigerator</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="gallery_room">
          <h1>Room Gallery</h1>
          <div className="gallery">
            <div className="row_img">
              <img src={Gallery1} alt="" />
            </div>

            <div className="row_img">
              <img src={Gallery2} alt="" />
            </div>

            <div className="row_img">
              <img src={Gallery3} alt="" />
            </div>
            <div className="row_img">
              <img src={Gallery4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Propertypage
