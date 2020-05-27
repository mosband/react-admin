import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { pathRouteMap } from "@/config/routes.admin.js";
import { Button, Modal } from "antd";
import moment from "moment";
import style from "./index.module.less";
class Header extends Component {
  state = {
    city: "",
    wea: "",
    tem: "",
    time: ""
  };
  getTitle = () => {
    const path = this.props.location.pathname;
    const route = pathRouteMap[path];
    return (route && route.title) || "";
  };

  logout = () => {
    Modal.confirm({
      content: "确定要退出吗？",
      onOk: () => {
        React.$removeUser();
        this.props.history.replace("/login");
      }
    });
  };

  getWeather = () => {
    React.$jsonp(
      "https://www.tianqiapi.com/free/day?appid=23035354&appsecret=8YvlPNrz"
    ).then(res => {
      this.setState({
        city: res.city,
        wea: res.wea,
        tem: res.tem
      });
    });
  };

  getTime = () => {
    this.timeInterval = setInterval(() => {
      this.setState({
        time: moment().format("MMMM Do YYYY, h:mm:ss a")
      });
    }, 1000);
  };

  componentDidMount() {
    this.getWeather();
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
  render() {
    const user = React.$getUser();
    const title = this.getTitle();
    return (
      <div className={style.header}>
        <div className={style.top}>
          <span className={style.left}>{this.state.time}</span>
          <span className={style.right}>
            <span>{user.username}</span>
            <Button type="primary" onClick={this.logout}>
              退出
            </Button>
          </span>
        </div>
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
