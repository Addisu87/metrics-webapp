import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Countries from './pages/Countries';

const App = () => (
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

export default App;
