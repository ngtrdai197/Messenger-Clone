import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores';
import './UserProfile.module.scss';

export interface IUserProfileProps {}

const UserProfile: React.FC<IUserProfileProps> = (props: IUserProfileProps) => {
  const {
    dashboard: { name, changeNameFnc },
  } = useStore();
  return (
    <div>
      <h1>Welcome to user-profile!</h1>
      <strong>{name}</strong>
      <button onClick={changeNameFnc}>Update</button>
      <Link to="/">Navigate to dashboard</Link>
    </div>
  );
};

export default observer(UserProfile);
