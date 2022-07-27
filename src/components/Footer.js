import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <h3>
        Created by
        {' '}
        <Atag href="https://github.com/Addisu87">Addisu Haile</Atag>
      </h3>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--darker);
  margin: 1rem;
  h3 {
    color: white;
  }
`;

const Atag = styled.a`
  text-decoration: none;
  font-style: italic;
  color: rgb(236, 76, 138);
`;
