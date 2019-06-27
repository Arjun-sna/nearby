import React from 'react';
import CategoriesBar from './components/CategoriesBar';
import RestaurantList from './components/RestaurantsList';
import './styles.scss';

const Home = () => (
  <div>
    <CategoriesBar />
    <RestaurantList />
  </div>
);
export default Home;
