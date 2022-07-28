import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import store from '../redux/configureStore';
import continentsReducer, { getContinents } from '../redux/continents';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should return content from the countries API', () => {
    const continents = continentsReducer();
    expect(continents).not.toEqual(null);
  });

  it('Should return an object with the info of the country', () => {
    const continents = getContinents('Africa');
    expect(continents.length).toBe(1);
  });

  it('Should return initial state', () => {
    const continentsInitialData = {
      countries: [],
      status: 'Loading',
      error: null
    };

    expect(continentsReducer(continentsInitialData, { type: '' })).toEqual({
      countries: [],
      status: 'Loading',
      error: null
    });
  });
});
