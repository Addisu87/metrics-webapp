import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import store from '../redux/configureStore';
import continentsReducer, { getContinents } from '../redux/continents';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should return content from the countries API', () => {
    const continentsAPI = continentsReducer();
    expect(continentsAPI).not.toEqual(null);
  });

  it('Should return an object with the info of the country', () => {
    const continents = getContinents('Africa');
    expect(continents.length).toBe(1);
  });
});
