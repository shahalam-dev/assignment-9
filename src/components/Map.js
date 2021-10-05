import GoogleMapReact from "google-map-react";
import React from "react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 23.810331,
      lng: 23.810331,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCy-AMPkBYBuMWDSAMOt1Bugln60EBnbKE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
