

import React from 'react';

const SidebarContext = React.createContext(false);

const SidebarProvider = ({ children }) => {
  const [ open, setOpen ] = React.useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  }

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider };