import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Home from './Pages/Home';  
import About from './Pages/About'; 
import Login from './Pages/Login';

import Footer from './Pages/Footer';
import Shop from './Components/Shop';

function App() {
  return (
    <>
    <div className='all'>
      <Navbar />
     
      

      <div className='container'>
        <Routes>
          
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer/>

      </div>
    </>
  );
}

export default App;
