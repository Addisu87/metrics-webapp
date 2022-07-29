import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowCircleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CoronaImg from '../images/corona.png';
import { getContinents } from '../redux/continents';
import Asia from '../images/Asia.png';
import Africa from '../images/Africa.png';
import Europe from '../images/Europe.png';
import NorthAmerica from '../images/North-America.png';
import Australia from '../images/Australia.png';
import SouthAmerica from '../images/South-America.png';

const HomePage = () => {
  const { status, continents } = useSelector((state) => state.Continents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  const [plate, setPlate] = useState([]);

  const mapImage = (continent) => {
    switch (continent) {
      case 'Asia':
        return Asia;
      case 'North America':
        return NorthAmerica;
      case 'Africa':
        return Africa;
      case 'Europe':
        return Europe;
      case 'Australia-Oceania':
        return Australia;
      case 'South America':
        return SouthAmerica;
      default:
        break;
    }
    return mapImage;
  };

  useEffect(() => {
    setPlate(continents);
  }, [continents]);

  const handleOnChange = (e) => {
    const textInput = e.target.value.toLowerCase() || '';
    const str = textInput[0].toUpperCase().concat(textInput.slice(1, textInput.length))
      || '';

    setPlate(
      continents.filter((continent) => continent.continent.includes(str)),
    );
  };

  return (
    <div className="continents">
      <Title>
        Covid-19
        <br />
        Tracker
      </Title>
      <CoronaPic>
        <img
          src={CoronaImg}
          alt="CoronaImg"
          width={100}
          style={{ alignItems: 'flex-end' }}
        />
      </CoronaPic>

      <SearchBar
        type="text"
        name="search"
        id="searchBar"
        placeholder="Search..."
        onChange={handleOnChange}
      />
      <GridWrapper>
        {status === 'loading' && (
          <Spinner>
            <Circles color="#00BFFF" height={50} width={50} />
          </Spinner>
        )}

        {plate?.map((continent) => (
          <Card key={continent.id}>
            <img
              src={mapImage(continent.continent)}
              alt={continent.continent}
              style={{
                width: '30%',
                height: '95%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '10',
                backgroundColor: 'transparent',
                background: 'no-repeat',
              }}
            />
            <li style={{ position: 'relative', left: '4rem' }}>
              <Link to={`/country/${continent.id}`}>
                <Arrow />
              </Link>
            </li>
            <li>
              <h2>{continent.continent}</h2>
            </li>
            <li>
              <strong>Cases:</strong>
              {continent.cases}
            </li>
            <li>
              <strong>Deaths:</strong>
              {continent.deaths}
            </li>
          </Card>
        ))}
      </GridWrapper>
    </div>
  );
};

export default HomePage;

const CoronaPic = styled.div`
  width: 100vw;
  height: 20vh;
  background: linear-gradient(to right, #000, var(--blue));
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  text-shadow: #000 2px 2px 3px;
  position: absolute;
  top: 8rem;
  left: 1.5rem;
`;

const SearchBar = styled.input`
  width: 100vw;
  padding: 0.5rem;
  background: rgb(67, 105, 178, 0.8);
  color: white;
  font-style: italic;
  font-size: large;
  &::placeholder {
    color: white;
    align-self: center;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: stretch;
  color: white;
  width: 100vw;
`;

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const Card = styled.ul`
  position: relative;
  list-style: none;
  width: 100%;
  background: var(--blue);
  box-shadow: 1px 1px 20px black;
  padding: 2rem 1rem;
  margin: 0;
  &:hover {
    filter: contrast(1.2);
  }
`;

const Arrow = styled(FaArrowCircleRight)`
  color: white;
  font-size: 1.8rem;
  &:hover > ul {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.5);
  }
`;
