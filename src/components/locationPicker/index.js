import React, { useState, useEffect } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPlacePredictionsForSearchQuery } from '~/utils';
import './style.scss';

export default ({ setShowSideBar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [predictedPlaces, setPredictedPlaces] = useState([]);
  
  useEffect(() => {
    async function fetchPlacePredictions() {
      const predictedPlaces = await getPlacePredictionsForSearchQuery(searchQuery);
      
      setPredictedPlaces(predictedPlaces);
    }
    let deferTimeout;
    
    if (searchQuery.length > 2) {      
      deferTimeout = setTimeout(fetchPlacePredictions, 1000);
    }

    return () => clearTimeout(deferTimeout);
  }, [searchQuery]);

  return (
    <React.Fragment>
      <div className="overlay-container" onClick={() => setShowSideBar(false)}/>
      <CSSTransitionGroup
        transitionName="side-bar"
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnterTimeout={100}
        transitionLeaveTimeout={300}
      >
        <div key="location-picker-side-bar" className="side-bar-container">
          <div className="close-button-wrapper" onClick={() => setShowSideBar(false)}>
            <FontAwesomeIcon className="close-button" icon="window-close" size="1x"/>
            <span>{predictedPlaces.length}</span>
          </div>
          <div className="input-wrapper">
            <input
              className="search-input"
              placeholder="Search for area, street name..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>
      </CSSTransitionGroup>
    </React.Fragment>
  )
}
