import React from "react";
import "../styles/Button.css";

export const Button = ({message, onClick}) => (
  <button className="btn btn-primary" onClick={onClick}>
    {message || "OK"}
  </button>
);
