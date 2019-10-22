import {BaseForm} from "./BaseForm";
import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {callApi} from "../functions/callApi";
import {Error} from "./Error";

export function Signup({login}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRedirect, setRedirect] = useState(false);

  const [state, setState] = useState({
    name: "",
    about: "",
    email: "",
    password: ""
  });

  const handleClick = e => {
    e.preventDefault();
    setIsLoading(true);
    callApi("/auth/signup/", {
      method: "post",
      body: JSON.stringify(state)
    })
      .then(({data}) => {
        setError(null);
        setIsLoading(false);
        localStorage.setItem("token", data.token.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setRedirect(true);
        login();
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
      {isRedirect && <Redirect to="/home/" />}
      <BaseForm message="Registrate!" onButtonClick={handleClick}>
        <input
          onChange={handleChange}
          value={state.name}
          name="name"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          value={state.email}
          name="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          value={state.password}
          placeholder="password"
          type="password"
          name="password"
        />
        <textarea
          name="about"
          onChange={handleChange}
          value={state.about}
          placeholder="Acerca de ti"
        />
      </BaseForm>
      {isLoading && (
        <div className="loading">
          <div class="spinner-border " role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && <Error error={error} />}
    </>
  );
}
