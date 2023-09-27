import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ChangeEvent, KeyboardEvent, useState } from "react";
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

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddMessage();
    }
  };

  return (
    <Input
      style={{
        width: "100%",
      }}
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
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
