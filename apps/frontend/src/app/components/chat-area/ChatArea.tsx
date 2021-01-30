import React from 'react';
import { observer } from 'mobx-react';

import ChatHeader from './chat-header/Chat-Header';
import ChatInput from './chat-input/ChatInput';
import ChatList from './chat-list/ChatList';

const ChatArea: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <ChatHeader />
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default observer(ChatArea);
