import React from 'react';
import Sidebar from '../Components/Sidebar';
import d2 from '../assets/d2.webp'; 

function Home() {
  return (
    <div>

        <div className='type'>
      <Sidebar />
      <div className="pic">
        <h1>Hello coder</h1>
        <img src={d2} alt=""/>
      </div>
      </div>
    </div>
  );
}

export default Home;
