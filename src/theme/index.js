import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#B8E0F6', // Light blue (penguin-inspired)
      light: '#D8F1FF',
      dark: '#89CFF0',
    },
    secondary: {
      main: '#FFF3F3', // Soft cream
      light: '#FFFFFF',
      dark: '#FFE6E6',
    },
    accent: {
      main: '#A3D2CA', // Mint green
      light: '#B8E0D9',
      dark: '#8EC4BB',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#FF96A1', // Hello Kitty pink
    },
  },
  typography: {
    fontFamily: "'Quicksand', 'Nunito', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#2C3E50',
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#2C3E50',
      letterSpacing: '0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#2C3E50',
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1.1rem',
      color: '#34495E',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '1rem',
      color: '#34495E',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          padding: '8px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundImage: 'none',
        },
      },
    },
  },
});
