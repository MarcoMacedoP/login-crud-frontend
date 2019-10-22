import React, {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//components
import {Landing} from "./components/Landing";
import {Layout} from "./components/Layout";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {UsersList} from "./components/UsersList";
import {UserPage} from "./components/UserPage";

function App() {
  const token = localStorage.getItem("token");
  const [userIsLoged, setUserIsLoged] = useState(false);

  useEffect(() => {
    console.log(token);
    if (token && !userIsLoged) {
      setUserIsLoged(true);
    }
    if (!token) {
      setUserIsLoged(false);
    }
  }, [token, userIsLoged]);

  return (
    <BrowserRouter>
      <Layout userIsLoged={userIsLoged}>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route
            exact
            path="/login"
            component={() => (
              <Login login={() => setUserIsLoged(true)} />
            )}
          ></Route>
          <Route
            exact
            path="/signup"
            component={() => (
              <Signup login={() => setUserIsLoged(true)} />
            )}
          ></Route>
          <Route exact path="/home/" component={UsersList} />
          <Route exact path="/user/:userId" component={UserPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
