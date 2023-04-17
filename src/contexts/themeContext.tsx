import React, {
  createContext,
  useMemo,
  SetStateAction,
  useState,
  Dispatch,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@fluentui/theme';

import { light, dark } from '../themes';

type ThemeConextType = {
  useDarkMode: boolean;
  useMixMode: boolean;
  currentThemeValue: string;
  setUseDarkMode: Dispatch<SetStateAction<boolean>>;
  setUseMixMode: Dispatch<SetStateAction<boolean>>;
  setCurrentThemeValue: Dispatch<SetStateAction<string>>;
  lightTheme: ReturnType<typeof createTheme>;
  darkTheme: ReturnType<typeof createTheme>;
};

type ThemeContextProviderPropType = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeConextType);

export const ThemeContextProvider = ({ children }: ThemeContextProviderPropType) => {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [useMixMode, setUseMixMode] = useState(false);

  const [currentThemeValue, setCurrentThemeValue] = useState('light');

  const lightTheme = createTheme(light);
  const darkTheme = createTheme(dark);

  const value = useMemo(() => {
    return {
      useDarkMode,
      setUseDarkMode,
      useMixMode,
      setUseMixMode,
      currentThemeValue,
      setCurrentThemeValue,
      lightTheme,
      darkTheme,
    };
  }, [currentThemeValue, darkTheme, lightTheme, useDarkMode, useMixMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
