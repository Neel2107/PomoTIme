import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
    
        <a className="buttons" href="#">
          PomoTime
        </a>

      <div>
        <a className="right-buttons buttons" href="#">
          Settings
        </a>

        <a className="right-buttons buttons" href="#">
          Login
        </a>
      </div>
    </div>
  );
};
