import React, { useState, useEffect } from 'react';

const Todolist = () => {

  const [count,setcount]=useState(0)
  const handledecrease=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  useEffect(()=>{
console.log("count changed ",count)
  },[])

  
  const [tasks, settask] = useState(() => {
   
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : ["task1", "task2", "task3"];
  });

  const [newtask, setnewtask] = useState("");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event) {
    setnewtask(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      settask((prevTasks) => [...prevTasks, newtask]);
      setnewtask("");
    }
  }

  function removetask(index) {
    const updatedtask = tasks.filter((_, i) => i !== index);
    settask(updatedtask);
  }

  return (
    <>
      <div className='tasks'>
        <h1>TodoList App</h1>
        <input
          type="text"
          placeholder='Add tasks here...'
          value={newtask}
          onChange={handleChange}
        />
        <button className='add-button' onClick={addtask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task2'>{task}</span>
            <button className='delete' onClick={() => removetask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>

      <div className='but'>

        <h4 > count:{count}</h4>
        <button onClick={()=>setcount(count+1)}>Add1</button><br />
        <button onClick={handledecrease}>Decrease1</button>

        <button onClick={()=>setcount(count+10)}>Add10</button><br />
        <button onClick={()=>setcount(count-10)}>decreaseby10</button><br />
        <button onClick={()=>setcount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Todolist;
