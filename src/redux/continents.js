const URL = 'https://covid.mathdro.id/api/continents/';

// Actions
const FETCH_CONTINENTS_STARTED = 'covid-tracker/FETCH_CONTINENTS_STARTED';
const FETCH_CONTINENTS_SUCCESS = 'covid-tracker/FETCH_CONTINENTS_SUCCESS';
const FETCH_CONTINENTS_FAILED = 'covid-tracker/FETCH_CONTINENTS_FAILED';

// Action creators

export const continentStarted = () => ({
  type: FETCH_CONTINENTS_STARTED
});

export const continentSucceeded = (continents) => ({
  type: FETCH_CONTINENTS_SUCCESS,
  payload: continents
});

export const continentFailed = (error) => ({
  type: FETCH_CONTINENTS_FAILED,
  error
});

// Thunk

export const getContinents = () => async (dispatch) => {
  dispatch(continentStarted());
  try {
    const data = await fetch(URL);
    const response = await data.json();
    dispatch(
      continentSucceeded(
        response.map((cont) => ({
          name: cont.continent,
          deaths: cont.deaths,
          countries: cont.countries
        }))
      )
    );
  } catch (error) {
    dispatch(continentFailed(error.toString()));
  }
};

// initial State
const initialState = {
  continents: [],
  status: 'idle',
  error: null
};

// continents reducer
const continentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CONTINENTS_STARTED:
      return { ...state, status: 'loading', error: null };
    case FETCH_CONTINENTS_SUCCESS:
      return {
        ...state,
        continents: action.payload,
        status: 'succeeded',
        error: null
      };
    case FETCH_CONTINENTS_FAILED:
      return { ...state, status: 'failed', error: action.error };

    default:
      return state;
  }
};

export default continentsReducer;
