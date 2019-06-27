import React from 'react';
import CategoryItem from '~/components/categoryItem';
import Loader from '~/components/loader';
import { useLoadDataFromAPI } from '~/modules/home/loadDataEffect';
import './styles.scss';

const CategoriesBar = () => {
  const [isLoadingCategories, apiData] = useLoadDataFromAPI('/categories')
  const categories = apiData ? apiData.categories.map(category => category.categories) : []

  return (
    <div className="category-list">
      {
        (isLoadingCategories) ? <Loader /> :
        categories.map(category => <CategoryItem key={category.id} category={category} />)
      }
    </div>
  )
}

export default CategoriesBar;
