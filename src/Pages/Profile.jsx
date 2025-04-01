import React, { useEffect, useState } from 'react'
import Myprofile from './Myprofile';

function Profile() {

 const [time,setTime]=useState(new Date())
 useEffect(()=>{
  const interval=setInterval(()=>{
    setTime(new Date());
  },1000)

  return()=>{
    clearInterval(interval)
  }
 },[])
 function formattime(){
  let hours=time.getHours();
  const minutes=time.getMinutes();
  const seconds=time.getSeconds();
  const meridium=hours>=12? 'PM':'AM';
  hours=hours%12 || 12


   return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}: ${meridium}`
 }




  
  function padZero(number){
    return(number<10 ? "0":"")+number
  }
  return (
    <div>
    <div className='clock'>
      <span>{formattime()}</span>
      <h1>hello</h1>
    </div>

    <Myprofile/>
    </div>
  )}


export default Profile



