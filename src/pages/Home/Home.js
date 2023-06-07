import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <div className="content content-1">
                        <h1>Strider</h1>
                        <p>Combined Platform for both Airnnb and CouchSurfing.</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow"><NavLink className="link" to="/explore">Book Now</NavLink></a>
                            <button className="about"><NavLink className="link" to="/about">About us</NavLink></button>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="content content-2">
                        <h1>Strider / Airbrnb</h1>
                        <p>Come and join us to explore variety of airbnb rooms for both family and bachelors.</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow"><NavLink className="link" to="/explore">Book Now</NavLink></a>
                            <button className="about"><NavLink className="link" to="/about">About us</NavLink></button>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="content content-3">
                        <h1>Strider / CouchSurfing</h1>
                        <p>Way to explore more and more instead of room rent pay in form of helping owners staying with them..</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow"><NavLink className="link" to="/explore">Book Now</NavLink></a>
                            <button className="about"><NavLink className="link" to="/about">About us</NavLink></button>
                        </div>
                    </div>

                </div>
            </div>

            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>

            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </div>
    )
}
