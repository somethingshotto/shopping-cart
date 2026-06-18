import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './App.css';
import Navbar from './components/NavBar';
import BottomBar from './components/BottomBar';
import { CartProvider } from "./components/context";

function App() {
  return (
    <CartProvider>
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomBar />
    </>    </CartProvider>
  );
}

export default App;