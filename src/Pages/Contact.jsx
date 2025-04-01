import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();

    const [contact,setcontact]=useState({
        username:'',
        email:'',
        message:''

    })

    function handleChange(e){
        const {name,value}=e.target
        setcontact({...contact,[name]:value})
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('message sent',contact)
    };



  return (
    <div>
      <div className='conta'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username"  placeholder='enter your username'
            value={contact.username}
            onChange={handleChange}
            required
            
            /><br />

            <input type="email" name="email" id="email" placeholder='enter your email'
            value={contact.email}
            onChange={handleChange}
            required
             /> <br />

             <textarea name="message" id="message" placeholder='enter message'
             value={contact.message}
             onChange={handleChange}

             ></textarea>

           <button onClick={()=>navigate('/home',{replace:true})}>submit</button>


            
        </form>
      </div>
    </div>
  )
}

export default Contact
