import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/config/routes.admin.js";
import style from "./index.module.less";
export default class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.box}>
          {routes.map((route, index) => (
            <Link to={route.path} key={route.path}>
              <div
                style={{
                  animationDelay: index + "s",
                  animationDuration: routes.length + "s"
                }}
              >
                <span>{route.title}</span>
                <span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
