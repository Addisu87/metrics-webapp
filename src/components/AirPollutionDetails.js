import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AirPollutionDetails = () => {
  const dispatch = useDispatch();

  // reading state from the store with useSelector
  const AirPollution = useSelector((state) => state.airPollution);

  return <div>AirPollutionDetails</div>;
};

export default AirPollutionDetails;
