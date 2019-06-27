import axios from 'axios'

const GOOGLE_API_BASE_URL = 'https://maps.googleapis.com/maps/api';
const { GOOGLE_API_KEY } = process.env;

export const getPlacePredictionsForSearchQuery =  async (searchQuery) => {
  const queryParams = {
    key: GOOGLE_API_KEY,
    input: searchQuery
  }
  const placesResponse = await axios.get(
      `${GOOGLE_API_BASE_URL}/place/autocomplete/json?`,
      { params: queryParams }
    );

  if (placesResponse.status === 200) {
    return placesResponse.data && placesResponse.data.predictions;
  }
}