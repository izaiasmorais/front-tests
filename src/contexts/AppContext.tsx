import { createContext, ReactNode, useContext, useState } from 'react';

interface AppContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export function AppContextProvier({ children }: AppContextProviderProps) {
  const [activeTab, setActiveTab] = useState('requests');

  return <AppContext.Provider value={{ activeTab, setActiveTab }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const appData = useContext(AppContext);

  return appData;
}
