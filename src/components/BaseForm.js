import React from "react";

export const BaseForm = ({message, children}) => (
  <div>
    <h2>{message}</h2>
    <form>{children}</form>
  </div>
);
