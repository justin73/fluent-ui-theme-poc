import React, {
  createContext,
  useMemo,
  SetStateAction,
  useState,
  Dispatch,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { createTheme, Theme } from '@fluentui/theme';

import { light, dark, mix, CustomThemeType } from '../themes';

type ThemeConextType = {
  useDarkMode: boolean;
  useCustomTheme: boolean;
  currentThemeValue: string;
  compoundTheme: CustomThemeType;
  setUseDarkMode: Dispatch<SetStateAction<boolean>>;
  setUseCustomMode: Dispatch<SetStateAction<boolean>>;
  setCurrentThemeValue: Dispatch<SetStateAction<string>>;
  setCompoundTheme: Dispatch<SetStateAction<Theme>>;
  lightTheme: ReturnType<typeof createTheme>;
  darkTheme: ReturnType<typeof createTheme>;
  mixTheme: ReturnType<typeof createTheme>;
};

type ThemeContextProviderPropType = {
  children: React.ReactNode;
};

// extract as a constant file
const lightTheme = createTheme(light);
const darkTheme = createTheme(dark);
const mixTheme = createTheme(mix);

export const ThemeContext = createContext({} as ThemeConextType);

export const ThemeContextProvider = ({ children }: ThemeContextProviderPropType) => {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [useCustomTheme, setUseCustomMode] = useState(false);
  const [compoundTheme, setCompoundTheme] = useState(mixTheme);

  const [currentThemeValue, setCurrentThemeValue] = useState('light');

  const value = useMemo(() => {
    return {
      useDarkMode,
      setUseDarkMode,
      useCustomTheme,
      setUseCustomMode,
      currentThemeValue,
      setCurrentThemeValue,
      setCompoundTheme,
      compoundTheme,
      lightTheme,
      darkTheme,
      mixTheme,
    };
  }, [compoundTheme, currentThemeValue, useCustomTheme, useDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
