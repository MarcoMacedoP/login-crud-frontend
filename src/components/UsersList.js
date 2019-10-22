import React, {useState, useEffect} from "react";
import {callApi} from "../functions/callApi";
import {User} from "./User";
import {Error} from "./Error";
export function UsersList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    callApi("/users/")
      .then(({data}) => {
        setIsLoading(false);
        setError(null);
        setUsers(data);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      {error && <Error error={error} />}
      {isLoading && (
        <div className="loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {users.length > 0 &&
        users.map(user => (
          <User key={user._id} name={user.name} about={user.name} />
        ))}
    </div>
  );
}
