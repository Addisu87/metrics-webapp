import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Continents from './components/Continents';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continents />} />
      </Routes>
    </div>
  );
};

export default App;
