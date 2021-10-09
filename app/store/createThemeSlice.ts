import { StateCreator } from 'zustand';

export interface IThemeSlice {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const createThemeSlice: StateCreator<IThemeSlice> = set => ({
  isDarkMode: false,
  toggleTheme: (): void => {
    set(state => ({ isDarkMode: !state.isDarkMode }));
  },
});
