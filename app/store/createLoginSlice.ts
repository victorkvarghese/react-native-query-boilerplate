import { StateCreator } from 'zustand';

export interface ILoginSlice {
  isLoggedIn: boolean;
  userId: number;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const createLoginSlice: StateCreator<ILoginSlice> = set => ({
  isLoggedIn: false,
  userId: 10,
  setIsLoggedIn: (isLoggedIn): void => {
    set({ isLoggedIn });
  },
});
