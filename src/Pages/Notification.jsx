
import React from "react";
import { useState } from "react";
function Notification() {


  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  const [text,settext]=useState("")
  const handletext=(e)=>{
    settext(e.target.value)
  }
  return(
    < >
    <div className="part1">
    <input type="text" name="text"
    value={text}
    onChange={handletext} />
    <p className="output">{text}</p>
    </div>


    <div className="switch-container">
    <button onClick={toggleSwitch}>{isOn?"ON":"OFF"}</button>
      
        <div className="slider" />
      </div>
      <p className="label">{isOn ? 'On' : 'Off'}</p>
    
    </>
    
  )
}

export default Notification;


