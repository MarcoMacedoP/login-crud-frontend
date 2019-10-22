import React from "react";
import {BaseForm} from "./BaseForm";

export function Signup() {
  return (
    <BaseForm message="Registrate!">
      <input placeholder="name" />
      <input placeholder="email" />
      <textarea placeholder="Acerca de ti" />
      <input placeholder="password" />
    </BaseForm>
  );
}
