import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SliderChannels from "./SliderChannels";
import SliderUsers from "./SliderUsers";

const Slider = () => {
  return (
    <PerfectScrollbar>
      <SliderChannels />
      <SliderUsers />
    </PerfectScrollbar>
  );
};

export default Slider;
