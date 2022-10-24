/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/list/:type" exact component={List} />
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
