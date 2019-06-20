import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '~/components/layout';
import Routes from './routes';

export default () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
);
