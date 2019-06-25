import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '~/utils/apiService';

const Home = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function getRestaurantCategories() {
      const restaurantCategories = await ApiService.getRestaurantCategories();
      setCategories(restaurantCategories.categories)
    }

    getRestaurantCategories();
  }, []);

  return (
    <div>
      <p>Home</p>
      <Link to="/dashboard">{categories.length}</Link>
    </div>
  )
};
export default Home;
