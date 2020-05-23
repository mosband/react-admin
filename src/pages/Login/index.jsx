import React, { Component } from "react";
import style from "./index.module.less";
import Logo from "@/components/Logo";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div className={style.login}>
        <div className={style.logoBox}>
          <Logo size={180} className={style.logo} />
        </div>
        <div className={style.loginContent}>
          <div className={style.title}>注水模板</div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
