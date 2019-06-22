export default (state, { type, payload }) => {
  switch(type) {
    case 'UPDATE_USER_LOCATION':
      return {
        ...state,
        userLocation: payload
      }
    default: throw new Error('Unexpected action');
  }
}
