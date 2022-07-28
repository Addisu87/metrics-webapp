import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getCountries } from '../redux/countries';
import { getContinents } from '../redux/continents';

const Countries = () => {
  const dispatch = useDispatch();
  const { continent } = useParams();
  const { continents } = useSelector((state) => state.Continents) || [];
  const countryInfo = useSelector((state) => state.Countries);

  const filteredContinent = continents.filter(
    (item) => item.id === continent,
  )[0];
  const { countries } = filteredContinent || [];
  const [country, setCountry] = useState();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  return (
    <CountryWrapper>
      <h1>{continent}</h1>
      <Select name="country" onChange={(e) => setCountry(e.target.value)}>
        <option value="" key="country">
          Country...
        </option>
        {countries
          && countries.map((land) => (
            <option value={`${land}`} key={land}>
              {land}
            </option>
          ))}
      </Select>
      <Button type="button" onClick={() => dispatch(getCountries(country))}>
        <h4>Show Information</h4>
      </Button>
      {country && country === countryInfo.id ? (
        <Details>
          <li>
            <h3>{countryInfo.id}</h3>
          </li>
          <li>
            <img src={countryInfo.flag} alt="flag" width={150} />
          </li>
          <br />
          <li>
            <strong>Cases:</strong>
            {countryInfo.cases}
          </li>
          <br />
          <li>
            <strong>Active:</strong>
            {countryInfo.active}
          </li>
          <br />
          <li>
            <strong>Critical:</strong>
            {countryInfo.critical}
          </li>
          <br />
          <li>
            <strong>Recovered:</strong>
            {countryInfo.recovered}
          </li>
          <br />
          <li>
            <strong>Deaths:</strong>
            {countryInfo.deaths}
          </li>
          <br />
          <li>
            <strong>Population:</strong>
            {countryInfo.population}
          </li>
        </Details>
      ) : (
        'Choose a country'
      )}
    </CountryWrapper>
  );
};

export default Countries;

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 2rem;
  width: 90%;
`;

const Select = styled.select`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0.5rem;
  margin: 2rem;
  width: 60%;
`;

const Button = styled.button`
  padding: 0.5rem;
  color: var(--white);
  border: var(--blue) 1px solid;
  background: var(--dark-brown);
  border-radius: 5px;
  margin: 2rem 0;
  align-self: center;
  width: 60%;
  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    box-shadow: 2px 2px 10px var(--blue);
  }
`;

const Details = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 5px;
  justify-content: space-between;
  width: 75%;
  list-style: none;
  background: var(--blue);
  color: white;
  padding: 2rem;
`;
