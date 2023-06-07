import React from 'react'
import './Testimonials.css';
import '../../index.css';
import Item from './Testimonialscard';
import T1 from './images/testi1.jpeg'
import T2 from './images/testi2.jpeg'
import T3 from './images/testi3.jpeg'
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
];


export default function Testimonials() {
    return (
        <div className='testimonials'>
            <div className="head">
                <h1>What our past clients say</h1>
                <div className="head-para"><p>Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris convallis mauris ultricies dolor viverra.</p></div>
            </div>
            <Carousel breakPoints={breakPoints}
               renderBottomCenterControls={false}>
                <Item src={T1} text1="“The best experience we ever had”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="Sophie Moore" text4="Los Angeles, CA">1</Item>
                <Item src={T2} text1="“The best weekend of my life”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="Karen Cutts" text4="Washington DC">2</Item>
                <Item src={T3} text1="“One of a kind experience”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="John Carter" text4="New York, NY">3</Item>
                <Item src={T1} text1="“The best experience we ever had”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="Sophie Moore" text4="Los Angeles, CA">4</Item>
                <Item src={T2} text1="“The best weekend of my life”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="Karen Cutts" text4="Washington DC">5</Item>
                <Item src={T3} text1="“One of a kind experience”" text2="Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas dolor sit amet pharetraol quis pharetra arcu pharetra blandit." text3="John Carter" text4="New York, NY">6</Item>
            </Carousel>
        </div>
    )
}

