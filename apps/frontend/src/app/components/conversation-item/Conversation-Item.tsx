import React from 'react';
import { observer } from 'mobx-react';

import Avatar from '../avatar/Avatar';
interface IConversationItem {}

const ConversationItem = (props: IConversationItem) => {
  return (
    <React.Fragment>
      <div className="flex px-1 py-3 cursor-pointer hover:bg-gray-100 rounded-xl">
        <div>
          <Avatar url="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-1/p100x100/57049071_132055864601552_3601851868977823744_n.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=wbItDycPWzAAX8X_ddG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-4.fna&tp=6&oh=69ca3af2d2d0ae5fa770f22230691a4b&oe=603335B2" />
        </div>
        <div className="flex flex-col pl-3 justify-center">
          <p className="mb-2 text-sm">Huy Nguyen Ngoc</p>
          <p className=" text-xs text-gray-500">
            You: Co thuong chua anh <span>11 gio</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(ConversationItem);
