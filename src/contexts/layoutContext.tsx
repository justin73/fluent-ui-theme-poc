import React, { createContext, useMemo, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

type ThemeConextType = {
  currentPageLayout: string;
  handleSwitchPageLayout: (selectedLayout: string) => void;
};

type LayoutContextProviderPropType = {
  children: React.ReactNode;
};

export const LayoutContext = createContext({} as ThemeConextType);

export const LayoutContextProvider = ({ children }: LayoutContextProviderPropType) => {
  const [currentPageLayout, setCurrentPageLayout] = useState('dialog');

  const handleSwitchPageLayout = useCallback((selectedLayout: string) => {
    setCurrentPageLayout(selectedLayout);
  }, []);

  const value = useMemo(() => {
    return {
      currentPageLayout,
      handleSwitchPageLayout,
    };
  }, [currentPageLayout, handleSwitchPageLayout]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  return context;
};
