import { createContext, useContext } from 'react';

import { DashboardStore } from './dash-board.store';

interface IStore {
  dashboard: DashboardStore;
}

export const store: IStore = {
  dashboard: new DashboardStore(),
};

export const StoreContext = createContext<IStore>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  console.log('store :>> ', store);
  if (!store) throw new Error('useStore must be used within a StoreProvider.');
  return store;
};
