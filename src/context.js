import React, { useState, useContext, createContext } from 'react';

export const AppContext = createContext();
export const GlobalContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const values = {
    openSidebar,
    setOpenSidebar,
    openModal,
    setOpenModal
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
