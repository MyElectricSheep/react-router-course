import React from "react";
import Cms from "./Cms";
import { Switch, Route } from "react-router-dom";
import Login from "./Login"

const App = () => {
  return (
    <div className="app-routes">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Cms} />
      </Switch>
    </div>
  );
};

export default App;
