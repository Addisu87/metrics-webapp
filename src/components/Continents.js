import React, { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getContinents } from '../redux/continents';
import { continentGadget } from './continentGadget';

const Continents = () => {
  const { status, continents } = useSelector((state) => state.Continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  return (
    <div className="continents">
      {status === 'loading' && (
        <div>
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <div>
          {continents.map((continent) => (
            <continentGadget
              key={continent.name}
              name={continent.name}
              deaths={continent.deaths}
              countries={continent.countries}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Continents;
