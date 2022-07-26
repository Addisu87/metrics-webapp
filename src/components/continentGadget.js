import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const continentGadget = (props) => {
  const { name, deaths } = props;
  return (
    <Content>
      <img src={`/images/${name}.png`} alt={name} />
      <Text>
        <h3>{name}</h3>
        <h4>{deaths}</h4>
      </Text>
      <DetailLink to={`/continent/${name}`} type="button" className="details">
        <FaArrowCircleRight />
      </DetailLink>
    </Content>
  );
};

continentGadget.propTypes = {
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired
};

export default continentGadget;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue);
  color: var(--white);
  padding: 10px;
`;

const Text = styled.div`
  text-align: end;
  text-decoration: none;
  h3 {
    font-size: 3.5vw;
    text-transform: uppercase;
  }

  h4 {
    font-size: 3vw;
  }
`;

const DetailLink = styled(Link)`
  position: absolute;
  margin-left: 40vw;
  margin-top: 2vw;
`;
