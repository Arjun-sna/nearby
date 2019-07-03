import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RestaurantPlaceholder from 'assets/images/restaurant.png';
import './styles.scss';

const RestaurantListItem = ({ restaurantData }) => {
  const {
    id,
    thumb,
    name,
    cuisines,
    average_cost_for_two,
    timings,
  } = restaurantData;

  return (
    <Link to={{
        pathname: `/restaurant/${id}`,
        state: { restaurantData }
      }} >
      <div className="restaurant-list-item-container">
        <div className="restaurant-list-item-cover-img">
        {
          thumb ? <img src={thumb} alt="restaurant cover" /> :
            <img src={RestaurantPlaceholder} alt="restaurant cover" />

        }
        </div>
        <div className="restaurant-list-item-detail-container">
          <div className="restaurant-list-item-name">{name}</div>
          {
            cuisines &&
            <div className="restaurant-detail-wrapper">
              <FontAwesomeIcon icon="utensils" size="xs" color="#00000099" />
              <div className="restaurant-list-item-cuisines">
                {cuisines}
              </div>
            </div>
          }
          <div className="restaurant-detail-wrapper">
            <FontAwesomeIcon icon="clock" size="xs" color="#00000099" />
            <div className="restaurant-list-item-timings">
              {timings}
            </div>
          </div>
          <div className="restaurant-detail-wrapper">
            <FontAwesomeIcon icon="rupee-sign" size="xs" color="#00000099" />
            <div className="restaurant-list-item-cost">
              {`${average_cost_for_two} for 2`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantListItem;
