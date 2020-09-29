import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyTeams from 'pages/MyTeams';
import CreateTeam from 'pages/CreateTeam';

import Header from 'components/Header';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Header user="Christy Hauschild" />
      <Route path="/my-teams" exact component={MyTeams} />
      <Route path="/create-team" component={CreateTeam} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
