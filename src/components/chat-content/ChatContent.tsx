import { useStore } from "../../hooks/useGlobalStore";
import Chat from "./Chat";
import ChatContentEmpty from "./ChatContentEmpty";

const ChatContent = () => {
  const selected = useStore((store) => store.selected);

  if (!selected) {
    return <ChatContentEmpty />;
  }

  return <Chat />;
};

export default ChatContent;
