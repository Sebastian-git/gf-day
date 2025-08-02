import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer, 
         List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { path: '/memories', label: 'Memories 📸' },
  { path: '/', label: 'Home 🏠' },
  { path: '/future', label: 'Future Dreams ✨' },
];

const Navigation = ({ onMemoriesClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleItemClick = (path) => {
    if (path === '/memories' && onMemoriesClick) {
      onMemoriesClick();
    }
  };

  const NavItems = () => (
    <>
      {navigation.map((item) => (
        <ListItem
          key={item.path}
          component={Link}
          to={item.path}
          onClick={() => handleItemClick(item.path)}
          sx={{
            transition: 'all 0.3s ease',
            backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.15)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <ListItemText
            primary={item.label}
            sx={{
              color: 'text.primary',
              '.MuiListItemText-primary': {
                fontSize: '1rem',
                fontWeight: location.pathname === item.path ? 600 : 400,
              },
            }}
          />
        </ListItem>
      ))}
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #7A9BB1 0%, #94B5CC 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          '& .MuiToolbar-root': {
            padding: 0,
            minHeight: '70px',
          },
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
            </>
          ) : (
            <List 
              sx={{ 
                display: 'flex', 
                width: '100%', 
                justifyContent: 'center',
                p: 0,
                '& .MuiListItem-root': {
                  borderRadius: 1,
                  px: 3,
                  mx: 2
                }
              }}>
              <NavItems />
            </List>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List onClick={() => setDrawerOpen(false)}>
          <NavItems />
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
