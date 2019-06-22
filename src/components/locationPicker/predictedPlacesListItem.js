import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlacesListItem = ({ description, mainText, secondaryText }) => {

  return (
    <div className="list-item-container">
      <div>
        <FontAwesomeIcon icon="map-marker-alt" color="#00000099" size="sm"/>
      </div>
      <div className="location-detail">
        <div className="main-text">
          { mainText }
        </div>
        <div className="secondary-text">
          { secondaryText }
        </div>
      </div>
    </div>
  )
}

PlacesListItem.prototype = {
  description: PropTypes.string,
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default PlacesListItem;
