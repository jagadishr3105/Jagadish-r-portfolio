import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: <Email />,
      href: 'mailto:your.email@example.com',
      label: 'Email',
      color: '#64ffda',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid rgba(100, 255, 218, 0.2)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
              mb: 4,
            }}
          >
            {/* Logo and Description */}
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: { xs: '100%', md: '400px' },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #64ffda 0%, #f50057 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Data Analyst
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Transforming data into actionable insights through analytics, 
                visualization, and strategic thinking. Let's turn your data 
                into your competitive advantage.
              </Typography>
              
              {/* Social Links */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'background.default',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        color: 'text.secondary',
                        '&:hover': {
                          color: link.color,
                          borderColor: link.color,
                          backgroundColor: `${link.color}10`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </Box>

            {/* Quick Links */}
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      component="button"
                      onClick={() => scrollToSection(link.href)}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        textAlign: 'inherit',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Typography>
                  </motion.div>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Get In Touch
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  📧 your.email@example.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  📱 +1 (555) 123-4567
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  📍 San Francisco, CA
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Divider
            sx={{
              borderColor: 'rgba(100, 255, 218, 0.2)',
              mb: 3,
            }}
          />

          {/* Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              Made with{' '}
              <Favorite
                sx={{
                  color: '#f50057',
                  fontSize: '1rem',
                }}
              />{' '}
              using React & Python
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
