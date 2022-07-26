import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styled.navbar}>
      <div className="navTitle">
        <h1>Covid-19 Tracker</h1>
      </div>
      <ul className={styled.navLinks}>
        <li className="navLink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/continents">Continents</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
