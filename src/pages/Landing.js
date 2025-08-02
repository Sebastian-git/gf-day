import React from 'react';
import { Box, Typography, Container, keyframes } from '@mui/material';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const wave = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
`;

const Landing = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #8BACC2 0%, #A3C4D9 100%)',
      }}
    >
      {/* Penguin Images */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '65%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 4,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            animation: `${float} 3s ease-in-out infinite`,
            transform: 'rotate(-5deg)',
          }}
        >
          <Box
            component="img"
            src={process.env.PUBLIC_URL + "/images/penguin-seb.png"}
            alt="Sebastian Penguin"
            sx={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            animation: `${float} 3s ease-in-out infinite`,
            animationDelay: '1.5s',
            transform: 'rotate(5deg)',
          }}
        >
          <Box
            component="img"
            src={process.env.PUBLIC_URL + "/images/penguin-tiff.png"}
            alt="Tiffany Penguin"
            sx={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
            }}
          />
        </Box>
      </Box>
      {/* Animated waves */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200%',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.2)',
          animation: `${wave} 7s linear infinite`,
          transformOrigin: 'center bottom',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '0px',
          left: 0,
          width: '200%',
          height: '85px',
          background: 'rgba(255, 255, 255, 0.3)',
          animation: `${wave} 5s linear infinite`,
          transformOrigin: 'center bottom',
        }}
      />

      {/* Main content */}
      <Container
        maxWidth="md"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >

        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: 'text.primary',
            fontSize: { xs: '2rem', md: '3rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Hi Tiff (wifey) 🐧💙
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: 'text.primary',
            fontSize: { xs: '1.5rem', md: '2rem' },
            maxWidth: '600px',
          }}
        >
          Welcome to our little world
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: '500px',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Built by your software penguin with love. Here's to all our memories and
          the adventures still to come. 💕
        </Typography>
      </Container>
    </Box>
  );
};

export default Landing;
