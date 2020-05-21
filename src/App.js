import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    );
  }
}
