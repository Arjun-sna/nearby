import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '~/utils/apiService';

const Home = () => {
  useEffect(() => {
    async function getRestaurantCategories() {
      const restaurantCategories = await ApiService.getRestaurantCategories();
      console.log(restaurantCategories);
    }

    getRestaurantCategories();
  });

  return (
    <div>
      <p>Home</p>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
};
export default Home;
