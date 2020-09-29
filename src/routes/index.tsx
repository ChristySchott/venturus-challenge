import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyTeams from 'pages/MyTeams';
import CreateTeam from 'pages/CreateTeam';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/my-teams" exact component={MyTeams} />
      <Route path="/create-team" component={CreateTeam} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
