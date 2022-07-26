const URL = 'https://covid.mathdro.id/api/countries/';

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

export const countriesSucceeded = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries
});

export const countriesFailed = (error) => ({
  type: FETCH_COUNTRIES_FAILED,
  error
});

// Thunk
export const getCountries = (location) => (dispatch) => {
  dispatch(countriesStarted());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newCountries = data
        .filter((cont) => cont.continent === location)
        .map((cont) => ({
          name: cont.country,
          deaths: cont.deaths
        }));
      dispatch(countriesSucceeded(newCountries));
    })
    .catch((err) => {
      dispatch(countriesFailed(JSON.stringify(err.message)));
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
