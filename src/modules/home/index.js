import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '~/utils/apiService';
import CategoryItem from '~/components/categoryItem';
import './styles.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function getRestaurantCategories() {
      const restaurantCategories = await ApiService.getRestaurantCategories();
      console.log(restaurantCategories.categories.map(category => category.categories))
      setCategories(restaurantCategories.categories.map(category => category.categories))
    }

    getRestaurantCategories();
  }, []);

  return (
    <div>
      <div className="category-list">
      {
        categories.map(category => <CategoryItem key={category.id} category={category} />)
      }
      </div>
    </div>
  )
};
export default Home;
