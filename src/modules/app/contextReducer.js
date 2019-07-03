import * as Actions from '~/actions/actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case Actions.UPDATE_LOCATION_DATA:
      return {
        ...state,
        userLocation: payload,
      };
    default: throw new Error('Unexpected action');
  }
};
