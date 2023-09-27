import { Row } from "antd";
import SliderChannels from "./SliderChannels";
import SliderUsers from "./SliderUsers";

const Slider = () => {
  return (
    <div className="content">
      <Row style={{ height: "50%" }}>
        <SliderChannels />
      </Row>
      <Row style={{ height: "50%" }}>
        <SliderUsers />
      </Row>
    </div>
  );
};

export default Slider;
