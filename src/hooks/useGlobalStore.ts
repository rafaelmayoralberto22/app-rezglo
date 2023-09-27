import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GlobalState, User } from "../type";

export const useStore = create<GlobalState>()(
  persist(
    (set) => ({
      user: null,
      changeUser: (user: User | null) => set(() => ({ user })),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
