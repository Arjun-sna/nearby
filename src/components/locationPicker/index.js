import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export default class LocationPicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay-container" />
        <div className={classNames("side-bar-container", { "slide-in" : this.props.visible })}>
          <div className="close-button-wrapper">
            <FontAwesomeIcon className="close-button" icon="window-close" size="1x"/>
          </div>
          <div className="input-wrapper">
            <input
              className="search-input"
              placeholder="Search for area, street name..."
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
