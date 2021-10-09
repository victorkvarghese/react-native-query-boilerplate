import { StateCreator } from 'zustand';

export interface ILoginSlice {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const createLoginSlice: StateCreator<ILoginSlice> = set => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn): void => {
    set({ isLoggedIn });
  },
});
