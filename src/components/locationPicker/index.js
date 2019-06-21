import React from 'react';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export default ({ visible, setShowSideBar }) => (
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
        </div>
        <div className="input-wrapper">
          <input
            className="search-input"
            placeholder="Search for area, street name..."
          />
        </div>
      </div>
    </CSSTransitionGroup>
  </React.Fragment>
)
