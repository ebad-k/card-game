import React from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="start-button" onClick={onClick}>Start Game</button>
  );
};

export default Button;
