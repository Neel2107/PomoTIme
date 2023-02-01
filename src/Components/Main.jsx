import { StrictMode, useEffect, useReducer } from "react";
import React, { useState } from "react";







export const Main = () => {


  
  /////////////////////////////////////////////////////////////
  const [minutes, setMinutes] = useState(25);
  const [defaultMinutes, setDefaultMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };


  const resetTimer = () => {
    setMinutes(defaultMinutes);
    setSeconds(0);
    setIsActive(false)
  };

  const shortBreak = () => {
    setMinutes(5);
    setSeconds(0);
    setDefaultMinutes(5)
  };

  const longBreak =() =>{
    setMinutes(15)
    setSeconds(0)
    setDefaultMinutes(15)
  }

  const pomodoro = () =>{
    setMinutes(25)
    setSeconds(0)
    setDefaultMinutes(25)
  }
///////////////////////////////////////////////////////////////////  
  return (
    <div className="main">
      <div className="main-header">
        <div>
          <a onClick={pomodoro} className="main-tags" href="#">
            Pomodoro
          </a>
        </div>
        <div>
          <a onClick={shortBreak} className="main-tags" href="#">
            
            Short Break
          </a>
        </div>
        <div>
          <a onClick={longBreak} className="main-tags" href="#">
            Long Break
          </a>
        </div>
      </div>
      <div className="timer">
        <p>{minutes < 10 ? `0${minutes}`: minutes}:{seconds< 10 ? `0${seconds}` : seconds } </p>
      </div>

      <div className="both-buttons">
        <div className="start">
          <button onClick={startTimer} className="start-button ">
            <span>START</span>
          </button>
        </div>
        <div className="start">
          <button onClick={resetTimer} className="reset-button">
            <span>RESET</span>
          </button>
        </div>
      </div>
    </div>
  );
};
