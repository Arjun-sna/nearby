import React, { useState, useEffect } from 'react';
import ApiService from '~/utils/apiService';
import Loader from '~/components/loader';

const RestaurantList = ({ filters }) => {
  const [startFromOffset, setStartFromOffset] = useState(0);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const params = {
    ...filters,
    start: startFromOffset,
    count: 30,
  }

  useEffect(() => {
    async function fetchFromAPI() {
      setIsRequestInProgress(true);
      const apiResponseData = await ApiService.getAllRestaurants(params);
      setIsRequestInProgress(false);
      setRestaurantList(apiResponseData.restaurants.map(({ restaurant }) => restaurant))
    }

    fetchFromAPI();
  }, [startFromOffset]);

  return (
    <div>
      {
        (isRequestInProgress) ? <Loader /> :
        restaurantList.map(restaurant => <div><p>{restaurant.name}</p></div>)
      }
    </div>
  )
}

export default RestaurantList;
