import {
  UPDATE_RESTAURANT_LIST,
  UPDATE_LOCATION_DATA,
} from './actionTypes';

export const updateRestaurantList = (restaurantList) => ({
  type: UPDATE_RESTAURANT_LIST,
  payload: restaurantList,
});

export const updateLocationData = (locationData) => ({
  type: UPDATE_LOCATION_DATA,
  payload: locationData,
});
