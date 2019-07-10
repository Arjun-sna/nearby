import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from './styles.scss';

const renderRestaurantData = (title, content) => (
  <div className={styles['detail-item-container']}>
    <div className={styles['detail-title']}>
      { title }
    </div>
    <div className={styles['detail-content']}>
      { content }
    </div>
  </div>
)
const renderAdditionalDetails = (restaurantData) => {
  const additionalDetails = {
    'Cuisines': restaurantData.cuisines,
    'Opening hours': restaurantData.timings,
    'Average Cost': `₹ ${restaurantData.average_cost_for_two} for two`,
    'Highlights': `${restaurantData.highlights.join(', ')}`,
    'Phone number': `${restaurantData.phone_numbers}`,
    'Rating': `${restaurantData.user_rating ? restaurantData.user_rating.rating_text : 'No rating'}`,
    'Location': restaurantData.location.address,
  };

  const detailsContent = [];
  const detailsLabels = Object.keys(additionalDetails);

  for(let i = 0; i < detailsLabels.length;) {
    detailsContent.push(
      <Row key={`${detailsLabels[i]}-${detailsLabels[i + 1]}`}>
        <Col md={6} xs={12}>
          { renderRestaurantData(detailsLabels[i], additionalDetails[detailsLabels[i]]) }
        </Col>
        <Col md={6} xs={12}>
          { renderRestaurantData(detailsLabels[i + 1], additionalDetails[detailsLabels[i + 1]]) }
        </Col>
      </Row>
    )

    i += 2;
  }

  return detailsContent;
}

export default ({ location }) => {
  const { restaurantData } = location.state;
  
  console.log({restaurantData})
  return (
    <div className="container">
      <div className={styles['details-header-card-container']}>
        <img src={restaurantData.featured_image} />
        <Row>
          <Col xs={8}>
            <div className={styles['header-details-section']}>
              <div className={styles['name']}>
                { restaurantData.name }
              </div>
              <div className={styles['secondary-details']}>
                { restaurantData.location.locality }
                <span className={styles['dot']}>  ·  </span>
                { restaurantData.establishment[0] }
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className={styles['rating-box']} style={{ background: `#${restaurantData.user_rating ? restaurantData.user_rating.rating_color : 'red'}` }}>
              {restaurantData.user_rating ? restaurantData.user_rating.aggregate_rating : 'NA'}
            </div>
          </Col>
        </Row>
      </div>
      <Grid className={styles['details-section']}>
        { renderAdditionalDetails(restaurantData) }
      </Grid>
    </div>
  )
};

