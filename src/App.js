import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import MemoryGallery from './pages/MemoryGallery';
import Journey from './pages/Journey';
import Future from './pages/Future';
import KirbyCursor from './components/effects/KirbyCursor';
import Snowfall from './components/effects/Snowfall';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box>
          <KirbyCursor />
          <Snowfall />
          <Navigation />
          <Box sx={{ mt: 8, mb: 0 }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/memories" element={<MemoryGallery />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/future" element={<Future />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
