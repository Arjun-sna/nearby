import React from 'react';
import Navbar from '~/components/navbar';
import './style.scss';

export default ({ children }) => (
  <React.Fragment>
    <Navbar />
    <div className="main container">
      { children }
    </div>
  </React.Fragment>
);
