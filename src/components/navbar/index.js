import React from 'react';
import { Link } from 'react-router-dom';
import LocationSelector from '~/components/locationView';
import './style.scss';

export default () => (
  <div className="navbar">
    <div className="nav-content container">
      <Link to="/" className="logo">
        NearBy
      </Link>
      <LocationSelector />
    </div>
  </div>
);
