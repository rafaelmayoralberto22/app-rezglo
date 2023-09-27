import { UserOutlined } from "@ant-design/icons";
import { Row, Space } from "antd";
import { useStore } from "../../hooks/useGlobalStore";
import List from "./List";

const SliderUsers = () => {
  const channels = useStore((store) => store.channelsUsers);

  return (
    <Space direction="vertical" className="w-full">
      <Row
        justify="space-between"
        align="middle"
        className="bg-subtitule px-2"
        style={{ height: 30 }}
      >
        <span> Users</span>
      </Row>

      <List
        items={channels}
        type="user"
        beforeIcon={<UserOutlined className="mr-4" />}
      />
    </Space>
  );
};

export default SliderUsers;
