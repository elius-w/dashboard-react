/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import React, { ReactNode } from 'react';
import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
