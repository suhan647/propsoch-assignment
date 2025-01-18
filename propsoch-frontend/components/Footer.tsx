import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { FaSearch, FaHeart, FaMapMarkedAlt, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0, backgroundColor: '#f5f5f5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="inherit">
            <FaSearch />
          </IconButton>
          <Typography variant="caption">Explore</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="inherit">
            <FaHeart />
          </IconButton>
          <Typography variant="caption">Wishlists</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="inherit">
            <FaMapMarkedAlt />
          </IconButton>
          <Typography variant="caption">Show map</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton color="inherit">
            <FaUser />
          </IconButton>
          <Typography variant="caption">Log in</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
