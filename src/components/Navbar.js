import React, { useState } from 'react'
import '../css/Navbar.css';
import '../index.css';
import Logo from '../images/logo.png';
import Login from 'D:/BRC/strider/src/components/Loginmodal'
import Signup from 'D:/BRC/strider/src/components/Signupmodal'
import Home from './Home';
export default function Navbar() {
  const[modalOpen,setModalOpen] = useState(false);
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
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cities
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Banglore</a></li>
                  <li><a className="dropdown-item" href="/">Mumbai</a></li>
                  <li><a className="dropdown-item" href="/">Goa</a></li>
                  <li><a className="dropdown-item" href="/">Chennai</a></li>
                </ul>
              </li>
            </ul>
            {/* <div className="modals">
              <div className="login">
                <button className='login-modal' onClick={() => { setModalOpen(true); }}>Login</button>
                {modalOpen && <Login setOpenModal={setModalOpen} />}
              </div>
              <div className="signup">
                <button className='signup-modal' onClick={() => { setModalOpen(true); }}>Signup</button>
                {modalOpen && <Signup setOpenModal={setModalOpen} />}
              </div>
            </div> */}
          </div>

        </div>
      </nav>
    </>
  )
}




