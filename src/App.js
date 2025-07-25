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
          <Route exact path="/" element={<Navigate to="/NBhome" />} />
          <Route exact path="/North_Blade/" element={<Navigate to="/NBhome"/>}/>
          <Route exact path="/NBhome" element={<LandingPage />} />
          <Route exact path="/NBpackages" element={<CataloguePage />} />
          <Route path="/NBpackages/:packageId" element={<DestinationPage/>}/>
          <Route exact path="/NBabout" element={<AboutUs/>}/>
          <Route exact path="/NBcontact" element={<ContactPage />} />
          <Route exact path="/NBlogin" element={<LoginPage />} />
          <Route exact path='/NBregister' element={<RegisterPage/>}/>
          <Route path='/NBbooking/:packageId' element={<BookingPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        )}
    </div>
  );
}

export default App;
