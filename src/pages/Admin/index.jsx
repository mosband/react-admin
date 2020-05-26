import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import NavMenu from "@/components/NavMenu";
import { routes, defaultRoute } from "@/config/routes.admin.js";
const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    const user = React.$getUser();
    if (!user) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <NavMenu />
        </Sider>
        <Layout>
          <Header style={{ color: "#fff" }}>Hello {user.username}</Header>
          <Content style={{ backgroundColor: "#fff" }}>
            <Switch>
              {routes.map(route => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                ></Route>
              ))}
              <Redirect to={defaultRoute.path} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#ccc" }}>
            建议使用谷歌浏览器
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
