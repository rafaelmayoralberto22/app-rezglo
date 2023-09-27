import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mockChannels } from "../data/channels";
import { mocksUsers } from "../data/users";
import { Channel, GlobalState, SelectedMessage, User } from "../type";

export const useStore = create<GlobalState>()(
  persist(
    (set) => ({
      user: null,
      channels: mockChannels,
      channelsUsers: mocksUsers,
      selected: null,
      changeUser: (user: User | null) => set(() => ({ user })),
      addChannel: (channel: Channel) =>
        set(({ channels }) => ({ channels: [...channels, channel] })),
      removeChannel: (inte: number) =>
        set(({ channels }) => ({
          channels: [...channels.filter(({ id }) => id !== inte)],
        })),
      onSelected: (selected: SelectedMessage) => set(() => ({ selected })),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
