import { PlusSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import SliderChannelsPlusModal from "./SliderChannelsPlusModal";

const SliderChannelsPlus = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(true);

  return (
    <>
      <PlusSquareOutlined onClick={onClick} />

      <SliderChannelsPlusModal {...{ open, setOpen }} />
    </>
  );
};

export default SliderChannelsPlus;
