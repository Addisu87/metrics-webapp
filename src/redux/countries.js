const CountryURL = 'https://disease.sh/v3/covid-19/countries';

// initial states

const initialData = {
  countries: [],
  status: 'idle',
  error: null
};

// Actions
const FETCH_COUNTRIES_STARTED = 'covid-tracker/FETCH_COUNTRIES_STARTED';
const FETCH_COUNTRIES_SUCCESS = 'covid-tracker/FETCH_COUNTRIES_SUCCESS';
const FETCH_COUNTRIES_FAILED = 'covid-tracker/FETCH_COUNTRIES_FAILED';

// Action creators
export const countriesStarted = () => ({
  type: FETCH_COUNTRIES_STARTED
});

export const countriesSucceeded = (country) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: country
});

export const countriesFailed = (error) => ({
  type: FETCH_COUNTRIES_FAILED,
  error
});

// Thunk
export const getCountries = (country) => async (dispatch) => {
  dispatch(countriesStarted());
  await fetch(CountryURL)
    .then((response) => response.json())
    .then((data) => {
      const newCountries = data
        .filter((cont) => cont.country === country)
        .map((cont) => ({
          id: country,
          flag: cont.countryInfo.flag,
          cases: cont.cases,
          deaths: cont.deaths,
          recovered: cont.recovered,
          active: cont.active,
          critical: cont.critical,
          population: cont.population
        }));
      dispatch(countriesSucceeded(newCountries));
    })
    .catch((error) => {
      dispatch(countriesFailed(JSON.stringify(error)));
    });
};

// continents reducer
const countriesReducer = (state = initialData, action = {}) => {
  switch (action.type) {
    case FETCH_COUNTRIES_STARTED:
      return { ...state, status: 'loading', error: null };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        status: 'succeeded',
        error: null
      };
    case FETCH_COUNTRIES_FAILED:
      return { ...state, status: 'failed', error: action.error };

    default:
      return state;
  }
};

export default countriesReducer;
