import React, { Component } from "react";
import style from "./index.module.less";
export default class Header extends Component {
  state = {
    city: "",
    wea: "",
    tem: ""
  };
  componentWillMount() {
    React.$jsonp(
      "https://www.tianqiapi.com/free/day?appid=23035354&appsecret=8YvlPNrz"
    ).then(res => {
      this.setState({
        city: res.city,
        wea: res.wea,
        tem: res.tem
      });
    });
  }
  render() {
    const user = React.$getUser();
    return (
      <div className={style.header}>
        <div className={style.top}>{user.username}</div>
        <div className={style.bottom}>
          <span className={style.left}>标题</span>
          <span className={style.right}>
            {this.state.city}-{this.state.wea}-{this.state.tem}
          </span>
        </div>
      </div>
    );
  }
}
