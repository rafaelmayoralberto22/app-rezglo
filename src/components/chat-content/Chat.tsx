import { Row } from "antd";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <>
      <Row style={{ height: "calc(100% - 70px)" }}>
        <ChatHistory />
      </Row>

      <Row style={{ height: "50px", marginTop: 20, padding: "0 10px" }}>
        <ChatInput />
      </Row>
    </>
  );
};

export default Chat;
