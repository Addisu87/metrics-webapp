import React from 'react';
import { NavLink } from 'react-router-dom';
import openWeather from '../images/open-weather.png';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navTitle">
        <img id="logo" src={openWeather} alt="Logo" />
        <h1>Air Pollution App</h1>
      </div>
      <ul className="navLinks">
        <li className="navLink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/continents">Continents</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
