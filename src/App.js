import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import MemoryGallery from './pages/MemoryGallery';
import Future from './pages/Future';
import KirbyCursor from './components/effects/KirbyCursor';
import Snowfall from './components/effects/Snowfall';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const audioPlayerRef = React.useRef();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/gf-day/">
        <Box>
          <KirbyCursor />
          <Snowfall />
          <Navigation onMemoriesClick={() => audioPlayerRef.current?.play()} />
          <AudioPlayer ref={audioPlayerRef} />
          <Box sx={{ mt: 0 }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/memories" element={<MemoryGallery />} />
              <Route path="/future" element={<Future />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
