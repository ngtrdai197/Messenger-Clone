import React from 'react';
import { observer } from 'mobx-react';

import Avatar from '../avatar/Avatar';
interface IConversationProps {}

const Conversation:React.FC<IConversationProps> = (props: IConversationProps) => {
  return (
    <React.Fragment>
      <div className="flex px-1 py-3 cursor-pointer hover:bg-gray-100 rounded-xl">
        <div>
          <Avatar url="https://avatars.githubusercontent.com/u/1012787?s=60&u=eacfede061480b148e24fd73948faf75ebf98771&v=4" />
        </div>
        <div className="flex flex-col pl-3 justify-center">
          <p className="mb-2 text-sm">Huy Nguyen Ngoc</p>
          <p className=" text-xs text-gray-500">
            You: Test message <span>11 gio</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(Conversation);
