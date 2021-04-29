import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import config from '../config';

function MapComponent(props) {
  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel);
  const [state, setState] = useState({
    activeMarker: {},
    text: ''
  });

  const onMarkerClick = (marker) => {

    setState({
      ...state,
      activeMarker: marker,
      showingInfoWindow: true,
      text: marker.text || ''
    });
  };

  return (
    <div className='map'>
      <Map
        google={props.google}
        zoom={zoomLevel}
        disableDefaultUI={config.useDefaultUI}
        initialCenter={{
          lat: props.latitude,
          lng: props.longitude
        }}
      >
        <Marker
          position={{ lat: props.latitude, lng: props.longitude }}
          icon={props.googleMapsMarkerIcon}
          onClick={onMarkerClick}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent);