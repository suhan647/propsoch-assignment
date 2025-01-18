'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockPropertyData, Property } from '@/data/mockPropertyData';
import { CircularProgress } from '@mui/material';
import { FaLocationDot } from "react-icons/fa6";
import Map from '@/components/Map';


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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', marginBottom:'40px' }}>
      <div style={{ position: 'relative', display:'flex', justifyContent:'center' }}>
        <img src={property.images[0]} alt={property.title} style={{ width: '389px', height: '486px', borderRadius: '16px' }} />
        <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>Most Liked</p>
        </div>
      </div>

      <div style={{marginTop:'20px', width:"100%"}}>

        <div style={{display:'flex', justifyContent:'space-between',fontSize: '25px',fontWeight:'500px',marginTop: '5px'}}>
      <div>{property.title}</div>
      <div>{property.price}</div>
      </div>

      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{ fontSize: '12px', marginTop: '5px', color:'#888888' }}><FaLocationDot color='black' style={{marginRight:'10px'}} ></FaLocationDot>{property.location}</div>
      <div style={{ fontSize: '12px', marginTop: '5px', color:'#888888', display:'flex', alignItems:'ceenter', gap:'10px' }}>{property.availability}</div>
      </div>

      </div>
      <div style ={{marginTop:"30px"}}>
        <Map />
      </div>
      <h3 style={{ fontSize: '18px', marginTop: '20px' }}>Property Amenities</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px', marginBottom:'40px' }}>
        {property.amenities.map((amenity, index) => (
          <div key={index} style={{padding:'10px', backgroundColor: '#f0f0f0', borderRadius: '50px', fontWeight:'500', fontSize:'10px', color:'#252B5C' }}>
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailPage;
