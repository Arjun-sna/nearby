import React from 'react';
import './styles.scss';

const RestaurantListItem = ({ restaurantData }) => {
  const {
    thumb,
    name,
  } = restaurantData;
  
  return (
    <div className="restaurant-list-item-container">
      <div className="restaurant-list-item-cover-img">
        <img src={thumb} alt="restaurant cover"/>
      </div>
    </div>
  )
}

export default RestaurantListItem;
