import React from 'react';
import { Box, keyframes } from '@mui/material';

const fall = keyframes`
  0% {
    transform: translateY(-10%) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
`;

const Snowfall = () => {
  // Create an array of snowflakes with random properties
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 5}s`,
    size: `${Math.random() * 10 + 5}px`,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {snowflakes.map((flake) => (
        <Box
          key={flake.id}
          sx={{
            position: 'absolute',
            width: flake.size,
            height: flake.size,
            background: '#FFFFFF',
            borderRadius: '50%',
            left: flake.left,
            top: '-10px',
            opacity: flake.opacity * 0.9,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            animation: `${fall} ${flake.duration} linear infinite`,
            animationDelay: flake.delay,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            filter: 'blur(1px)',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, white 30%, transparent 70%)',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default Snowfall;
