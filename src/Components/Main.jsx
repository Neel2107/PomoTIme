import React from "react";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-header">
        <div>
          <a className="main-tags" href="#">Pomodoro</a>
        </div>
        <div>
          <a className="main-tags" href="#">Short Break</a>
        </div>
        <div>
          <a className="main-tags" href="#">Long Break</a>
        </div>
       
      </div>
      <div className="timer">
           <p>25:00</p>
        </div>

<div className="both-buttons">
        <div className="start">
            <button className="start-button " >
<span >START</span>
            </button>
        </div>
        <div className="start">
            <button className="reset-button" >
              <span >RESET</span>
            </button>
        </div>
        </div>
    </div>
  );
};
