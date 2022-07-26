import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navTitle">
        <h1>Covid-19 Tracker</h1>
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
