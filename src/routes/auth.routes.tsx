/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
);

export default AuthRoutes;
