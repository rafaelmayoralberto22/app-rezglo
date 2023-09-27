import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mockChannels } from "../data/channels";
import { mocksUsers } from "../data/users";
import { addMensageToChannelOrUser } from "../helpers";
import { Channel, GlobalState, SelectedMessage, User } from "../type";

export const useStore = create<GlobalState>()(
  persist(
    (set, get) => ({
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
      addMessage: (text: string) => {
        const { selected, channels, channelsUsers, user } = get();
        if (selected) {
          const isChannel = selected?.type === "channel";

          if (isChannel) {
            const newChannels = addMensageToChannelOrUser(
              text,
              channels,
              user!,
              selected
            );
            set({ channels: newChannels });
            return;
          }
          const newChannelsUsers = addMensageToChannelOrUser(
            text,
            channelsUsers,
            user!,
            selected
          );
          set({ channelsUsers: newChannelsUsers });
        }
      },
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
