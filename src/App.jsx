import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RandomDog from './pages/RandomDog';
import DogFacts from './pages/DogFacts';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-dog" element={<RandomDog />} />
        <Route path="/dog-facts" element={<DogFacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
