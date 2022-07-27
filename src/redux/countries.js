const CountryURL = 'https://disease.sh/v3/covid-19/countries/';

// Action types
const GET_COUNTRY_DATA = 'metrics-webapp/country/GET_COUNTRY_DATA';

// get countries data
export const getCountriesFromAPI = async (country) => {
  const object = await fetch(CountryURL)
    .then((response) => response.json())
    .then((data) => data.filter((ctry) => ctry.country === country))
    .then((info) =>
      info.map((cont) => ({
        id: country,
        flag: cont.countryInfo.flag,
        cases: cont.cases,
        deaths: cont.deaths,
        recovered: cont.recovered,
        active: cont.active,
        critical: cont.critical,
        population: cont.population
      }))
    );
  return object[0];
};

// Reducer
const countriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default countriesReducer;

// Action Creators
// Thunk
export const getCountries = (country) => async (dispatch) => {
  const countryData = await getCountriesFromAPI(`${country}`);
  dispatch({ type: GET_COUNTRY_DATA, payload: countryData });
};
