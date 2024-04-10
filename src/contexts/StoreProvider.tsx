import React, { ReactNode } from 'react';
import { useStore } from '../store';
import { StoreContext } from './StoreContext';

interface StoreProviderProps {
  children: ReactNode;
}

const { Provider } = StoreContext;

// Provider component tha provide the store via context
const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = useStore();

  return <Provider value={store}>{children}</Provider>;
};

export default StoreProvider;
