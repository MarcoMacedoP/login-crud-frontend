import React from "react";
import {Link} from "react-router-dom";
import "../styles/Header.css";
export const Header = ({userIsLoged, user}) => (
  <header className="Header">
    <h2>
      {userIsLoged ? (
        <Link to="/home/"> LOGIN CRUD</Link>
      ) : (
        <Link to="/">LOGIN CRUD</Link>
      )}
    </h2>
    <nav>
      {userIsLoged ? (
        <>
          <Link to={`/user/${user._id}`}>Mi perfil</Link>
        </>
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
