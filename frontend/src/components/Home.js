import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Blogs from './Blogs';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', position: 'relative' }}>
      {/* Soothing Background Elements */}
      <div className="floating-shapes">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`floating-shape-${i}`}
            className="floating-shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              backgroundColor: ['#E8EAF6', '#F3E5F5', '#E0F2F1', '#FFF3E0'][Math.floor(Math.random() * 4)],
            }}
          />
        ))}
      </div>

      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <ScrollToTop />
    </Box>
  );
};

export default Home;
