import React from 'react';
import { observer } from 'mobx-react';

import Message from '../../message/Message';
import { useStore } from '@app/app/stores';

const ChatList: React.FC = () => {
  const { chatList } = useStore();
  return (
    <div className="flex-1 pt-4 overflow-y-scroll">
      {chatList.messages.map((message, index) => (
        <Message
          avatarUrl={message.avatarUrl}
          message={message.message}
          key={index}
        />
      ))}
    </div>
  );
};

export default observer(ChatList);
