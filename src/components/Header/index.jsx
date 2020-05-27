import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { pathRouteMap } from "@/config/routes.admin.js";
import style from "./index.module.less";
class Header extends Component {
  state = {
    city: "",
    wea: "",
    tem: ""
  };
  getTitle = () => {
    const path = this.props.location.pathname;
    const route = pathRouteMap[path];
    return (route && route.title) || "";
  };

  UNSAFE_componentWillMount() {
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
    const title = this.getTitle();
    return (
      <div className={style.header}>
        <div className={style.top}>{user.username}</div>
        <div className={style.bottom}>
          <span className={style.left}>
            <span className={style.title}>{title}</span>
          </span>
          <span className={style.right}>
            {this.state.city}-{this.state.wea}-{this.state.tem}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
