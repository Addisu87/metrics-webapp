//URL
const API_Key = '6a40eacef2e7e6825dbb118bfcd00ce9';
const URL = (lat, lon) =>
  `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_Key}`;

// Actions
const FETCH_DATA_STARTED = 'air_pollution_app/air_pollution/FETCH_DATA_STARTED';
const FETCH_DATA_SUCCEEDED =
  'air_pollution_app/air_pollution/FETCH_DATA_SUCCEEDED';
const FETCH_DATA_FAILED = 'air_pollution_app/air_pollution/FETCH_DATA_FAILED';

// Action Creators

export const getAirPollutionStarted = () => ({
  type: FETCH_DATA_STARTED
});

export const getAirPollutionSucceeded = (airPollutionData) => ({
  type: FETCH_DATA_SUCCEEDED,
  payload: airPollutionData
});

export const getAirPollutionFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error
});

// Thunk

export const fetchAirPollution = () => async (dispatch) => {
  dispatch(getAirPollutionStarted());
  try {
    const data = await fetch(URL);
    const response = await data.json();
    dispatch(
      getAirPollutionSucceeded(
        response.map((pollution) => ({
          main: pollution.main,
          components: pollution.components,
          dt: pollution.dt
        }))
      )
    );
  } catch (error) {
    dispatch(getAirPollutionFailed(error.toString()));
  }
};

// reducer
const initialState = {
  data: {},
  status: 'idle',
  error: null
};

const airPollutionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DATA_STARTED:
      return { ...state, status: 'loading', error: null };
    case FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        status: 'succeeded',
        error: null
      };
    case FETCH_DATA_FAILED:
      return { ...state, status: 'failed', error: action.error };

    default:
      return state;
  }
};

export default airPollutionReducer;
