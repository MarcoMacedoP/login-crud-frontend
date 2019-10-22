import React from "react";
import {BaseForm} from "./BaseForm";

export function Login() {
  return (
    <BaseForm message="Inicia sesión">
      <input placeholder="email" />
      <input placeholder="password" />
    </BaseForm>
  );
}
