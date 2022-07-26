import { combineReducers, configureStore } from '@reduxjs/toolkit';
import continentsReducer from './continents';
import countriesReducer from './countries';

const rootReducer = combineReducers({
  Continents: continentsReducer,
  Countries: countriesReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
