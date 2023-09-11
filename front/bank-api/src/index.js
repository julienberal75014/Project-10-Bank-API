import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider >
);
