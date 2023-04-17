import { useCallback, useMemo } from 'react';
import { useThemeContext } from 'contexts';

export const useTheme = () => {
  const {
    setUseDarkMode,
    setUseMixMode,
    setCurrentThemeValue,
    useMixMode,
    useDarkMode,
    lightTheme,
    darkTheme,
  } = useThemeContext();

  const handleThemeSwitch = useCallback(
    (theme: string) => {
      setCurrentThemeValue(theme);

      switch (theme) {
        case 'light':
          setUseMixMode(false);
          setUseDarkMode(false);
          return;
        case 'dark':
          setUseMixMode(false);
          setUseDarkMode(true);
          return;
        case 'mix':
          setUseDarkMode(false);
          setUseMixMode(true);
          return;
      }
    },
    [setCurrentThemeValue, setUseDarkMode, setUseMixMode]
  );

  const currentBaseTheme = useMemo(() => {
    // basic is either dark or light
    const basicTheme = useDarkMode ? darkTheme : lightTheme;
    // mix theme is a combination of dark and light
    // but the fundation is dark so if mix is selected, then the fundation theme in this case will be dark
    // and all we need to do is to override certain zone in the app to use light theme
    return useMixMode ? darkTheme : basicTheme;
  }, [darkTheme, lightTheme, useDarkMode, useMixMode]);

  return {
    handleThemeSwitch,
    lightTheme,
    darkTheme,
    currentBaseTheme,
  };
};
