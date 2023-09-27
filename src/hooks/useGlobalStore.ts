import { create } from "zustand";
import { GlobalState, User } from "../type";

export const useStore = create<GlobalState>((set) => ({
  user: null,
  changeUser: (user: User | null) => set(() => ({ user })),
}));
