import { PlusSquareOutlined } from "@ant-design/icons";
import { Input, InputRef, Popover, message } from "antd";
import { KeyboardEvent, useRef, useState } from "react";
import { useStore } from "../../hooks/useGlobalStore";

const SliderChannelsPlus = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"error" | "warning" | "">("");
  const refInput = useRef<InputRef>(null);

  const { channels, addChannel } = useStore((store) => ({
    channels: store.channels,
    addChannel: store.addChannel,
  }));

  const onClick = () => {
    refInput.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const text = (e.target as HTMLInputElement).value;
      if (text) {
        onAddChannelAction(text);
      } else {
        setStatus("error");
        message.error("Enter a name for the channel");
      }
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
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
      id: lastId + 1,
      name: text,
      history: [],
    });
  };

  return (
    <Popover
      open={open}
      placement="bottomRight"
      trigger="click"
      content={<Input ref={refInput} onKeyDown={onKeyDown} status={status} />}
      destroyTooltipOnHide
      onOpenChange={handleOpenChange}
    >
      <PlusSquareOutlined onClick={onClick} />
    </Popover>
  );
};

export default SliderChannelsPlus;
