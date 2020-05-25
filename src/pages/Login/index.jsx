import React, { Component } from "react";
import style from "./index.module.less";
import Logo from "@/components/Logo";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default class Login extends Component {
  render() {
    if (React.$getUser()) {
      return <Redirect to="/" />;
    }
    return (
      <div className={style.login}>
        <div className={style.logoBox}>
          <Logo size={180} className={style.logo} />
        </div>
        <div className={style.loginContent}>
          <div className={style.title}>氵氵氵</div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
