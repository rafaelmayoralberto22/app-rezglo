import { FolderOpenOutlined } from "@ant-design/icons";
import { Row, Space } from "antd";

const ChatContentEmpty = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Space direction="vertical" align="center">
        <FolderOpenOutlined style={{ fontSize: "2rem" }} />
        <div>NO DATA</div>
      </Space>
    </Row>
  );
};

export default ChatContentEmpty;
