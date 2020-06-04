import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import Logo from "../Logo";
import style from "./index.module.less";
import { menuRoutes } from "@/config/routes.admin.js";
const { SubMenu } = Menu;

class NavMenu extends Component {
  getMenuNode = route => {
    if (route.children) {
      const childNodes = route.children.map(child => {
        return this.getMenuNode(child);
      });
      return (
        <SubMenu
          key={route.path}
          title={
            <span>
              {route.icon ? <Icon type={route.icon} /> : ""}
              <span>{route.title}</span>
            </span>
          }
        >
          {childNodes}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={route.path}>
          <Link to={route.path}>
            {route.icon ? <Icon type={route.icon} /> : ""}
            <span>{route.title}</span>
          </Link>
        </Menu.Item>
      );
    }
  };

  getOpenKeys = () => {
    let found = false;
    const dfs = route => {
      if (route.children && !found) {
        route.children.forEach(child => {
          if (this.props.location.pathname === child.path) {
            this.openKeys = this.openKeys
              ? [...new Set([...this.openKeys, route.path])]
              : [route.path];
            found = true;
          } else {
            dfs(child);
          }
        });
      }
    };
    for (const route of menuRoutes) {
      if (!found) {
        dfs(route);
      } else {
        break;
      }
    }
  };

  onOpenChange = openKeys => {
    this.notGetOpenKeys = true;
    this.openKeys = openKeys;
    this.forceUpdate();
  };

  UNSAFE_componentWillMount() {
    this.menuNodes = menuRoutes.map(route => this.getMenuNode(route));
  }

  render() {
    if (this.notGetOpenKeys) {
      this.notGetOpenKeys = false;
    } else {
      this.getOpenKeys();
    }
    return (
      <div className={style.navMenu} style={{ color: "#fff" }}>
        <Link to="/">
          <div className={style.header}>
            <Logo className={style.logo} />
            <span>氵氵氵</span>
          </div>
        </Link>
        <div className={style.menuBox}>
          <Menu
            selectedKeys={[this.props.location.pathname]}
            openKeys={this.openKeys}
            onOpenChange={this.onOpenChange}
            mode="inline"
            theme="dark"
          >
            {this.menuNodes}
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(NavMenu);
