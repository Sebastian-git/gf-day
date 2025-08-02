import React, { useState, useEffect } from 'react';
import { Box, Typography, keyframes } from '@mui/material';

const bounce = keyframes`
  0%, 100% { transform: scale(1) translate(-50%, -50%); }
  50% { transform: scale(1.1) translate(-50%, -50%); }
`;

const inhale = keyframes`
  0% { transform: scale(1) translate(-50%, -50%); }
  50% { transform: scale(1.3) translate(-50%, -50%); }
  100% { transform: scale(1) translate(-50%, -50%); }
`;

const KirbyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInhaling, setIsInhaling] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    '(｡♥‿♥｡)',
    'poyo~♪',
    '*nom nom*',
    '(◕‿◕✿)',
    '💕✨',
    'hiiii~'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 20, y: e.clientY + 20 }); // Offset to bottom-right of cursor
    };

    const handleClick = () => {
      setIsInhaling(true);
      setShowMessage(true);
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      setTimeout(() => {
        setIsInhaling(false);
        setTimeout(() => setShowMessage(false), 1000);
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(0, 0)',
          animation: isInhaling 
            ? `${inhale} 0.5s ease-in-out`
            : `${bounce} 2s ease-in-out infinite`,
          cursor: 'none',
        }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "/images/kirby-cursor.png"}
          alt="Kirby Cursor"
          sx={{
            width: '40px',
            height: '40px',
          }}
        />
        {showMessage && (
          <Typography
            sx={{
              position: 'absolute',
              top: '45px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              animation: `${bounce} 1s ease-in-out`,
              fontSize: '1rem',
              color: '#FF69B4',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default KirbyCursor;
