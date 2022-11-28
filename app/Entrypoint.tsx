/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from 'app/config/theme-config';
import Navigator from 'app/navigation';
import { useStore } from './store';
import { RNQueryClient } from './services/react-query/query-client';

const EntryPoint: React.FC = () => {
  const isDark = useStore(state => state.isDarkMode);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <QueryClientProvider client={RNQueryClient}>
        <Navigator theme={combinedTheme} />
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default EntryPoint;
