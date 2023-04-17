import React from 'react';
import { ThemeProvider, PrimaryButton, IButtonProps, createTheme } from '@fluentui/react';

import { Navigation } from 'components/Navigation';
import { Page } from 'components/Page';
import { useTheme } from 'hooks/useTheme';
import { LayoutContextProvider } from 'contexts';
import { Button, makeStyles } from '@fluentui/react-components';

import { mix } from './themes';

const useStyles = makeStyles({
  overrides: {
    backgroundColor: 'red',
  },
});

interface IMyButtonProps extends IButtonProps {
  mode?: string;
}

const MyButton = (props: IMyButtonProps) => {
  const { mode, ...rest } = props;
  const styles = useStyles();
  // based on the mode, we need to see if we need to inherit the theme from the top or override it with our own
  console.log('mode', mode);
  return (
    <PrimaryButton {...rest} className={styles.overrides}>
      {props.children}
    </PrimaryButton>
  );
};

const App: React.FC = () => {
  const { currentBaseTheme } = useTheme();

  return (
    <ThemeProvider applyTo="body" theme={currentBaseTheme}>
      <LayoutContextProvider>
        <Navigation />
        <Page />
      </LayoutContextProvider>

      <ThemeProvider theme={(() => createTheme(mix))()}>
        <div
          style={{
            width: '100vw',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MyButton mode="my custom prop value">Click me</MyButton>
          <Button className="button">inherit button theme</Button>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;
