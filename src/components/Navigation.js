import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navigation() {
  return (
    <Nav>
      <NavBar>
        <NavLinks to="/">
          <BackArrow />
        </NavLinks>
        <h3>2022</h3>
      </NavBar>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  background-color: var(--dark-pink);
  color: var(--white);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  font-size: 11px;
`;

const NavBar = styled.div`
  display: flex;
  color: white;
  align-items: center;
  margin-right: -24px;
  width: 100vw;
  padding-left: 1.5rem;
  align-items: center;
  white-space: nowrap;
`;

const NavLinks = styled(NavLink)`
  display: flex;
  list-style: none;
  gap: 5px;
  align-items: center;
  padding: 6px 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const BackArrow = styled(FaChevronCircleLeft)`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%, 45%);
  font-size: 1.8rem;
  cursor: pointer;
`;
