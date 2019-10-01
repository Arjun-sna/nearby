import {
  UPDATE_RESTAURANT_LIST,
  UPDATE_LOCATION_DATA,
  UPDATE_RESTAURANT_LIST_HAS_MORE_DATA,
} from './actionTypes'

export const updateRestaurantList = (restaurantList, startFromOffset) => ({
  type: UPDATE_RESTAURANT_LIST,
  payload: { restaurantList, startFromOffset },
})

export const updateLocationData = locationData => ({
  type: UPDATE_LOCATION_DATA,
  payload: locationData,
})

export const updateHasMoreData = hasMoreData => ({
  type: UPDATE_RESTAURANT_LIST_HAS_MORE_DATA,
  payload: hasMoreData,
})
