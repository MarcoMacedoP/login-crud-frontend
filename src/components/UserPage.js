import React, {useEffect, useState} from "react";
import {callApi} from "../functions/callApi";
import {Error} from "./Error";
import {Redirect} from "react-router-dom";

export function UserPage({match}) {
  const {userId} = match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  const [state, setState] = useState({
    name: user.name,
    about: user.about,
    email: user.email
  });

  useEffect(() => {
    callApi(`/users/${userId}`)
      .then(({data}) => {
        setIsLoading(false);
        setError(null);
        setUser(data);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  });

  const handleChange = event =>
    setState({
      ...state,
      [event.target.name]: event.target.value
    });

  const handleUpdate = () => {
    callApi(`/users/${userId}`, {method: "PUT", body: state})
      .then(({data}) => {
        setIsLoading(false);
        setError(null);
        setUser(data);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };
  const handleDelete = () => {
    callApi(`/users/${userId}`, {method: "DELETE"})
      .then(() => setIsDeleted(true))
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>{user.name}</h1>
      {isDeleted && <Redirect to="/home/" />}
      {error && <Error error={error} />}
      {isLoading && (
        <div className="loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <input value={state.name} name="name" onChange={handleChange} />
      <input
        value={state.email}
        name="email"
        onChange={handleChange}
      />
      <input
        name="about"
        value={state.about}
        onChange={handleChange}
      />
      <div>
        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
        <button className="btn btn-success" onClick={handleUpdate}>
          Actualizar
        </button>
      </div>
    </div>
  );
}
