import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores';
import './Dashboard.module.scss';

export interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = (
  props: IDashboardProps
) => {
  const {
    dashboard: { name },
  } = useStore();
  return (
    <div>
      <h1>Welcome to dashboard!</h1>
      <strong>{name}</strong>
      <Link to="/profile">Navigate to user profile</Link>
    </div>
  );
};

export default observer(Dashboard);
