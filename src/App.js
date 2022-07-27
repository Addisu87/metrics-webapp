import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:continent" element={<Countries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
