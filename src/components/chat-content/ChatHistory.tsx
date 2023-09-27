import { Row } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useStore } from "../../hooks/useGlobalStore";

import "react-perfect-scrollbar/dist/css/styles.css";
import ChatContentEmpty from "./ChatContentEmpty";
import ChatHistoryItem from "./ChatHistoryItem";

const ChatHistory = () => {
  const { user, selected, channels, channelsUsers } = useStore((store) => ({
    user: store.user,
    selected: store.selected,
    channels: store.channels,
    channelsUsers: store.channelsUsers,
  }));

  const items = selected?.type === "channel" ? channels : channelsUsers;
  const history = items.find(({ id }) => id === selected?.id)?.history ?? [];

  if (!history.length) {
    return <ChatContentEmpty />;
  }

  return (
    <PerfectScrollbar options={{ suppressScrollX: true }} className="p-4">
      <ul>
        {history.map((props) => (
          <li
            key={`messages-${props.id}-${props.timestamp}`}
            {...(user?.username === props.username
              ? {
                  style: {
                    float: "right",
                  },
                }
              : {})}
          >
            <Row align="middle" className="mb-4">
              <ChatHistoryItem
                {...props}
                isCurrentUser={user?.username === props.username}
              />
            </Row>
          </li>
        ))}
      </ul>
    </PerfectScrollbar>
  );
};

export default ChatHistory;
