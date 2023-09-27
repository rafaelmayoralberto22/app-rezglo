import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../hooks/useGlobalStore";

const ChatInput = () => {
  const [text, setText] = useState("");
  const addMessage = useStore((store) => store.addMessage);

  const onAddMessage = () => {
    if (text) {
      addMessage(text);
      setText("");
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Input
      style={{
        width: "100%",
      }}
      value={text}
      onChange={onChange}
      addonAfter={
        <SendOutlined
          style={{ fontSize: "1.4rem", color: "#e0e0e0", cursor: "pointer" }}
          onClick={onAddMessage}
        />
      }
      placeholder="Message"
      size="large"
    />
  );
};

export default ChatInput;
