import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '~/modules/app/contextProvider';
import './style.scss';

export default ({ setShowSideBar }) => {
  const [appContextValue] = useAppContext();
  const { userLocation: { mainText, secondaryText } = {} } = appContextValue;

  return (
    <div className="location-picker-container" onClick={() => setShowSideBar(true)}>
      <span>
        <span className="locality">
          { mainText || 'Choose a location' }
        </span>
      </span>
      <span className="address">
        { secondaryText }
      </span>
      <span>
        <span className="address-icon">
          <FontAwesomeIcon icon="angle-down" size="1x" />
        </span>
      </span>
    </div>
  );
};
