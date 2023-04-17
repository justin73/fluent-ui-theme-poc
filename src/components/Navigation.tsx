import React from 'react';
import {
  shorthands,
  Label,
  Radio,
  RadioGroup,
  useId,
  makeStyles,
} from '@fluentui/react-components';

import { useLayoutContext, useThemeContext } from '../contexts';
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
  const layoutId = useId('layout');
  const themeId = useId('theme');
  const { currentThemeValue } = useThemeContext();
  const { currentPageLayout, handleSwitchPageLayout } = useLayoutContext();
  const { handleThemeSwitch } = useTheme();

  return (
    <div className={styles.navigation}>
      Navigation Bar
      <div className={styles.themeSwitcher}>
        <Label id={layoutId}>Layout</Label>
        <RadioGroup
          layout="horizontal"
          value={currentPageLayout}
          onChange={(e: React.FormEvent<HTMLDivElement>): void => {
            handleSwitchPageLayout((e.target as HTMLInputElement).value);
          }}
        >
          <Radio value="dialog" label="Dialog Layout" />
          <Radio value="dashboard" label="Dashboard Layout" />
          <Radio value="nlu" label="NLU Layout" />
        </RadioGroup>
      </div>
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
          <Radio value="mix" label="Mix" />
        </RadioGroup>
      </div>
    </div>
  );
};
