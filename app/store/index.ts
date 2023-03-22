import AsyncStorage from '@react-native-community/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createLoginSlice, ILoginSlice } from './createLoginSlice';
import { createThemeSlice, IThemeSlice } from './createThemeSlice';

interface IStore extends ILoginSlice, IThemeSlice {}

/**
 * Make sure to enforce type for each slice
 */

export const useStore = create<IStore>()(
  persist(
    (set, get, api) => ({
      ...createLoginSlice(set, get, api),
      ...createThemeSlice(set, get, api),
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
