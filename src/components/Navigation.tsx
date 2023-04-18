import React from 'react';
import {
  shorthands,
  Label,
  Radio,
  RadioGroup,
  useId,
  makeStyles,
} from '@fluentui/react-components';
import { ThemeProvider } from '@fluentui/react';

import { useThemeContext } from '../contexts';
import { useTheme } from '../hooks/useTheme';

const useStyles = makeStyles({
  navigation: {
    height: '50px',
    width: ' 100%',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.borderBottom('2px', 'solid', 'red'),
    ...shorthands.padding('20px'),
  },
  themeSwitcher: {
    marginLeft: 'auto',
  },
});

export const Navigation: React.FC = () => {
  const styles = useStyles();
  const themeId = useId('theme');
  const { currentThemeValue } = useThemeContext();
  const { handleThemeSwitch } = useTheme();
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme?.colorSet?.dialog.zone1}>
      <div className={styles.navigation}>
        Navigation Bar
        <div className={styles.themeSwitcher}>
          <Label id={themeId}>Theme</Label>
          <RadioGroup
            layout="horizontal"
            value={currentThemeValue}
            onChange={(e: React.FormEvent<HTMLDivElement>): void => {
              handleThemeSwitch((e.target as HTMLInputElement).value);
            }}
          >
            <Radio value="light" label="Light" />
            <Radio value="dark" label="Dark" />
            <Radio value="blend" label="Mix" />
            <Radio value="highContrast" label="High Contrast" />
          </RadioGroup>
        </div>
      </div>
    </ThemeProvider>
  );
};
