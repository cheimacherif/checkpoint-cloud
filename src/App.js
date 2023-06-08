
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const App = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;