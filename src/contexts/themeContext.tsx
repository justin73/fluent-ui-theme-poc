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

import { light, dark, blend, hightContrast } from '../themes';

type ThemeConextType = {
  currentThemeValue: string;
  setCurrentThemeValue: Dispatch<SetStateAction<string>>;
  lightTheme: ReturnType<typeof createTheme>;
  darkTheme: ReturnType<typeof createTheme>;
  blendTheme: ReturnType<typeof createTheme>;
  highContrastTheme: ReturnType<typeof createTheme>;
};

type ThemeContextProviderPropType = {
  children: React.ReactNode;
};

// extract as a constant file
const lightTheme = createTheme(light);
const darkTheme = createTheme(dark);
const blendTheme = createTheme(blend);
const highContrastTheme = createTheme(hightContrast);

export const ThemeContext = createContext({} as ThemeConextType);

export const ThemeContextProvider = ({ children }: ThemeContextProviderPropType) => {
  const [currentThemeValue, setCurrentThemeValue] = useState('light');

  const value = useMemo(() => {
    return {
      currentThemeValue,
      setCurrentThemeValue,
      lightTheme,
      darkTheme,
      blendTheme,
      highContrastTheme,
    };
  }, [currentThemeValue]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
