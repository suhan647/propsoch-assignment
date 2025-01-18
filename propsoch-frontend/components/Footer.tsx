'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';

const Footer = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('explore'); 

  const handleTabClick = (tab: string, route: string) => {
    setActiveTab(tab); 
    if (route) router.push(route);
  };

  const getIconColor = (tab: string) => (activeTab === tab ? '#FFA500' : '#222222');

  return (
    <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0, color: '#222222' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Explore Tab */}
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onClick={() => handleTabClick('explore', '/')}
        >
          <IconButton>
            <IoSearchOutline color={getIconColor('explore')} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: getIconColor('explore') }}
          >
            Explore
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onClick={() => handleTabClick('wishlists', '')}
        >
          <IconButton>
            <CiHeart color={getIconColor('wishlists')} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: getIconColor('wishlists') }}
          >
            Wishlists
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onClick={() => handleTabClick('map', '')}
        >
          <IconButton>
            <CiLocationOn color={getIconColor('map')} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: getIconColor('map') }}
          >
            Show map
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onClick={() => handleTabClick('login', '')}
        >
          <IconButton>
            <LuUser color={getIconColor('login')} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: getIconColor('login') }}
          >
            Log in
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

