import React from "react";
import {Link} from "react-router-dom";
export const Header = ({userIsLoged, user}) => (
  <header>
    <h2>
      {userIsLoged ? (
        <Link to="/">LOGIN CRUD</Link>
      ) : (
        <Link to="/home/"> LOGIN CRUD</Link>
      )}
    </h2>
    <nav>
      {userIsLoged ? (
        <Link to={`/user/${user._id}`}> Mi perfil</Link>
      ) : (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Registrarse</Link>
          </li>
        </ul>
      )}
    </nav>
  </header>
);
