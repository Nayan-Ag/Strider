import React from 'react'
import '../css/Home.css';

export default function Home() {
    return (

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5100">
                    <div className="content content-1">
                        <h1>Strider</h1>
                        <p>Combined Platform for both Airnnb and CouchSurfing.</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow">Book Now</a>
                            <button className="about">About us</button>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="5100">
                    <div className="content content-2">
                        <h1>Strider / Airbrnb</h1>
                        <p>Come and join us to explore variety of airbnb rooms for both family and bachelors.</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow">Book Now</a>
                            <button className="about">About us</button>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="5100">
                    <div className="content content-3">
                        <h1>Strider / CouchSurfing</h1>
                        <p>Way to explore more and more instead of room rent pay in form of helping owners staying with them..</p>

                        <div className="button">
                            <a className="explore book-now" to="/BookNow">Book Now</a>
                            <button className="about">About us</button>
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
