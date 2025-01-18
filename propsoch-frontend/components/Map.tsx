import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { CiLocationOn } from "react-icons/ci";

// Map container style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// coordinates
const Coordinates = {
  lat: 13.3185, // Latitude
  lng: 75.7724, // Longitude
};


function Map() {
  return (
    <>
     <div style={{ fontSize: '18px', fontWeight:'700', marginTop: '20px', marginBottom:'20px' }}>Location</div>
     <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom:'20px' }}>
      <div style={{ backgroundColor: '#FF750426', borderRadius: '100%', width: '51px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CiLocationOn color="black" size={16} />
      </div>
      <div style={{ fontWeight: 400, fontSize: '12px', color: '#53587A' }}>
        Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277
      </div>
    </div>
    <LoadScript googleMapsApiKey="AIzaSyBPtfqMSNiaUdz-6x6X45N7wKnCUvv9lAg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={Coordinates}
        zoom={12} 
      >
        <Marker position={Coordinates} />
      </GoogleMap>
    </LoadScript>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', fontWeight:'600px', fontSize:'10px', color:'#1F4C6B' }}>
      <div style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', borderRadius: '5px', textAlign: 'center' }}>
        2 Hospitals
      </div>
      <div style={{ padding: '10px 20px', backgroundColor: '#e0f7fa', borderRadius: '5px', textAlign: 'center', }}>
        4 Gas Stations
      </div>
      <div style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', borderRadius: '5px', textAlign: 'center' }}>
        2 Schools
      </div>
    </div>

    </>
  );
}

export default Map;