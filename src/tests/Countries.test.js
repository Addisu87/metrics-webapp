import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Countries from '../pages/Countries';
import store from '../redux/configureStore';
import continentsReducer from '../redux/continents';
import countriesReducer, { getCountries } from '../redux/countries';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should return content from the countries API', () => {
    const countries = countriesReducer();
    expect(countries).not.toEqual(null);
  });

  it('Should return an object with the info of the country', () => {
    const country = getCountries('Ethiopia');
    expect(country.length).toBe(1);
  });
});
