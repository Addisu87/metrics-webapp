import { combineReducers, configureStore } from '@reduxjs/toolkit';
import airPollutionReducer from './airPollution';

const rootReducer = combineReducers({
  airPollution: airPollutionReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
