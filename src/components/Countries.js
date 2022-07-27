import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../redux/countries';
import styled from 'styled-components';
import { getContinents } from '../redux/continents';

const Countries = () => {
  const dispatch = useDispatch();
  const { continent } = useParams();
  const continents = useSelector((state) => state.Continents);
  const countryInfo = useSelector((state) => state.Countries);

  const filteredContinent = continents.filter((item) => item.id === continent);
  const { countries } = filteredContinent || [];
  const [country, setCountry] = useState();

  useEffect(() => {
    dispatch(getContinents);
  }, []);

  return (
    <CountryWrapper>
      <h1>{continent}</h1>
      <select name="country" onChange={(e) => setCountry(e.target.value)}>
        <option value="" key="country">
          Country...
        </option>
        {countries &&
          countries.map((land) => (
            <option value={`${land}`} key={land}>
              {land}
            </option>
          ))}
      </select>
      <Button type="button" onClick={() => dispatch(getCountries(country))}>
        Show Information
      </Button>
      {country && country === countryInfo.id ? (
        <CtryInfo>
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
        </CtryInfo>
      ) : (
        'Choose a country'
      )}
    </CountryWrapper>
  );
};

export default Countries;

const CountryWrapper = styled.div``;
const Button = styled.button``;
const CtryInfo = styled.ul``;
