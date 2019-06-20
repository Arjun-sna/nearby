import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default () => (
  <div className="navbar">
    <div className="nav-content container">
      <Link to="/" className="logo">
        NearBy
      </Link>
      <div className="header-location">
        <span>
          <span className="locality">
            Koramangala
          </span>
        </span>
        <span className="address">
          Hoodi Main Rd, Doddanakundi Industrial Area 2, Phase 1, Doddanekkundi, Bengaluru, Karnataka, India`
        </span>
      </div>
    </div>
  </div>
);
