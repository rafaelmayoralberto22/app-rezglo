import { ApartmentOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, Space } from "antd";
import { useStore } from "../../hooks/useGlobalStore";
import List from "./List";
import SliderChannelsPlus from "./SliderChannelsPlus";

const SliderChannels = () => {
  const { channels, removeChannel } = useStore((store) => ({
    channels: store.channels,
    removeChannel: store.removeChannel,
  }));

  return (
    <Space direction="vertical" className="w-full">
      <Row
        justify="space-between"
        align="middle"
        className="bg-subtitule px-2"
        style={{ height: 30 }}
      >
        <span> Channels</span>
        <SliderChannelsPlus />
      </Row>

      <List
        items={channels}
        type="channel"
        beforeIcon={<ApartmentOutlined className="mr-4" />}
        afterIcon={<DeleteOutlined />}
        onClickAfterIcon={removeChannel}
      />
    </Space>
  );
};

export default SliderChannels;
