import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import Error from './pages/Error';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
