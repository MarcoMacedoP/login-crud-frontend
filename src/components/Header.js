import React from "react";
import {Link} from "react-router-dom";
export const Header = () => (
  <header>
    <h2>LOGIN-CRUD</h2>
    <nav>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Registrarse</Link>
      </li>
    </nav>
  </header>
);
