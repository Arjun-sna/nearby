import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlacesListItem = ({
  description,
  mainText,
  secondaryText,
  onClick,
}) => (
  <div className="list-item-container" onClick={() => onClick && onClick({ description, mainText, secondaryText })}>
    <div>
      <FontAwesomeIcon icon="map-marker-alt" color="#00000099" size="sm" />
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
);

PlacesListItem.propTypes = {
  description: PropTypes.string,
  mainText: PropTypes.string,
  secondaryText: PropTypes.string,
  onClick: PropTypes.func,
};

export default PlacesListItem;
