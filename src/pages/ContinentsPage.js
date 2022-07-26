import React from 'react';
import Continents from '../components/Continents';

function ContinentsPage() {
  return (
    <div>
      <img
        src={`/images/${location}.png`}
        alt={location}
        className="worldMap"
      />
      <Continents />
    </div>
  );
}

export default ContinentsPage;
