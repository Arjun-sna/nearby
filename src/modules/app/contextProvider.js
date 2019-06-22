import React, { createContext, useReducer, useContext } from 'react';
import contextReducer from './contextReducer';

const AppDataContext = createContext();

const AppContextProvider = ({ children }) => {
  const contextValue = useReducer(contextReducer, {});

  return (
    <AppDataContext.Provider value={contextValue}>
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppContext = () => {
  const appContextValue = useContext(AppDataContext);
  return appContextValue;
};

export default AppContextProvider;