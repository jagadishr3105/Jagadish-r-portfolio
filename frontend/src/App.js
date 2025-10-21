import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ArticleTemplate from './components/ArticleTemplate';
import './App.css';

const soothingTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6B73FF', // Soft blue
      light: '#9BB5FF',
      dark: '#4A52CC',
    },
    secondary: {
      main: '#81C784', // Soft green
      light: '#A5D6A7',
      dark: '#66BB6A',
    },
    background: {
      default: '#FAFBFC', // Off-white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Soft dark blue
      secondary: '#7F8C8D', // Soft gray
    },
    accent: {
      lavender: '#E8EAF6',
      sandy: '#F5F5DC',
      pastel: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: '"Lato", "Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 300,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(107, 115, 255, 0.1)',
    '0px 4px 16px rgba(107, 115, 255, 0.12)',
    '0px 8px 24px rgba(107, 115, 255, 0.15)',
    '0px 12px 32px rgba(107, 115, 255, 0.18)',
    '0px 16px 40px rgba(107, 115, 255, 0.2)',
    '0px 20px 48px rgba(107, 115, 255, 0.22)',
    '0px 24px 56px rgba(107, 115, 255, 0.24)',
    '0px 28px 64px rgba(107, 115, 255, 0.26)',
    '0px 32px 72px rgba(107, 115, 255, 0.28)',
    '0px 36px 80px rgba(107, 115, 255, 0.3)',
    '0px 40px 88px rgba(107, 115, 255, 0.32)',
    '0px 44px 96px rgba(107, 115, 255, 0.34)',
    '0px 48px 104px rgba(107, 115, 255, 0.36)',
    '0px 52px 112px rgba(107, 115, 255, 0.38)',
    '0px 56px 120px rgba(107, 115, 255, 0.4)',
    '0px 60px 128px rgba(107, 115, 255, 0.42)',
    '0px 64px 136px rgba(107, 115, 255, 0.44)',
    '0px 68px 144px rgba(107, 115, 255, 0.46)',
    '0px 72px 152px rgba(107, 115, 255, 0.48)',
    '0px 76px 160px rgba(107, 115, 255, 0.5)',
    '0px 80px 168px rgba(107, 115, 255, 0.52)',
    '0px 84px 176px rgba(107, 115, 255, 0.54)',
    '0px 88px 184px rgba(107, 115, 255, 0.56)',
    '0px 92px 192px rgba(107, 115, 255, 0.58)',
  ],
});

function App() {
  return (
    <ThemeProvider theme={soothingTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', position: 'relative' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<ArticleTemplate />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;