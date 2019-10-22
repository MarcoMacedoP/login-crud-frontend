import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {BaseForm} from "./BaseForm";
import {callApi} from "../functions/callApi";
import {Error} from "./Error";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRedirect, setRedirect] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleClick = e => {
    e.preventDefault();
    setIsLoading(true);
    callApi("/auth/login/", {
      method: "post",
      body: JSON.stringify(state)
    })
      .then(({data}) => {
        setError(null);
        setIsLoading(false);
        localStorage.setItem("token", data.token.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setRedirect(true);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  };

  const handleChange = event =>
    setState({
      ...state,
      [event.target.name]: event.target.value
    });

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {isRedirect && <Redirect to="/home/" />}
      <BaseForm message="Inicia sesión" onButtonClick={handleClick}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
      </BaseForm>
      {error && <Error error={error} />}
    </>
  );
}
