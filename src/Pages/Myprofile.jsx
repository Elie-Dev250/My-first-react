import React, { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom';

function Myprofile() {
  const navigate=useNavigate()

  const [userdata,setuserdata]=useState("")
  const [formdata,setformdata]=useState({
    username:"",
    email:"",
    message:""

  })

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});


  }

  const handlesubmit=(e)=>{
    e.preventDefault();
  }
   
return(
  <>
  <div className='container1'>
<h2>Contact us</h2>
<form onSubmit={handlesubmit}>

  <input type="text" name="username"
  value={formdata.username}
  placeholder='username' 
  onChange={handlechange}
  required />

  <input type="email" name="email"
  
  value={formdata.email}
  placeholder='email'
  required
  onChange={handlechange}
  />

  <textarea name="message" id="message"
  value={formdata.message}
  placeholder='enter message here...'
  onChange={handlechange}/>

<button type='submit' onClick={()=>navigate('/home',{replace:true})}>Submit</button>
</form>

  </div>
  
  
  </>
)
   
 
}

export default Myprofile
