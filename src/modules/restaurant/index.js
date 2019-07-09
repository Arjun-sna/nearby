import React from 'react';
import styles from './styles.scss';

export default ({ location }) => {
  const { restaurantData } = location.state; 
  console.log({restaurantData})
  return (
    <div className="container">
      <div className={styles['details-header-card-container']}>
        <img src={restaurantData.featured_image} />
        <div className={styles['details-section']}>
          <div className={styles['name']}>
            { restaurantData.name }
          </div>
          <div className={styles['secondary-details']}>
            { restaurantData.location.locality }
            <span className={styles['dot']}>  ·  </span>
            { restaurantData.establishment[0] }
          </div>
        </div>
      </div>
    </div>
  )
};

