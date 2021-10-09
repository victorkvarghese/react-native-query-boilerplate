/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  PaperThemeDefault,
  PaperThemeDark,
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from 'app/config/theme-config';
import Navigator from 'app/navigation';
import { useStore } from './store';

const EntryPoint: React.FC = () => {
  const isDark = useStore(state => state.isDarkMode);
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
  const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator theme={combinedTheme} />
    </PaperProvider>
  );
};

export default EntryPoint;
