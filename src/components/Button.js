import React from "react";
import {Button as BaseButton} from "react-bulma-components";
import "../styles/Button.css";

export const Button = ({message, onClick}) => (
  <BaseButton color="primary" onClick={onClick}>
    {message || "OK"}
  </BaseButton>
);
