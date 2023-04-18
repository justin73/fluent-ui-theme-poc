import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { ThemeProvider } from '@fluentui/react';

import { useTheme } from 'hooks/useTheme';
const useStyles = makeStyles({
  rightPanel: {
    height: '100%',
    width: '20vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.borderLeft('2px', 'solid', 'red'),
  },
});

export const RightPanel: React.FC = () => {
  const styles = useStyles();
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme.colorSet?.dialog.zone2}>
      <div className={styles.rightPanel}> right panel</div>;
    </ThemeProvider>
  );
};
