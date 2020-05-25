import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const res = await React.$post("/login", values);
        if (res.status === 0) {
          message.success("登录成功");
          React.$setUser(res.data || {});
          this.props.history.replace("/");
        } else {
          message.error(res.msg || "登录失败");
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              autoComplete="off"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(Form.create({})(LoginForm));
