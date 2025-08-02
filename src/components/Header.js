import React from 'react';
import { AppBar, Box, Typography, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', py: 2 }}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h1" 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              color: 'primary.main',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Happy National Girlfriend Day! 🐧💕
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
