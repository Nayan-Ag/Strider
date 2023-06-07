import React , {useState} from 'react'
import PropertyCard from './PropertyCard'
import Property1 from './images/property1.jpg'
import Property2 from './images/property2.jpg'
import Property3 from './images/property3.jpg'
import Property4 from './images/property4.jpg'
import Property5 from './images/property5.jpg'
import './Property.css'
import { NavLink } from 'react-router-dom'
const Property = () => {
    let box = document.querySelector('.Product-container');
    const btnpressprev = () => {
        let width = (box.clientWidth) / 3.5;
        box.scrollLeft = box.scrollLeft - width;
    }
    const btnpressnext = () => {
        let width = (box.clientWidth) / 3.5;
        box.scrollLeft = box.scrollLeft + width;
    }


    return (
        <div>
            <div className='Product'>
                <div className="header">
                    <div className="heading">
                        <h1>Explore our Property..</h1>
                    </div>
                    <button className='browse'> <NavLink to="/explore" className="browse_link">Browse all </NavLink> </button>
                </div>
                <button className='pre-button' onClick={btnpressprev}><p>&lt;</p></button>
                <button className='next-button' onClick={btnpressnext}><p>&gt;</p></button>
                <div className="Product-container">
                    <PropertyCard src={Property1} type="Single Rustic Room" desc="Single bed GuestHouse for bachelors." guest="2 Guests" bed="1 Bedroom" rate="Rs. 1300" dest="/single_room" />
                    <PropertyCard src={Property2} type="Group Rustic Cabin" desc="2BHK Couchsurf for bachelors. " guest="4 Guests" bed="2 Bedroom" rate="0" dest="/group_cabin" />
                    <PropertyCard src={Property4} type="Micro Rustic Cabin" desc="1BHK Couchsurf for job people" guest="1 Guests" bed="1 Bedroom" rate="0" dest="/micro_cabin" />
                    <PropertyCard src={Property1} type="Family Rustic Room" desc="2BHK GuestHouse for bachelors." guest="4 Guests" bed="2 Bedroom" rate="1700" dest="/family_room" />
                    <PropertyCard src={Property5} type="Single Rustoc Cabin" desc="1BHK Couchsurf for bachelors." guest="2 Guests" bed="1 Bedroom" rate="0" dest="/single_cabin" />
                    <PropertyCard src={Property2} type="Duplex Rustic Room" desc="2BHK GuestHouse for family." guest=" 4 Guests" bed="2 Bedroom" rate="1900" dest="/double_room" />
                    <PropertyCard src={Property3} type="Family Rustic Cabin" desc="4BHK Couchsurf for bachelors." guest="8 Guests" bed="4 Bedroom" rate="0" dest="/family_cabin" />
                    <PropertyCard src={Property4} type="Micro Rustic Room" desc="1BHK GuesHouse for long time" guest="1 Guests" bed="1 Bedroom" rate="1000" dest="/micro_room" />
                    <PropertyCard src={Property5} type="Duplex Rustic Cabin" desc="2BHK Couchsurf for family." guest="4 Guests" bed="2 Bedroom" rate="0" dest="/double_cabin" />
                </div>
            </div>
        </div>
    )
}

export default Property
