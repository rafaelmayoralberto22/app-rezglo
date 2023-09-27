import { Button, Space, Image } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useGlobalStore";

const GenericHeader = () => {
  const { user, changeUser } = useStore((store) => ({
    user: store.user,
    changeUser: store.changeUser,
  }));
  const navigate = useNavigate();

  const logout = () => {
    changeUser(null);
    navigate("/", { replace: true });
  };

  return (
    <Header className="layout-content header">
      <Space align="center">
        <Image
          width={40}
          src={user?.avatar}
          className="rounded-full mb-4 border-gray"
          style={{ marginTop: 15 }}
          preview={false}
        />
        <span>{user?.username}</span>
        <span>|</span>
        <Button
          type="text"
          onClick={logout}
          style={{ padding: 0, color: "#e0e0e0" }}
        >
          Logout
        </Button>
      </Space>
    </Header>
  );
};

export default GenericHeader;
