import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Admin extends Component {
  render() {
    const user = React.$getUser();
    if (!user) {
      return <Redirect to="/login" />;
    }
    return <div>Hello {user.username}</div>;
  }
}
