import React from 'react'
import { useState } from 'react'
function Personalvlog() {

  const [islogin,setislogin]=useState(true)

  const [formData,setformdata]=useState({
    fullname:"",
    email:"",
    location:"",
    password:""

  })


  const handleChange=(event)=>{
    setformdata({...formData,[event.target.name]: event.target.value});



  }


  const handleSubmit=(e)=>{
    e.preventDefault();
  }


  if(islogin){
    console.log("userislogged in by",formData)
  }
  else{
    console.log("user is signing up with",formData)
  }
  return (
  <>

  <div className='vlogs'>
<h2>{islogin? 'Login your account': "Siagnup with your account"}</h2>

<form onSubmit={handleSubmit}>

{!islogin && (
  <div className='fullname'>
  <input 

  type='text'
  value={formData.fullname}
  name='fullname'
  placeholder='Fullname..'
  required
  onChange={handleChange}
  
  />

  <input type="email"  
  value={formData.email}
  name='email'
  placeholder='email'
  onChange={handleChange}
  required
  
  
  />


  <input type="text" name=" location"
  value={formData.location}
  placeholder='location'
  onChange={handleChange}
    />
<input type="password" name="password" id="password"
value={formData.password}
placeholder='password'
required />


</div>
  

  
)}
<input type="email" 
    name='email'
    value={formData.email}
    placeholder='email'
    required
    onChange={handleChange}

     />

     <input type="password"
     name='password'
     value={formData.password}
     placeholder='password'
     onChange={handleChange}
     required />
     

     <button type='submit'>{islogin? "Login":"Signup"}</button>
</form>
<p style={{ marginTop: '15px' }}>
        {islogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          onClick={() => setislogin(!islogin)}
          style={{
            background: 'none',
            color: 'blue',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          {islogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
  
      </div>
  </>
  )
}

export default Personalvlog
