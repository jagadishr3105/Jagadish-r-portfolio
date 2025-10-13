import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Stack,
  IconButton,
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
      href: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      href: 'https://github.com/your-username',
      label: 'GitHub',
    },
    {
      icon: <Email />,
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
  ];

  return (
    <Box
      id="home"
      className="hero-bg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            py: 8,
          }}
        >
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Hi, my name is
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  lineHeight: 1.1,
                }}
              >
                <span className="gradient-text">Your Name</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '3rem', lg: '4rem' },
                  lineHeight: 1.1,
                }}
              >
                Data Analyst & Insights Expert
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '500px',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                I'm a passionate data analyst who transforms complex datasets into
                actionable insights. I specialize in building interactive dashboards,
                performing statistical analysis, and creating data-driven solutions
                that drive business growth.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'background.default',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.8)',
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
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
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* Right Side - Profile Image */}
          <Box sx={{ flex: { xs: 'none', md: 1 }, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar
                src="/api/placeholder/300/300"
                alt="Profile Picture"
                sx={{
                  width: { xs: 200, md: 300, lg: 350 },
                  height: { xs: 200, md: 300, lg: 350 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 50px rgba(100, 255, 218, 0.3)',
                  transition: 'all 0.3s ease',
                }}
              />
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
            color: 'primary.main',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Hero;
