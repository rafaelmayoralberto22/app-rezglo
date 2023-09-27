export type FieldType = {
  username?: string;
  password?: string;
};

export type User = Pick<FieldType, "username">;

export type Message = {
  id: number;
  avatar: string;
  username: string;
  timestamp: string;
  message: string;
};

export type Channel = {
  id: number;
  name: string;
  history: Message[];
};

export type ChannelUser = {
  username: string;
  name: string;
  history: Message[];
};

export type GlobalState = {
  user: User | null;
  channels: Channel[];
  channelsUsers: ChannelUser[];
  changeUser: (user: User | null) => void;
  addChannel: (channel: Channel) => void;
  removeChannel: (id: number) => void;
};
