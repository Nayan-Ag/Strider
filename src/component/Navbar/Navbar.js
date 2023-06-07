import React, { useState, useEffect } from 'react'
import './Navbar.css';
import '../../index.css';
import Logo from './images/logo.png';
import Home from '../../pages/Home/Home';
import { NavLink } from 'react-router-dom';
export default function Navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href={Home}>
            <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Strider
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore"> Pricing</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cities
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" href="/">Banglore</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/">Chennai</NavLink></li>
                  <li><NavLink className="dropdown-item" href="/">Ahmedabad</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </nav >
    </>
  )
}

