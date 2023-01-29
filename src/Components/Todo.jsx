import React from "react";

export const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-title">
        <p className="todo-title" >Focus Time!</p>
      </div>
      <div className="tasks">
        <span>
          <input type="text" placeholder="Write Your Task Here!!"  className="todo-input"/>
        </span>
        <span className="add-btn">
          <button className="add-btn">Add Task</button>
        </span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4a4c54" fill-opacity="1" d="M0,96L40,133.3C80,171,160,245,240,250.7C320,256,400,192,480,144C560,96,640,64,720,90.7C800,117,880,203,960,208C1040,213,1120,139,1200,96C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
  );
};
