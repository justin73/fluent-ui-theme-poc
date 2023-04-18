import { useCallback, useMemo } from 'react';
import { useThemeContext } from 'contexts';

export const useTheme = () => {
  const {
    setUseDarkMode,
    setUseCustomMode,
    setCurrentThemeValue,
    useCustomTheme,
    useDarkMode,
    lightTheme,
    darkTheme,
    mixTheme,
    setCompoundTheme,
    compoundTheme,
  } = useThemeContext();

  const handleThemeSwitch = useCallback(
    (theme: string) => {
      setCurrentThemeValue(theme);

      switch (theme) {
        case 'light':
          setUseCustomMode(false);
          setUseDarkMode(false);
          return;
        case 'dark':
          setUseCustomMode(false);
          setUseDarkMode(true);
          return;
        case 'mix':
          setUseDarkMode(false);
          setUseCustomMode(true);
          setCompoundTheme(mixTheme);
          return;
      }
    },
    [setCurrentThemeValue, setUseCustomMode, setUseDarkMode, setCompoundTheme, mixTheme]
  );

  const currentBaseTheme = useMemo(() => {
    // basic is either dark or light
    const basicTheme = useDarkMode ? darkTheme : lightTheme;
    // mix theme is a combination of dark and light
    // but the fundation is dark so if mix is selected, then the fundation theme in this case will be dark
    // and all we need to do is to override certain zone in the app to use light theme
    return useCustomTheme ? compoundTheme : basicTheme;
  }, [useDarkMode, darkTheme, lightTheme, useCustomTheme, compoundTheme]);

  return {
    handleThemeSwitch,
    lightTheme,
    darkTheme,
    currentBaseTheme,
    compoundTheme,
  };
};
