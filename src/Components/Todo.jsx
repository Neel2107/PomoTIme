import React from "react";
import { useState } from "react";

// Todo component to create a to-do list
export const Todo = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the value of the task input field
  const [taskInput, setTaskInput] = useState("");

  // Function to handle changes in the task input field
  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to add a task to the list
  const addTask = () => {
    // Check if the task input is empty
    if (taskInput.length === 0) {
      // Show an alert if the task input is empty
      alert("Enter Task!!");
    } else {
      // Add the task to the list
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Function to delete a task from the list
  const deleteTask = (index) => {
    // Filter the tasks to exclude the task to be deleted
    setTasks(tasks.filter((task, i) => i !== index));
  };

  // Function to edit a task in the list
  const editTask = (index, updatedTask, event) => {
    // Check if the updated task input is not empty
    if (updatedTask.length != 0)
      // Map through the tasks list and replace the task to be edited
      setTasks(
        tasks.map((task, i) => {
          if (i === index) {
            return updatedTask;
          }
          return task;
        })
      );
    else {
      // Show an alert if the updated task input is empty
      alert("Enter some input!!");
    }
  };

  return (
    <div className="todo">
      <div className="todo-title">
        <p className="todo-title">Focus Time!</p>
      </div>
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
          <span>
            <button onClick={addTask} className="add-btn">
              Add Task
            </button>
          </span>
        </div>

        <ul>
          <div className="task-list">
            {tasks.map((task, index) => (
              <li className="for-center" key={index}>
                <p className="list-width">{task}</p>
                <div className="list-btn">
                  <button
                    className="list-edit list-btns"
                    onClick={(event) =>
                      editTask(index, prompt("Edit task"), event)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="list-delete list-btns"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <svg className="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a4c54"
          fill-opacity="1"
          d="M0,96L40,133.3C80,171,160,245,240,250.7C320,256,400,192,480,144C560,96,640,64,720,90.7C800,117,880,203,960,208C1040,213,1120,139,1200,96C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
