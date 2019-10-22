import React from "react";
import "../styles/BaseForm.css";
import {Button} from "./Button";
export const BaseForm = ({message, children, onButtonClick}) => (
  <div className="BaseForm">
    <h2>{message}</h2>
    <form>{children}</form>
    <Button onClick={onButtonClick} message={message} />
  </div>
);
