import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { addMensageToChannelOrUser } from "../helpers";
import {
  Channel,
  ChannelUser,
  GlobalState,
  SelectedMessage,
  User,
} from "../type";

export const useStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      loadingData: false,
      user: null,
      channels: [],
      channelsUsers: [],
      selected: null,
      changeUser: (user: User | null) => set(() => ({ user })),
      setLoadingData: (loadingData: boolean) => set(() => ({ loadingData })),
      setChannels: (channels: Channel[]) => set(() => ({ channels })),
      setChannelsUsers: (channelsUsers: ChannelUser[]) =>
        set(() => ({ channelsUsers })),
      setChannelsAndUsers: (
        channels: Channel[],
        channelsUsers: ChannelUser[]
      ) => set(() => ({ channels, channelsUsers })),
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
      name: "rezglo-state",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
