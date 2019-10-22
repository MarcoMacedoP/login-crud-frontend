import React, {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//components
import {Landing} from "./components/Landing";
import {Layout} from "./components/Layout";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {UsersList} from "./components/UsersList";

function App() {
  const token = localStorage.getItem("token");
  const [userIsLoged, setUserIsLoged] = useState(false);

  useEffect(() => {
    if (token && !userIsLoged) {
      setUserIsLoged(true);
    }
  }, [token, userIsLoged]);

  return (
    <BrowserRouter>
      <Layout userIsLoged={userIsLoged}>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/home/" component={UsersList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
