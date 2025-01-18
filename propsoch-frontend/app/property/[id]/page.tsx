'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { mockPropertyData, Property } from '@/data/mockPropertyData';
import { CircularProgress } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '10px',
};

const PropertyDetailPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const property = mockPropertyData.find(item => item.id === parseInt(id));
      setProperty(property || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ position: 'relative', display:'flex', justifyContent:'center' }}>
        <img src={property.images[0]} alt={property.title} style={{ width: '349px', height: '486px', borderRadius: '16px' }} />
        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>Most Liked</p>
        </div>
      </div>
      <div style={{marginTop:'20px'}}>
      <div style={{ fontSize: '25px', fontWeight:'500px' }}>{property.title}</div>
      <p style={{ fontSize: '18px', marginTop: '5px' }}>{property.price}</p>
      <p style={{ fontSize: '14px', marginTop: '5px' }}>{property.location}</p>
      <p style={{ fontSize: '14px', marginTop: '5px' }}>{property.availability}</p>
      </div>
      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>Location</h3>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={property.coordinates} zoom={15}>
          <Marker position={property.coordinates} />
        </GoogleMap>
      </LoadScript>
      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>Property Amenities</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {property.amenities.map((amenity, index) => (
          <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}>
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailPage;
