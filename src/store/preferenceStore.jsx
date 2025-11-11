import { create } from "zustand";

export const userPreference = create((set) => ({
  defaultPref: "blog",
  updatePref: (value) => {
    set((state) => ({
      ...state,
      defaultPref: (state.defaultPref = value),
    }));
  },
}));
