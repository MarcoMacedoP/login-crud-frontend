import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//components
import {Landing} from "./components/Landing";
import {Layout} from "./components/Layout";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
