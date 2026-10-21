
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import AnnouncementBar from './components/layout/AnnouncementBar.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Checkout from './pages/Checkout.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <AnnouncementBar />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:slug" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
