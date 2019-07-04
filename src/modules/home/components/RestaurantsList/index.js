import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import ApiService from '~/utils/apiService';
import LazyLoad from 'react-lazyload';
import Loader from '~/components/loader';
import RestaurantListItem from '~/components/restaurantListItem';
import EndOfListLabel from '~/components/endOfListLabel';
import { useAppContext } from '~/modules/app/contextProvider';
import useScrolledToEndListener from '~/modules/home/useScrolledToEndListener';
import { updateRestaurantList, updateHasMoreData } from 'action-creators';
import styles from './styles.scss';

const RestaurantList = ({ filters }) => {
  const isMounted = useRef();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [appContextValue, dispatch] = useAppContext();
  const {
    userLocation: { latitude, longitude } = {},
    restaurantListData: { restaurantList, startFromOffset, hasMoreData }
  } = appContextValue;
  const scrollEndCallback = useCallback(() => {
    (!isRequestInProgress && hasMoreData) && dispatch(updateRestaurantList(restaurantList, startFromOffset + 20));
  }, [startFromOffset, isRequestInProgress, hasMoreData]);
  
  const params = useMemo(() => ({
    ...filters,
    ...latitude && longitude ? {
      lat: latitude,
      lon: longitude,
      radius: 3000,
      sort: 'real_distance',
      order: 'asc',
      start: startFromOffset,
      count: 20,
    }: {},
  }), [latitude, longitude, startFromOffset, filters]);

  useEffect(() => {
    async function fetchFromAPI() {
      if (!isMounted.current) {
        isMounted.current = true;
        return;
      }
      if (latitude && longitude) {
        setIsRequestInProgress(true);

        const apiResponseData = await ApiService.getAllRestaurants(params);
        const nextRestaurantList = apiResponseData.restaurants.map(({ restaurant }) => restaurant);

        nextRestaurantList.length ?
          dispatch(updateRestaurantList(restaurantList.concat(nextRestaurantList), startFromOffset)) :
          dispatch(updateHasMoreData(false));
        setIsRequestInProgress(false);
      }
    }
    fetchFromAPI();
  }, [params]);
  
  useScrolledToEndListener(scrollEndCallback);

  if (!latitude || !longitude) {
    return (
      <EndOfListLabel label="Please choose a location to find all restaurants" />
    );
  }

  return (
    <React.Fragment>
      <div className={styles['restaurant-list-container']}>
        {
          restaurantList.map(restaurant => (
            <LazyLoad key={restaurant.id} height={150} >
              <RestaurantListItem key={restaurant.id} restaurantData={restaurant} />
            </LazyLoad>
          ))
        }
      </div>
      <div>
        {
          hasMoreData ? <Loader /> : <EndOfListLabel />
        }
      </div>
    </React.Fragment>
  );
};

export default RestaurantList;
