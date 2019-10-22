import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {BaseForm} from "./BaseForm";
import {callApi} from "../functions/callApi";
import {Error} from "./Error";

export function Login({login}) {
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
        login(true);
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
      {isRedirect && <Redirect to="/home/" />}
      {isLoading && (
        <div className="loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
