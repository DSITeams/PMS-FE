import React, { createContext, useState } from 'react';

interface SidebarContextType {
  expanded: boolean;
  activeItem: string;
  setExpanded: (expanded: boolean) => void;
  setActiveItem: (item: string) => void;
  openSubMenu: string | null;
  setOpenSubMenu: (subMenu: string | null) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        activeItem,
        setExpanded,
        setActiveItem,
        openSubMenu,
        setOpenSubMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };
