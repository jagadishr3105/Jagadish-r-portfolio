import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
  Chip,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/jagadish-ravulapalli/',
      label: 'LinkedIn',
      color: '#0077B5',
    },
    {
      icon: <GitHub />,
      href: 'https://github.com/jagadishr3105',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: <Email />,
      href: 'mailto:jagadishr3105@gmail.com',
      label: 'Email',
      color: '#6B73FF',
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            py: 8,
            textAlign: 'center',
          }}
        >
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#4CAF50',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 1 },
                        '50%': { opacity: 0.5 },
                        '100%': { opacity: 1 },
                      },
                    }}
                  />
                  Available for Opportunities
                </Box>
              }
              sx={{
                background: 'transparent',
                color: 'text.primary',
                fontWeight: 500,
                fontSize: '0.9rem',
                px: 3,
                py: 1,
                mb: 3,
                border: '2px solid #6B73FF',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: 'rgba(107, 115, 255, 0.1)',
                },
              }}
            />
          </motion.div>

          {/* Main Content */}
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 400,
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Hello, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 300,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  lineHeight: 1.1,
                  color: 'text.primary',
                }}
              >
                <span className="gradient-text">Jagadish R</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.2,
                }}
              >
                Data Analyst & <span style={{ color: '#6B73FF' }}>Insights Expert</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '600px',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  mx: 'auto',
                  fontWeight: 400,
                }}
              >
                I transform complex data into actionable insights that drive business growth. 
                With a passion for uncovering hidden patterns and creating meaningful visualizations, 
                I help organizations make data-driven decisions with confidence and clarity.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                sx={{ mb: 6 }}
                flexWrap="wrap"
              >
                <Button
                  className="soft-button-outline"
                  size="large"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '25px',
                  }}
                >
                  View My Work
                </Button>
                <Button
                  className="soft-button-outline"
                  size="large"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: '25px',
                  }}
                >
                  Get In Touch
                </Button>
              </Stack>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: link.color,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(107, 115, 255, 0.1)',
                        boxShadow: '0 4px 20px rgba(107, 115, 255, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 30px rgba(107, 115, 255, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                        width: 56,
                        height: 56,
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          onClick={scrollToAbout}
          sx={{
            color: '#6B73FF',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(107, 115, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(107, 115, 255, 0.1)',
            animation: 'gentleBounce 2s infinite',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </motion.div>

      <style jsx>{`
        @keyframes gentleBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;