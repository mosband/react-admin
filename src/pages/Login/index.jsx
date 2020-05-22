import React, { Component } from "react";
import style from "./index.module.less";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    return (
      <div className={style.login}>
        <div className={style.loginHeader}>
          <span className={style.logo}></span>
          <span className={style.title}>标题</span>
        </div>
        <div className={style.loginContent}>
          <div className={style.title}>登录</div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
