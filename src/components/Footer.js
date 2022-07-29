import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <h4>
        Created by
        {' '}
        <Link href="https://github.com/Addisu87">
          <span>Addisu Haile</span>
          {' '}
        </Link>
      </h4>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  padding: 0.5rem;
  color: var(--blue);
  border: var(--blue) 1px solid;
  background: var(--dark-brown);
  border-radius: 5px;
  margin: 2rem auto;
  align-item: center;
  width: 70%;
  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    box-shadow: 2px 2px 10px var(--blue);
  }
  h4 {
    color: white;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-style: italic;
  color: var(--blue);
`;
