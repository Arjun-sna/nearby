import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '~/components/layout';
import LocationPicker from '~/components/locationPicker'; 
import Routes from './routes';

export default () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Router>
      <Layout setShowSideBar={setShowSideBar}>
        <Routes />
        {
          showSideBar && 
          <LocationPicker
            setShowSideBar={setShowSideBar} 
            />
        }
      </Layout>
    </Router>
  )
};
