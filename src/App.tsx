import React from 'react';
import { ThemeProvider } from '@fluentui/react';

import { Navigation } from 'components/Navigation';
import { Page } from 'components/Page';
import { useTheme } from 'hooks/useTheme';
import { LayoutContextProvider } from 'contexts';

const App: React.FC = () => {
  const { currentBaseTheme } = useTheme();

  return (
    <ThemeProvider applyTo="body" theme={currentBaseTheme}>
      <LayoutContextProvider>
        <Navigation />
        <Page />
      </LayoutContextProvider>
    </ThemeProvider>
  );
};

export default App;
