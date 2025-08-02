import React from 'react';
import { Box, Container, Grid, Card, CardMedia, Typography, Fade } from '@mui/material';

const memories = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/images/image1.jpg',
    date: 'CEED Banquet - Nov 18, 2022',
    message: 'We both just got into UCLA and looked very professional! 🎓',
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/images/image2.jpg',
    date: 'Before Disaster - Dec 1, 2022',
    message: 'I loved wearing that beanie, right before we died at the ski trip 🏔️',
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/images/image3.jpg',
    date: 'Snowboarding - Jan 16, 2023',
    message: 'Our first of many snowboarding trips together! 🏂',
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + '/images/image4.jpg',
    date: 'Boxing Class - Feb 16, 2023',
    message: 'The first time we tried boxing together (I really loved trying random stuff like this :3) 🥊',
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + '/images/image5.jpg',
    date: 'Gym Day - April 16, 2023',
    message: 'I love working out with you, you\'re my favorite spotter 💪',
  },
  {
    id: 6,
    image: process.env.PUBLIC_URL + '/images/image6.jpg',
    date: 'Undie Run - June 15, 2023',
    message: 'Our first Undie Run together (sorry I didn\'t have real abs lol) 🏃‍♂️',
  },
  {
    id: 7,
    image: process.env.PUBLIC_URL + '/images/image7.jpg',
    date: 'Yamashiro Dinner - Jan 9, 2024',
    message: 'We got to eat at Yamashiro together for free (Heidi muahahaha) 🍣',
  },
  {
    id: 8,
    image: process.env.PUBLIC_URL + '/images/image8.jpg',
    date: 'Chilling at Home - March 21, 2024',
    message: 'I know this is a random picture, but I really miss just doing nothing but relaxing with you 🏡',
  },
  {
    id: 9,
    image: process.env.PUBLIC_URL + '/images/image9.jpg',
    date: 'Mammoth Mountain - May 25, 2024',
    message: 'You finally got to see me climbing outdoors! 🧗‍♂️ We really need another trip like this',
  },
  {
    id: 10,
    image: process.env.PUBLIC_URL + '/images/image10.jpg',
    date: 'Graduating UCLA - June 15, 2024',
    message: 'Sometimes I just stare at this picture, you\'re absolutely gorgeous and I\'m so proud of you for finishing your undergrad on the hardest major! 🎓',
  },
  {
    id: 11,
    image: process.env.PUBLIC_URL + '/images/image11.jpg',
    date: 'NY Halloween - October 31, 2024',
    message: 'You have no idea how much I appreciate you coming out for Halloween with me, I\'ve wanted to do this for years 🎃',
  },
  {
    id: 12,
    image: process.env.PUBLIC_URL + '/images/image12.jpg',
    date: 'Central Park - November 2, 2024',
    message: 'We already look like an old married couple in this, we should recreate it in 10 years! 🏞️',
  },
  {
    id: 13,
    image: process.env.PUBLIC_URL + '/images/image13.jpg',
    date: 'Francie Brooklyn - February 17, 2025',
    message: 'Happy Valentines Day to the best girlfriend in the world, I love you so much! 💖',
  },
  {
    id: 14,
    image: process.env.PUBLIC_URL + '/images/image14.jpg',
    date: 'Undie Run #3 - June 12, 2025',
    message: 'I can\'t believe we\'ve done this 3 times now, I love you so much and I\'m so glad we can do this together! 🏃‍♀️',
  },
  {
    id: 15,
    image: process.env.PUBLIC_URL + '/images/image15.jpg',
    date: '22 @Haidilao - June 12, 2025',
    message: 'Happy 22nd birthday to the best girlfriend in the world, I love you so much! 🎉',
  },
];

const MemoryGallery = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #8BACC2 0%, #A3C4D9 100%)',
        pb: 0,
        pt: 4,
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {[1, 2, 3, 4].map((num) => (
          <Box
            key={num}
            sx={{
              position: 'absolute',
              left: -180,
              top: `${-5 + (num * 17)}%`,  // Starts at 15% and spaces by 20%
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={process.env.PUBLIC_URL + `/images/penguin-seb-${num}.png`}
              alt={`Penguin Seb ${num}`}
              sx={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                animation: `${num % 2 === 0 ? 'float 3s ease-in-out infinite' : 'float 3s ease-in-out infinite 1.5s'}`,
                transform: num % 2 === 0 ? 'rotate(-5deg)' : 'rotate(5deg)',
                opacity: 0.9,
              }}
            />
          </Box>
        ))}
        <Typography
          variant="h1"
          sx={{
            mt: 10,
            textAlign: 'center',
            mb: 6,
            color: 'text.primary',
          }}
        >
          Our Memories 📸
        </Typography>
        <Grid container spacing={4} sx={{ pb: 4 }}>
          {memories.map((memory) => (
            <Grid item xs={12} sm={6} md={4} key={memory.id}>
              <Fade in timeout={500}>
                <Card
                  sx={{
                    position: 'relative',
                    transform: 'rotate(-2deg)',
                    background: 'linear-gradient(145deg, #A3C4D9 0%, #8BACC2 100%)',
                    '&:nth-of-type(2n)': {
                      transform: 'rotate(2deg)',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      width: '80px',
                      height: '25px',
                      background: '#FFD3B6',
                      transform: 'translateX(-50%) rotate(-2deg)',
                      borderRadius: '3px',
                      opacity: 0.7,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={memory.image}
                    alt={memory.date}
                    loading="lazy"
                    sx={{
                      width: "300px",
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'rgba(255,255,255,0.9)',
                      p: 2,
                      backdropFilter: 'blur(5px)',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {memory.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {memory.message}
                    </Typography>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MemoryGallery;
