import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, 
         CardContent, Fade } from '@mui/material';

const dreams = [
  {
    image: '/images/japan.jpg',
    title: 'Japan',
    description: 'Coming soon!!'
  },
  {
    image: '/images/antartica.png',
    title: 'Antartica',
    description: 'Watching the sun paint the sky in pastels'
  },
  {
    image: '/images/iceland.png',
    title: 'Iceland',
    description: 'Chasing auroras in the Arctic'
  },
  // Add more future dreams here
];

const Future = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #8BACC2 0%, #A3C4D9 100%)',
        py: 8,
        position: 'relative',
      }}
    >
      {/* Starry background effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: 'text.primary',
          }}
        >
          Our Future Adventures ✨
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Every end is just a new beginning, and our story has so many chapters yet to be written...
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {dreams.map((dream, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Fade in timeout={500 + index * 200} sx={{ width: '100%' }}>
                <Card
                  sx={{
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400px"
                    image={process.env.PUBLIC_URL + dream.image}
                    alt={dream.title}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {dream.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dream.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 4,
            borderRadius: 4,
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontStyle: 'italic',
              color: 'text.primary',
              mb: 2,
            }}
          >
            "One day, when the stars align and the time is right..."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
            }}
          >
            I hope to ask you something under a sky full of stars. 💍✨
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Future;
