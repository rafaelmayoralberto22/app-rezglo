import { Divider, Input, InputRef, Modal, Row, message } from "antd";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useStore } from "../../hooks/useGlobalStore";
import SliderChannelPlusUsersSelector from "./SliderChannelPlusUsersSelector";

type Props = {
  open: boolean;
  setOpen: (loading: boolean) => void;
};
const SliderChannelsPlusModal: FC<Props> = ({ open, setOpen }) => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const [status, setStatus] = useState<"error" | "warning" | "">("");
  const refInput = useRef<InputRef>(null);

  const { channels, addChannel } = useStore((store) => ({
    channels: store.channels,
    addChannel: store.addChannel,
  }));

  useEffect(() => {
    open && refInput.current?.focus();
  }, [open]);

  const handleCancel = () => {
    setText("");
    setOpen(false);
  };

  const handleOk = () => {
    if (text) {
      onAddChannelAction(text);
    } else {
      setStatus("error");
      message.error("Enter a name for the channel");
    }
  };

  const handleChange = (newTargetKeys: string[]) => {
    setUsers(newTargetKeys);
  };

  const onAddChannelAction = (text: string) => {
    const hasChannel = channels.filter(({ name }) => name === text).length;

    if (hasChannel) {
      setStatus("error");
      message.error("Channel alredy exist");
      return;
    }

    setStatus("");
    setOpen(false);

    const lastId = channels?.[channels.length - 1]?.id ?? 0;
    addChannel({
      users,
      id: lastId + 1,
      name: text,
      history: [],
    });

    setText("");
    setUsers([]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Modal
      title="Add Channel"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Row
        align="middle"
        justify="start"
        style={{ padding: "14px 28px 0 28px" }}
      >
        <Input
          placeholder="Channel name"
          ref={refInput}
          value={text}
          onChange={onChange}
          status={status}
        />
      </Row>

      <Row align="middle" justify="center" className="mb-8">
        <Divider orientation="left">Users</Divider>
        <SliderChannelPlusUsersSelector {...{ handleChange, users }} />
      </Row>
    </Modal>
  );
};

export default SliderChannelsPlusModal;
