import React from "react";
import { useState } from "react";



export const Todo = () => {
  
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  // const [items, setitems] = useState(getLocalData())
  const handleTaskInput = (event) => {
    
    setTaskInput(event.target.value); 
  };

  const addTask = () => {
    if(taskInput.length === 0){

      alert("Enter Task!!")
      
    }else{
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }

    
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const editTask = (index, updatedTask,event) => {
    // if(event.target.value.length === 0){
    //   alert
    // }else{

    if(updatedTask.length  != 0 )
      setTasks(
        tasks.map((task, i) => {
          if (i === index) {
            return updatedTask;
          }
          return task;
        })
      );
      else{
        alert("Enter some input!!")
      }
    // }
    
  };




  return (
    <div className="todo">
      <div className="todo-title">
        <p className="todo-title">Focus Time!</p>
      </div >
      <div className="for-task-bg">
      <div className="tasks">
        <span className="for-center-input">
          <input 
            type="text"
            placeholder="Write Your Task Here!!"
            value={taskInput}
            onChange={handleTaskInput}
            className="todo-input"
          />
        </span>
        <span >
          <button onClick={addTask} className="add-btn">
            Add Task
          </button>
        </span>
       
      </div>

      <ul >
        <div className="task-list">
        {tasks.map((task, index) => (
          <li className="for-center" key={index}>
           <p className="list-width" > {task} </p>
            <div  className="list-btn">
            <button className="list-edit list-btns" onClick={(event) => editTask(index, prompt("Edit task"),event)}>
              Edit
            </button>
            <button className="list-delete list-btns" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
        </div>
        </ul>
        </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a4c54"
          fill-opacity="1"
          d="M0,96L40,133.3C80,171,160,245,240,250.7C320,256,400,192,480,144C560,96,640,64,720,90.7C800,117,880,203,960,208C1040,213,1120,139,1200,96C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};







