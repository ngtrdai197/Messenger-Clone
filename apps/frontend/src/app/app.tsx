import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const DashboardLazy = React.lazy(() => import('./views/dashboard/Dashboard'));
const UserProfileLazy = React.lazy(
  () => import('./views/user-profile/UserProfile')
);

export function App() {
  return (
    <React.Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DashboardLazy />
          </Route>
          <Route exact path="/profile">
            <UserProfileLazy />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
