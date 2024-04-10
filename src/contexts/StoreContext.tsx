import React from 'react';
import { AppState } from '../store';

export const StoreContext = React.createContext<AppState>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
