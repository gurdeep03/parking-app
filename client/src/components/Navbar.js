import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">
        <h1>Parking</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="../Component/Navbar.js">Parking Space</a></li>
        <li><a href="#services">Booking</a></li>
        <li><Link to= "/wallet">Wallet</Link></li>
        <li><a href="#contact">Profile</a></li>
        <li><a href="#contact">Contact us </a></li>
        <li><Link to="/login">Login</Link></li>


      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar