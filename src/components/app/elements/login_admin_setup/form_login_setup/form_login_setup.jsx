import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";

function FormLoginSetup() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container_form_login_setup">
      <p className="title_login_admin">Iniciar sesión </p>
      <Form
        name="login_admin"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="container_inputs_form_login_admin_setup">
          <p className="title_create_mod">Correo electronico</p>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingresa un correo valido!",
              },
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
                message: "Por favor ingresa una contraseña valida!",
              },
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
            <Button
              className="button_login_admin_enter"
              type="primary"
              htmlType="submit"
            >
              Entrar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormLoginSetup);
