import React from 'react';
import Navbar from '~/components/navbar';
import './style.scss';

export default ({ children, setShowSideBar }) => (
  <React.Fragment>
    <Navbar setShowSideBar={setShowSideBar} />
    <div className="main container">
      { children }
    </div>
  </React.Fragment>
);
