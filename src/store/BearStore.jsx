import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBearStore = create(
  persist(
    (set) => ({
      bears: 0,
      isHungry: true,

      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),

      removeAllBears: () => set({ bears: 0 }),

      removeBears: () => set((state) => ({ bears: state.bears - 1 })),
      HungryNow: () =>
        set((state) => ({ isHungry: (state.isHungry = !state.isHungry) })),
    }),

    {
      name: "bear-storage",
      partialize: (state) => ({
        bears: state.bears,
      }),
    }
  )
);
