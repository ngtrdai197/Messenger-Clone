import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores';
import './Dashboard.module.scss';
import ConversationItem from '@app/app/components/conversation-item/Conversation-Item';

export interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = (
  props: IDashboardProps
) => {
  const {
    dashboard: { name },
  } = useStore();
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="conversation-item col-span-3 py-4 px-2 border-gray-500 border-r-2">
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
      </div>
      <div className="col-span-6">
        <ConversationItem />
      </div>
      <div className="col-span-3">
        <ConversationItem />
      </div>
    </div>
  );
};

export default observer(Dashboard);
