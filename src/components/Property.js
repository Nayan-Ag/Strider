import React from 'react'
import PropertyCard from './PropertyCard'
import Property1 from '../images/property1.jpg'
import Property2 from '../images/property2.jpg'
import Property3 from '../images/property3.jpg'
import Property4 from '../images/property4.jpg'
import Property5 from '../images/property5.jpg'
import '../css/Property.css'
const Property = () => {
    let box = document.querySelector('.Product-container');
    const btnpressprev = () => {
        let width = (box.clientWidth) / 3.7;
        box.scrollLeft = box.scrollLeft - width;
    }
    const btnpressnext = () => {
        let width = (box.clientWidth) / 3.7;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className='Product'>
            <div className="header">
                <div className="heading">
                    <h1>Explore our Property..</h1>
                </div>
                <button className='browse'>Browse all</button>
            </div>
            <button className='pre-button' onClick={btnpressprev}><p>&lt;</p></button>
            <button className='next-button' onClick={btnpressnext}><p>&gt;</p></button>
            <div className="Product-container">
                <PropertyCard src={Property1} type="Single Rustic Room" desc="Single bed Airbnb for bachelors." guest="2 Guests" bed="1 Bedroom" rate="Rs. 1300" />
                <PropertyCard src={Property2} type="Double Rustic Cabin" desc="2BHK Couchsurf for bachelors. " guest="4 Guests" bed="2 Bedroom" rate="0" />
                <PropertyCard src={Property3} type="Family Rustic Room" desc="4BHK Airbnb for family." guest="8 Guests" bed="4 Bedroom" rate="3500" />
                <PropertyCard src={Property4} type="Micro Rustic Cabin" desc="1BHK Couchsurf for job people" guest="1 Guests" bed="1 Bedroom" rate="0" />
                <PropertyCard src={Property1} type="Double Rustic Room" desc="2BHK Airbnb for bachelors." guest="4 Guests" bed="2 Bedroom" rate="1700" />
                <PropertyCard src={Property5} type="Single Rustoc Cabin" desc="1BHK Couchsurf for bachelors." guest="2 Guests" bed="1 Bedroom" rate="0" />
                <PropertyCard src={Property2} type="Duplex Rustic Room" desc="2BHK Airbnb for family." guest=" 4 Guests" bed="2 Bedroom" rate="1900" />
                <PropertyCard src={Property3} type="Family Rustic Cabin" desc="4BHK Couchsurf for bachelors." guest="8 Guests" bed="4 Bedroom" rate="0" />
                <PropertyCard src={Property4} type="Micro Rustic Room" desc="1BHK Airbnb for long time" guest="1 Guests" bed="1 Bedroom" rate="1000" />
                <PropertyCard src={Property5} type="Duplex Rustic Cabin" desc="2BHK Couchsurf for family." guest="4 Guests" bed="2 Bedroom" rate="0" />
            </div>
        </div>
    )
}

export default Property
