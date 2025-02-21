import { createContext } from 'react';

interface SidebarContextProps {
  expanded: boolean;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);
