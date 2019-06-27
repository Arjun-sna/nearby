import React, { useState, useEffect } from 'react';
import ApiService from '~/utils/apiService';
import Loader from '~/components/loader';
import RestaurantListItem from '~/components/restaurantListItem';
import { useAppContext } from '~/modules/app/contextProvider';
import './styles.scss';

const RestaurantList = ({ filters }) => {
  const [startFromOffset, setStartFromOffset] = useState(0);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [appContextValue] = useAppContext();
  const { userLocation: { latitude, longitude } = {} } = appContextValue;
  const locationFilter = latitude && longitude ? {
    lat: latitude,
    lon: longitude,
    radius: 3000,
    sort: 'real_distance',
    order: 'asc',
    start: startFromOffset,
    count: 30,
  } : {};
  const params = {
    ...filters,
    ...locationFilter,
  }

  useEffect(() => {
    async function fetchFromAPI() {
      setIsRequestInProgress(true);
      const apiResponseData = await ApiService.getAllRestaurants(params);
      setIsRequestInProgress(false);
      setRestaurantList(apiResponseData.restaurants.map(({ restaurant }) => restaurant))
    }

    fetchFromAPI();
  }, [startFromOffset, appContextValue]);

  if (isRequestInProgress) {
    return <Loader />
  }
  return (
    <div className="restaurant-list-container">
      {  
        restaurantList.map(
          restaurant => <RestaurantListItem key={restaurant.id} restaurantData={restaurant}/>
        )
      }
    </div>
  )
}

export default RestaurantList;
