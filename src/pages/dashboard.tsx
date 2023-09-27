import ChatContent from "../components/chat-content/ChatContent";
import GenericLayout from "../components/layout/GenericLayout";
import Slider from "../components/slider/Slider";

const Dashboard = () => {
  return <GenericLayout sider={<Slider />} content={<ChatContent />} />;
};

export default Dashboard;
