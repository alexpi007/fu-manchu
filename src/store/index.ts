import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// State type
export interface AppState {
  count: number;
  increment: () => void;
  reset: () => void;
}

// Store creation
export const useStore = create(
  persist<AppState>(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'count',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
