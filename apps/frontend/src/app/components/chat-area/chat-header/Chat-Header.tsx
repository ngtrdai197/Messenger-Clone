import React from 'react';
import { observer } from 'mobx-react';

import Avatar from '../../avatar/Avatar';

const ChatHeader: React.FC = () => {
  return (
    <div className="border p-4 shadow-md">
      <div className="flex items-center">
        <Avatar
          url="https://avatars.githubusercontent.com/u/1012787?s=60&u=eacfede061480b148e24fd73948faf75ebf98771&v=4"
          width={'32px'}
          height={'32px'}
        />
        <span className="ml-3">User name</span>
      </div>
    </div>
  );
};

export default observer(ChatHeader);
