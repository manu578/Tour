import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className = 'container-fluid nav_bg'>
      <div className='row'>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className ="container-fluid">
    <NavLink className ="navbar-brand" to="#">Travelli</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/aboutRajasthan">About Rajasthan</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Fairs And Festivals</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Explore
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Forts</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Museums</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Lakes</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Temples</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Markets</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Restaurants</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Blog</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plan Your Trip
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Accomodations</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Travel Agents & Guide</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
</div>
    </>
  );
};
 export default Navbar;