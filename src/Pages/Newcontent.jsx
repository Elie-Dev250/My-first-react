import React, { useState } from 'react';

const AuthForm = () => {

  const [islogin,setislogin]=useState(true)

  const [formdata,setformdata]=useState({
    username:'',
    phone:'',
    location:'',
    email:'',
    password:''
  })

  const handleChange=(event)=>{
    setformdata({...formdata,[event.target.name]:event.target.value});
}

    const handleSubmit=(event)=>{
event.preventDefault();
    }


    if(islogin){
      console.log("user is logged in with ",formdata)
    } else{
      console.log("user is in signup with ",formdata)
    }
  



  return(
    <>

<div className='data'>

  <h2>{islogin? 'Login the account':"Signup the account"}</h2>

  <form onSubmit={handleSubmit}>


    {!islogin && (
      <div>
      <input 
      type='text'
      name='username'
      value={formdata.username}
      placeholder='username'
      onChange={handleChange}
      required/>
      <input type="text"
      name='phone'
      placeholder='+250-XX-XXX-XXXX'
      value={formdata.phone}
      onChange={handleChange}
       />

      <input type="text" 
      name='location'
      placeholder='locatio'
      value={formdata.location}
      onChange={handleChange}
      required
       />
      </div>
      


      
    )}

    <input type="email" 
    name='email'
    value={formdata.email}
    placeholder='email'
    required
    onChange={handleChange}

     />

     <input type="password"
     name='password'
     value={formdata.password}
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
 
};

export default AuthForm;
