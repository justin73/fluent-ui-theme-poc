import { useCallback, useMemo } from 'react';
import { useThemeContext } from 'contexts';

export const useTheme = () => {
  const {
    currentThemeValue,
    setCurrentThemeValue,
    lightTheme,
    darkTheme,
    blendTheme,
    highContrastTheme,
  } = useThemeContext();

  const handleThemeSwitch = useCallback(
    (theme: string) => setCurrentThemeValue(theme),
    [setCurrentThemeValue]
  );

  const currentTheme = useMemo(() => {
    switch (currentThemeValue) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'blend':
        return blendTheme;
      default:
        return highContrastTheme;
    }
  }, [blendTheme, currentThemeValue, darkTheme, highContrastTheme, lightTheme]);

  return {
    handleThemeSwitch,
    lightTheme,
    darkTheme,
    currentTheme,
  };
};
