import React, { useState, useEffect, useRef } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Script from 'react-load-script';
import PlacesAutoComplete from 'react-places-autocomplete';
import { getPlacePredictionsForSearchQuery, geoCodeLocation } from '~/utils';
import { useAppContext } from '~/modules/app/contextProvider';
import PlacesListItem from './predictedPlacesListItem';
import './style.scss';

export default ({ setShowSideBar }) => {
  const inputRef = useRef();
  const [isGoogleLibraryScriptLoaded, setGoogleLibraryScriptLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [predictedPlaces, setPredictedPlaces] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [contextValue, dispatch] = useAppContext();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [isGoogleLibraryScriptLoaded]);

  useEffect(() => {
    async function getGeoCodeForLocationDescription() {
      const geoCodeData = await geoCodeLocation(selectedLocation.description);
      // TODO: handle error with a toast
      const locationData = { ...selectedLocation, ...geoCodeData };
      dispatch({ type: 'UPDATE_USER_LOCATION', payload: locationData });
      setShowSideBar(false);
    }

    if (selectedLocation) {
      getGeoCodeForLocationDescription();
    }
  }, [selectedLocation]);

  useEffect(() => {
    async function fetchPlacePredictions() {
      const predictedPlaces = await getPlacePredictionsForSearchQuery(searchQuery);
      // const predictedPlaces = [{"description":"Hoodi, Bengaluru, Karnataka, India","id":"a1758953c7c119248ecd304c7dec68f82240f4be","matched_substrings":[{"length":5,"offset":0}],"place_id":"ChIJD1FpvJMRrjsRSPg6XJzpz5I","reference":"ChIJD1FpvJMRrjsRSPg6XJzpz5I","structured_formatting":{"main_text":"Hoodi","main_text_matched_substrings":[{"length":5,"offset":0}],"secondary_text":"Bengaluru, Karnataka, India"},"terms":[{"offset":0,"value":"Hoodi"},{"offset":7,"value":"Bengaluru"},{"offset":18,"value":"Karnataka"},{"offset":29,"value":"India"}],"types":["sublocality_level_1","sublocality","political","geocode"]},{"description":"Hoodi Circle, Hudi, Hoodi, Bengaluru, Karnataka","id":"842baaee797b33f4fcfb8fc7e59673f2165be2c8","matched_substrings":[{"length":5,"offset":0}],"place_id":"ChIJo9-yhZYRrjsRj_kOH3SYkXg","reference":"ChIJo9-yhZYRrjsRj_kOH3SYkXg","structured_formatting":{"main_text":"Hoodi Circle","main_text_matched_substrings":[{"length":5,"offset":0}],"secondary_text":"Hudi, Hoodi, Bengaluru, Karnataka"},"terms":[{"offset":0,"value":"Hoodi Circle"},{"offset":14,"value":"Hudi"},{"offset":20,"value":"Hoodi"},{"offset":27,"value":"Bengaluru"},{"offset":38,"value":"Karnataka"}],"types":["geocode"]},{"description":"Hoodi Main Road, Doddanakundi Industrial Area 2, Seetharampalya, Hoodi, Bengaluru, Karnataka, India","id":"662faaadc7a0510179a2d62dbee8905313b645a7","matched_substrings":[{"length":5,"offset":0}],"place_id":"EmNIb29kaSBNYWluIFJvYWQsIERvZGRhbmFrdW5kaSBJbmR1c3RyaWFsIEFyZWEgMiwgU2VldGhhcmFtcGFseWEsIEhvb2RpLCBCZW5nYWx1cnUsIEthcm5hdGFrYSwgSW5kaWEiLiosChQKEgm38NM0lhGuOxHUMCJHB3CMYRIUChIJafocaIYRrjsRhlNwCtb_gDM","reference":"EmNIb29kaSBNYWluIFJvYWQsIERvZGRhbmFrdW5kaSBJbmR1c3RyaWFsIEFyZWEgMiwgU2VldGhhcmFtcGFseWEsIEhvb2RpLCBCZW5nYWx1cnUsIEthcm5hdGFrYSwgSW5kaWEiLiosChQKEgm38NM0lhGuOxHUMCJHB3CMYRIUChIJafocaIYRrjsRhlNwCtb_gDM","structured_formatting":{"main_text":"Hoodi Main Road","main_text_matched_substrings":[{"length":5,"offset":0}],"secondary_text":"Doddanakundi Industrial Area 2, Seetharampalya, Hoodi, Bengaluru, Karnataka, India"},"terms":[{"offset":0,"value":"Hoodi Main Road"},{"offset":17,"value":"Doddanakundi Industrial Area 2"},{"offset":49,"value":"Seetharampalya"},{"offset":65,"value":"Hoodi"},{"offset":72,"value":"Bengaluru"},{"offset":83,"value":"Karnataka"},{"offset":94,"value":"India"}],"types":["route","geocode"]},{"description":"Hoodi Railway Flyover, Ayyappa Nagar, Krishnarajapura, Bengaluru, Karnataka, India","id":"28bf0da9100f37619b33932ec08d3ca73488aad8","matched_substrings":[{"length":5,"offset":0}],"place_id":"ElJIb29kaSBSYWlsd2F5IEZseW92ZXIsIEF5eWFwcGEgTmFnYXIsIEtyaXNobmFyYWphcHVyYSwgQmVuZ2FsdXJ1LCBLYXJuYXRha2EsIEluZGlhIi4qLAoUChIJxSyEE74RrjsRlZog5_NcXScSFAoSCdE62hC8Ea47Ea-P6hWuOAmP","reference":"ElJIb29kaSBSYWlsd2F5IEZseW92ZXIsIEF5eWFwcGEgTmFnYXIsIEtyaXNobmFyYWphcHVyYSwgQmVuZ2FsdXJ1LCBLYXJuYXRha2EsIEluZGlhIi4qLAoUChIJxSyEE74RrjsRlZog5_NcXScSFAoSCdE62hC8Ea47Ea-P6hWuOAmP","structured_formatting":{"main_text":"Hoodi Railway Flyover","main_text_matched_substrings":[{"length":5,"offset":0}],"secondary_text":"Ayyappa Nagar, Krishnarajapura, Bengaluru, Karnataka, India"},"terms":[{"offset":0,"value":"Hoodi Railway Flyover"},{"offset":23,"value":"Ayyappa Nagar"},{"offset":38,"value":"Krishnarajapura"},{"offset":55,"value":"Bengaluru"},{"offset":66,"value":"Karnataka"},{"offset":77,"value":"India"}],"types":["route","geocode"]},{"description":"Hoodieku, Jalan Cinere Raya, Cinere, Depok City, West Java, Indonesia","id":"e3bc5be4356e42eb0f0639db530f068391aaa4ca","matched_substrings":[{"length":5,"offset":0}],"place_id":"ChIJ51ysh_zuaS4RB8khdMprhGQ","reference":"ChIJ51ysh_zuaS4RB8khdMprhGQ","structured_formatting":{"main_text":"Hoodieku","main_text_matched_substrings":[{"length":5,"offset":0}],"secondary_text":"Jalan Cinere Raya, Cinere, Depok City, West Java, Indonesia"},"terms":[{"offset":0,"value":"Hoodieku"},{"offset":10,"value":"Jalan Cinere Raya"},{"offset":29,"value":"Cinere"},{"offset":37,"value":"Depok City"},{"offset":49,"value":"West Java"},{"offset":60,"value":"Indonesia"}],"types":["point_of_interest","establishment"]}];
      setPredictedPlaces(predictedPlaces);
    }
    let deferTimeout;

    if (searchQuery.length > 2) {
      deferTimeout = setTimeout(fetchPlacePredictions, 1000);
    }

    return () => clearTimeout(deferTimeout);
  }, [searchQuery]);
  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`
  const handleScriptLoad = () => setGoogleLibraryScriptLoaded(true);

   return (
    <React.Fragment>
      <Script url={scriptUrl}
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
          {/* <div className="input-wrapper">
            <input
              ref={inputRef}
              className="search-input"
              placeholder="Search for area, street name..."
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            />
          </div> */}
          {/* {
            predictedPlaces.map(({ id, description, structured_formatting }) => (
              <PlacesListItem
                key={id}
                description={description}
                mainText={structured_formatting.main_text}
                secondaryText={structured_formatting.secondary_text}
                onClick={setSelectedLocation}
              />
              ))
          } */}
          {
            isGoogleLibraryScriptLoaded && 
            <PlacesAutoComplete
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            >
              {
                ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <div className="input-wrapper">
                      <input
                        ref={inputRef}
                        {
                          ...getInputProps({
                            className: "search-input",
                            placeholder: "Search for area, street name..."
                          })
                        }
                      />
                    </div>
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
