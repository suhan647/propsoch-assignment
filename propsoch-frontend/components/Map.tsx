import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Chikmagalur coordinates
const chikmagalurCoordinates = {
  lat: 13.3185, // Latitude
  lng: 75.7724, // Longitude
};


function Map() {
  return (
    <>
     <div style={{ fontSize: '18px', fontWeight:'700', marginTop: '20px', marginBottom:'20px' }}>Location</div>
    <LoadScript googleMapsApiKey="AIzaSyBPtfqMSNiaUdz-6x6X45N7wKnCUvv9lAg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={chikmagalurCoordinates}
        zoom={12} 
      >
        <Marker position={chikmagalurCoordinates} />
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default Map;