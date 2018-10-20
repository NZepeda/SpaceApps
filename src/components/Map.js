import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

const getCircleOptions = (
  lat = 40.73061,
  lng = -73.935242,
  radius = Math.sqrt(1000) * 100
) => {
  return {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 0.35,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    center: { lat, lng },
    radius: radius
  };
};
const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.73061, lng: -73.935242 }}
    >
      <Circle options={getCircleOptions()} />
    </GoogleMap>
  ))
);

Map.defaultProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOOhhv1qEQ3UAT83137FmiMUfJhzGw27U&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

export default Map;
