import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Todolist from './Pages/Todolist';
import Profile from './Pages/Profile';
import Home from './Pages/Home';  
import About from './Pages/About'; 
import Login from './Pages/Login';
import ListComponent from './Components/Gallery';
import Footer from './Pages/Footer';
import Shop from './Components/Shop';
import Newcontent from './Pages/Newcontent';
import Personalvlog from './Pages/Personalvlog';
import Notification from './Pages/Notification';
import UserList from './Pages/UserList'
import Calculator from './Pages/Calculator';




function App() {
  return (
    <>
    <div className='all'>
      <Navbar />
  
      
      
     
      

      <div className='container'>
        <Routes>
          
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todolist' element={<Todolist />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/not" element={<Notification />} />
          <Route path="/content" element={<Newcontent />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/calcu" element={<Calculator />} />
          <Route path="/personal" element={<Personalvlog />} />

         

        </Routes>

       
      </div>
     


      
      <Footer/>

      </div>
    </>
  );
}

export default App;
