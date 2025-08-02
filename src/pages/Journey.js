import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, 
         TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TranslateIcon from '@mui/icons-material/Translate';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const timelineEvents = [
  {
    icon: <SchoolIcon />,
    title: 'We met at UCLA...',
    description: 'Two chemistry majors, one destiny 🧪',
    color: '#4FC3F7'
  },
  {
    icon: <LocalCafeIcon />,
    title: 'Late Night Study Sessions',
    description: 'Boba breaks and chemistry homework 🧋',
    color: '#FFB74D'
  },
  {
    icon: <FavoriteIcon />,
    title: 'Growing Closer',
    description: 'Every day better than the last 💕',
    color: '#FF8A65'
  },
  {
    icon: <TranslateIcon />,
    title: 'Learning Together',
    description: 'You teaching me Mandarin, me teaching you coding 📚',
    color: '#81C784'
  },
  {
    icon: <AutoAwesomeIcon />,
    title: 'Our Journey Continues',
    description: 'You inspire me every day 💙',
    color: '#BA68C8'
  }
];

const Journey = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #B8E0F6 0%, #FFF3F3 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.primary',
          }}
        >
          Our Journey 💫
        </Typography>
        
        <Timeline position="alternate">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: event.color }}>
                  {event.icon}
                </TimelineDot>
                {index < timelineEvents.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: event.color }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 4,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Typography variant="h6" component="h3" color="text.primary" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {event.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Journey;
