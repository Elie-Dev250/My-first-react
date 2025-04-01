import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className='navbar'>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          
          
        </ul>

        <input className='search' type='text' placeholder='Search here...' />

        <button onClick={() => navigate('/signup', { replace: true })}>
          Signup
        </button>
      </div>
    </>
  );
}

export default Navbar;
