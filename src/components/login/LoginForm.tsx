import { Button, Card, Form, Image, Input, Space, message } from "antd";
import { useState } from "react";
import { useStore } from "../../hooks/useGlobalStore";
import { api } from "../../services/api";
import { FieldType } from "../../type";
import { Splash } from "../splash/Splash";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"error" | "warning" | "">("");
  const { loadingData, changeUser, setLoadingData } = useStore((store) => ({
    loadingData: store.loadingData,
    changeUser: store.changeUser,
    setLoadingData: store.setLoadingData,
  }));

  const onFinish = async (values: FieldType) => {
    try {
      setLoading(true);
      const user = await api.login(values);
      changeUser(user);
      setLoadingData(true);
    } catch (e: any) {
      if (e.hasOwnProperty("message")) {
        message.error(e.message);
      }
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) return <Splash />;

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

          <Form.Item className="login-items">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ background: "#242424", height: 50, marginTop: 10 }}
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
};

export default LoginForm;
