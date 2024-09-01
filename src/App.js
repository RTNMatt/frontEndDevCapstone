import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './Pages/Main';
import Footer from './components/Footer';
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from './Pages/BookingPage';
import NoPage from './Pages/NoPage';





function App() {
  return (
    <>
    <Nav />
    <Header />
    <Routes> 
      <Route path="/" element={<Main/>}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="confirmed" element={<NoPage />}></Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>

    <Footer />
    </>
  );
}

export default App;
