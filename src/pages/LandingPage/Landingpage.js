import React from 'react'
import Home from '../Home/Home'
import Whyus from '../../component/Whyus/Whyus';
import Testimonials from '../../component/Testimonials/Testimonials';
import Property from '../../component/Property/Property';

const Landingpage = () => {
    return (
        <div>
            <Home></Home>
            <Property></Property>
            <Whyus></Whyus>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Landingpage
