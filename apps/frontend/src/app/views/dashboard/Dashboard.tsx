import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores';
import './Dashboard.module.scss';
import Conversation from '@app/app/components/conversation/Conversation';
import ChatArea from '@app/app/components/chat-area/ChatArea';

export interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = (
  props: IDashboardProps
) => {
  const {
    dashboard: { name },
  } = useStore();
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="conversation-item col-span-3 py-4 px-2 border-gray-500 border-r-2 overflow-y-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
      <div className="col-span-6 border-gray-500 border-r-2">
        <ChatArea />
      </div>
      <div className="col-span-3">
        <Conversation />
      </div>
    </div>
  );
};

export default observer(Dashboard);
