import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export default ({ setShowSideBar }) => (
  <div className="location-picker-container" onClick={() => setShowSideBar(true)}>
    <span>
      <span className="locality">
        Koramangala
      </span>
    </span>
    <span className="address">
      Hoodi Main Rd, Doddanakundi Industrial Area 2, Phase 1, Doddanekkundi, Bengaluru, Karnataka, India`
    </span>
    <span>
    <span className="address-icon">
      <FontAwesomeIcon icon="angle-down" size="1x"/>
    </span>
    </span>
  </div>
);
