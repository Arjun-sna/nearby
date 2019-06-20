import React from 'react';
import Navbar from '~/components/navbar';

export default ({ children }) => (
  <React.Fragment>
    <Navbar />
    <div>
      { children }
    </div>
  </React.Fragment>
);
