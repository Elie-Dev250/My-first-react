import React, { useState, useEffect } from 'react';

const Todolist = () => {
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
    </>
  );
};

export default Todolist;
