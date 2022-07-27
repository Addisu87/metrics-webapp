import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowCircleRight } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WorldImg from '../images/mapa-mundi.png';
import { getContinents } from '../redux/continents';

const HomePage = () => {
  const { status, continents } = useSelector((state) => state.Continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  const [plate, setPlate] = useState(false);

  const handleOnChange = (e) => {
    const textInput = e.target.value.toLowerCase() || '';
    const str = textInput[0].toUpperCase().concat(textInput.slice(1, textInput.length))
      || '';
    setPlate(
      continents.filter((continent) => continent.countries.includes(str)),
    );
  };

  return (
    <div className="continents">
      <WorldMap>
        <Title>
          Covid-19
          {' '}
          <br />
          {' '}
          Tracker
        </Title>
        <img src={WorldImg} alt="World map" width={400} />
      </WorldMap>

      <SearchBar
        type="text"
        name="search"
        id="searchBar"
        placeholder="Search..."
        onChange={handleOnChange}
      />
      <GridWrapper>
        {status === 'loading' && (
          <div>
            <Circles color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {/* {status === 'failed' && <div>Error: {error}</div>} */}
        {status === 'succeeded' && plate && plate.length !== 0 ? (
          <Card key={plate[0].continent}>
            <li style={{ position: 'relative', left: '4rem' }}>
              <Link to={`/country/${plate[0].id}`}>
                <Arrow />
              </Link>
            </li>
            <li>
              <h2>{plate[0].continent}</h2>
            </li>
            <li>
              <strong>Cases:</strong>
              {plate[0].cases}
            </li>
            <li>
              <strong>Deaths:</strong>
              {plate[0].deaths}
            </li>
            <li>
              <strong>Recovered:</strong>
              {plate[0].recovered}
            </li>
          </Card>
        ) : (
          continents.map((continent) => (
            <Card key={continent.id}>
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
              <li>
                <strong>Recovered:</strong>
                {continent.recovered}
              </li>
            </Card>
          ))
        )}
      </GridWrapper>
    </div>
  );
};

export default HomePage;

const WorldMap = styled.div`
  width: 100vw;
  height: 25vh;
  background: linear-gradient(to right, #000, rgb(236, 76, 138));
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  text-shadow: #000 2px 2px 3px;
  position: absolute;
  top: 3rem;
  right: 2rem;
`;

const SearchBar = styled.input`
  width: 100vw;
  padding: 0.5rem;
  background: rgb(236, 76, 138, 0.8);
  color: white;
  font-style: italic;
  font-size: large;
  &::placeholder {
    color: white;
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

const Card = styled.ul`
  list-style: none;
  width: 100%;
  background: rgb(236, 76, 138);
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
