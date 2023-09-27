import { SelectedMessage, User } from "../type";

export const proccessTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const addMensageToChannelOrUser = (
  text: string,
  items: any[],
  user: User,
  selected: SelectedMessage
) =>
  items.map((item) => {
    if (item.id === selected?.id) {
      const history = item.history;
      const lastId = history[history.length - 1]?.id ?? 0;

      return {
        ...item,
        history: [
          ...item.history,
          {
            id: lastId + 1,
            avatar: user.avatar,
            username: user.username,
            message: text,
            timestamp: new Date().getTime(),
          },
        ],
      };
    }

    return item;
  });
