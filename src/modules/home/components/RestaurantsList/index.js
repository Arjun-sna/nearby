import React, { useState, useEffect, useCallback } from 'react';
import ApiService from '~/utils/apiService';
import LazyLoad from 'react-lazyload';
import Loader from '~/components/loader';
import RestaurantListItem from '~/components/restaurantListItem';
import { useAppContext } from '~/modules/app/contextProvider';
import useScrolledToEndListener from '~/modules/home/useScrolledToEndListener';
import './styles.scss';

const RestaurantList = ({ filters }) => {
  const [startFromOffset, setStartFromOffset] = useState(0);
  const [restaurantList, setRestaurantList] = useState([]);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
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
  };
  const scrollEndCallback = useCallback(() => {
    (!isRequestInProgress && hasMoreData) && setStartFromOffset(startFromOffset + 20)
  }, [startFromOffset, isRequestInProgress, hasMoreData]);

  useEffect(() => {
    async function fetchFromAPI() {
      setIsRequestInProgress(true);
      const apiResponseData = await ApiService.getAllRestaurants(params);
      setIsRequestInProgress(false);
      const nextRestaurantList = apiResponseData.restaurants.map(({ restaurant }) => restaurant);
      nextRestaurantList.length ?
        setRestaurantList(restaurantList.concat(nextRestaurantList)) : setHasMoreData(false);
    }

    fetchFromAPI();
  }, [startFromOffset, appContextValue]);
  

  useScrolledToEndListener(scrollEndCallback);

  return (
    <div className="restaurant-list-container">
      {
        restaurantList.map(restaurant => (
          <LazyLoad key={restaurant.id} height={150} >
            <RestaurantListItem key={restaurant.id} restaurantData={restaurant} />
          </LazyLoad>
        ))
      }
      {
        isRequestInProgress && <Loader />
      }
    </div>
  );
};

export default RestaurantList;
