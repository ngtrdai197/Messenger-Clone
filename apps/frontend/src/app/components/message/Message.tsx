import React from 'react';

import { IMessage } from '@messenger/interfaces';
import Avatar from '../avatar/Avatar';

interface IMessageProps extends IMessage {}

const Message: React.FC<IMessageProps> = ({ avatarUrl, message }) => {
  return (
    <div className="flex justify-start items-center ml-3 mb-4">
      <Avatar url={avatarUrl} width={'32px'} height={'32px'} />
      <span className="rounded-2xl bg-gray-100 p-3 ml-3">{message}</span>
    </div>
  );
};

export default Message;
