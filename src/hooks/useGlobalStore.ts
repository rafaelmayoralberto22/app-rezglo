import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Channel, GlobalState, User } from "../type";
import { mockChannels } from "../data/channels";
import { mocksUsers } from "../data/users";

export const useStore = create<GlobalState>()(
  persist(
    (set) => ({
      user: null,
      channels: mockChannels,
      channelsUsers: mocksUsers,
      changeUser: (user: User | null) => set(() => ({ user })),
      addChannel: (channel: Channel) =>
        set(({ channels }) => ({ channels: [...channels, channel] })),
      removeChannel: (inte: number) =>
        set(({ channels }) => ({
          channels: [...channels.filter(({ id }) => id !== inte)],
        })),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
