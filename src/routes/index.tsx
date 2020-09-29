import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyTeams from 'views/MyTeams';
import CreateTeam from 'views/CreateTeam';

import Header from 'components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header user="Christy Hauschild" />
    <Switch>
      <Route path="/my-teams" component={MyTeams} />
      <Route path="/create-team" component={CreateTeam} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
