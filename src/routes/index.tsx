import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyTeams from 'pages/MyTeams';
import CreateTeam from 'pages/CreateTeam';

import Header from 'components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header user="Christy Hauschild" />
    <Switch>
      <Route path="/" exact component={MyTeams} />
      <Route path="/create-team" component={CreateTeam} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
