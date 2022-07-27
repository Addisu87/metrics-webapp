import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/continents" element={<ContinentsPage />} />
          <Route path="/countries/:continent" element={<CountriesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
