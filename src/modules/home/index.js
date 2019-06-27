import React from 'react';
import CategoriesBar from './components/CategoriesBar';
import RestaurantList from './components/RestaurantsList';
import './styles.scss';

const Home = () => {
  return (
    <div>
      <CategoriesBar />
      <RestaurantList />
    </div>
  )
};
export default Home;
