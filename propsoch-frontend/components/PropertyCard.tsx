'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { AiOutlineEye, AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PropertyCard({ properties }: any) {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/property/${id}`);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="space-between"
      sx={{ borderRadius: 30 }}
    >
      {properties.map((property: any) => (
        <Box
          key={property.id}
          onClick={() => handleCardClick(property.id)}
          sx={{
            width: { xs: 'calc(50% - 8px)', sm: 'calc(33.33% - 8px)', md: 'calc(25% - 8px)' },
            height: '360px',
            maxWidth: '177px',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <ImageCarousel images={property.images} propertyId={property.id} />
          <Box padding={1} display="flex" flexDirection="column" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <AiOutlineEye size={15} />
                <Typography fontSize={12} color='#888888' fontWeight={300}>
                  {property.views}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <AiFillStar size={15} color="#278717" />
                <Typography fontSize={12} color='#278717' fontWeight={300}>
                  {property.rating}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" sx={{fontWeight:600, fontSize:12}}>
              {property.title}
            </Typography>
            <Typography variant="body2" color="#888888" sx={{position:'absolute', bottom:"20px", fontWeight:300, fontSize:10}}>
              {property.date}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function ImageCarousel({ images, propertyId }: any) {
  const [toggle, setToggle] = useState(false);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setToggle(!toggle);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: 0.5,
        }}
      ></div>
    ),
    beforeChange: (current: number, next: number) => {
      const dots = document.querySelectorAll('.slick-dots li div');
      dots.forEach((dot, index) => {
        if (index === next) {
          (dot as HTMLElement).style.opacity = '1';
        } else {
          (dot as HTMLElement).style.opacity = '0.5';
        }
      });
    },
  };

  return (
    <Box position="relative" sx={{ borderRadius: 30 }}>
      <Slider {...settings}>
        {images.map((image: any, index: any) => (
          <Box key={index} position="relative">
            <Image
              src={image}
              alt={`Property image ${index + 1}`}
              width={176.5}
              height={246}
              style={{
                borderRadius: '16px',
                objectFit: 'cover',
                width: '176.5px',
                height: '246px',
              }}
            />

            <Box
              onClick={handleHeartClick}
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <Image
                src={toggle ? "/images/heart-red.png" : "/images/heart.png"}
                width={24}
                height={24}
                alt="heart"
                style={{ color: 'black' }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '4px 8px',
              }}
            >
              <Typography fontSize={12} fontWeight={500}>
                Most Liked
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PropertyCard;