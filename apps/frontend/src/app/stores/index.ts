import { createContext, useContext } from 'react';

import { ChatListStore } from './chat-list.store';
import { DashboardStore } from './dash-board.store';

interface IStore {
  dashboard: DashboardStore;
  chatList: ChatListStore;
}

export const store: IStore = {
  dashboard: new DashboardStore(),
  chatList: new ChatListStore(),
};

export const StoreContext = createContext<IStore>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useStore must be used within a StoreProvider.');
  return store;
};
