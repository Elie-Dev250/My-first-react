import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Myprofile() {
    const navigate=useNavigate()

    const [profiledata,setprofile]=useState({
        username:"",
        email:"",
        fullname:"",
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setprofile({
            ...profiledata,[name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("form is submitted",profiledata)
    }
  return (
    <div>
      <h1>Hello again in put your profile </h1>
      <form onChange={handleSubmit} className='hy'>
        <input type="text" onChange={handleChange}
        name='username'
        value={profiledata.username}
        placeholder='enter your username'
        required
         />
         <input type="email"  onChange={handleChange}
         name='email'
         value={profiledata.email}
         placeholder='enter your email'
         required
          />

          <input type="text"  onChange={handleChange}
          name='fullname'
          value={profiledata.fullname}
          placeholder='enter your full name'
          required
           />

<button type='submit' onClick={()=>navigate('/home',{replace:true})}>Save</button>
      </form>
    </div>
  )
}

export default Myprofile
