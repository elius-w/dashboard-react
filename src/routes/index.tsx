/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app.routes';

import { useAuth } from '../hooks/auth';
import Auth from './auth.routes';

export const Paths: React.FC = () => {
  const { logged } = useAuth();

  return <BrowserRouter>{logged ? <App /> : <Auth />}</BrowserRouter>;
};

export default Paths;
