import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";

function FormLoginSetup({}) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container_form_login_setup">
      <br />
      <Form
        name="login_admin"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="container_inputs_form_login_admin_setup">
          <p className="title_create_mod">Usuario</p>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <p className="title_create_mod">Contraseña</p>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Recuerdame</Checkbox>
        </Form.Item>
        <div className="div_button_login_admin_setup">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
const mapStateToProps = state => ({
  id_category: state.id_category,
  create_category: state.create_category,
  id_create_category: state.id_create_category
});

const mapDispatchToProps = dispatch => ({
  showDish(d) {
    dispatch({
      type: "SHOW_DISH",
      showMenu: false,
      id_food: d.id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLoginSetup);
