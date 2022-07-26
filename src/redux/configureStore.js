import { combineReducers, configureStore } from '@reduxjs/toolkit';
import continentsReducer from './continents';
import countriesReducer from './countries';

const rootReducer = combineReducers({
  continents: continentsReducer,
  countries: countriesReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
