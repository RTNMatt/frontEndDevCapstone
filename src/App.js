import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './Pages/Main';
import Footer from './components/Footer';
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from './Pages/BookingPage';
import NoPage from './Pages/NoPage';
import BookingConfirmed from './Pages/BookingConfirmed';
import About from './components/About';





function App() {
  return (
    <>
    <Nav />
    <Header />
    <Routes> 
      <Route path="/" element={<Main/>}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmed" element={<BookingConfirmed />}></Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
    <About />

    <Footer />
    </>
  );
}

export default App;
