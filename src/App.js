import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
//import NavBar from "./components/navbar";
import LandingPage from './routes/landing';
import ContactPage from './routes/contact'
import CataloguePage from './routes/catalogue';
import LoginPage from './routes/login';
import AboutUs from './routes/about';
import LoadingPage from './routes/loading';
import DestinationPage from './routes/destination';
import RegisterPage from './routes/register';
import BookingPage from './routes/book';
import ErrorPage from './routes/error';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);




  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (   
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/North_Blade/" element={<Navigate to="/home"/>}/>
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/packages" element={<CataloguePage />} />
          <Route path="/packages/:packageId" element={<DestinationPage/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage/>}/>
          <Route path='/booking/:packageId' element={<BookingPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        )}
    </div>
  );
}

export default App;
