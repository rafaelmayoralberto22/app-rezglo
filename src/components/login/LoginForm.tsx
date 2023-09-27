import { Button, Card, Form, Image, Input, Space, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { FieldType } from "../../type";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"error" | "warning" | "">("");
  const navigate = useNavigate();

  const onFinish = async (values: FieldType) => {
    try {
      setLoading(true);
      await api.login(values);
      navigate("/chat");
    } catch (e: any) {
      if (e.hasOwnProperty("message")) {
        message.error(e.message);
      }
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card bordered={false}>
      <Space direction="vertical" align="center">
        <Image
          width={200}
          src="logo.png"
          className="rounded-full mb-4"
          preview={false}
        />

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: "min(400px, calc(100vw - 50px))" }}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input status={status} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password status={status} />
          </Form.Item>

          <Form.Item className="login-items mt-4">
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
};

export default LoginForm;
