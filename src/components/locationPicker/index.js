import React, { useState, useEffect, useRef } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Script from 'react-load-script';
import PlacesAutoComplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete';
import { getPlacePredictionsForSearchQuery, geoCodeLocation } from '~/utils';
import { useAppContext } from '~/modules/app/contextProvider';
import PlacesListItem from './predictedPlacesListItem';
import './style.scss';

export default ({ setShowSideBar }) => {
  const inputRef = useRef();
  const [isGoogleLibraryScriptLoaded, setGoogleLibraryScriptLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [contextValue, dispatch] = useAppContext();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [isGoogleLibraryScriptLoaded]);

  useEffect(() => {
    async function getGeoCodeForLocationDescription() {
      const geoCodeData = await geocodeByAddress(selectedLocation.description);
      const { lat: latitude, lng: longitude } = await getLatLng(geoCodeData[0]);
      // TODO: handle error with a toast
      const locationData = { ...selectedLocation, latitude, longitude };
      dispatch({ type: 'UPDATE_USER_LOCATION', payload: locationData });
      setShowSideBar(false);
    }

    if (selectedLocation) {
      getGeoCodeForLocationDescription();
    }
  }, [dispatch, selectedLocation, setShowSideBar]);

  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`;
  const handleScriptLoad = () => setGoogleLibraryScriptLoaded(true);

  return (
    <React.Fragment>
      <Script
        url={scriptUrl}
        onLoad={handleScriptLoad}
      />
      <div className="overlay-container" onClick={() => setShowSideBar(false)} />
      <CSSTransitionGroup
        transitionName="side-bar"
        transitionAppear
        transitionAppearTimeout={3000}
        transitionEnterTimeout={100}
        transitionLeaveTimeout={300}
      >
        <div key="location-picker-side-bar" className="side-bar-container">
          <div className="close-button-wrapper" onClick={() => setShowSideBar(false)}>
            <FontAwesomeIcon className="close-button" icon="window-close" size="1x" />
          </div>
          {
            isGoogleLibraryScriptLoaded &&
            <PlacesAutoComplete
              value={searchQuery}
              onChange={setSearchQuery}
              debounce={1000}
            >
              {
                ({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                  <div>
                    <div className="input-wrapper">
                      <input
                        ref={inputRef}
                        {
                          ...getInputProps({
                            className: 'search-input',
                            placeholder: 'Search for area, street name...',
                          })
                        }
                      />
                    </div>
                    {
                      suggestions.map(({ id, description, formattedSuggestion }) => (
                        <PlacesListItem
                          key={id}
                          description={description}
                          mainText={formattedSuggestion.mainText}
                          secondaryText={formattedSuggestion.secondaryText}
                          onClick={setSelectedLocation}
                          getOtherProps={getSuggestionItemProps}
                        />
                      ))
                    }
                  </div>
                )
              }
            </PlacesAutoComplete>
          }
        </div>
      </CSSTransitionGroup>
    </React.Fragment>
  );
};
