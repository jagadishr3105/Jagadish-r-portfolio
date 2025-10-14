import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  Download,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactButtons = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'jagadishr3105@gmail.com',
      href: 'mailto:jagadishr3105@gmail.com',
      gradient: 'linear-gradient(135deg, #6B73FF 0%, #9BB5FF 100%)',
      color: '#6B73FF',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/jagadish-r',
      href: 'https://linkedin.com/in/jagadish-r',
      gradient: 'linear-gradient(135deg, #81C784 0%, #A5D6A7 100%)',
      color: '#81C784',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/jagadishr3105',
      href: 'https://github.com/jagadishr3105',
      gradient: 'linear-gradient(135deg, #7F8C8D 0%, #95A5A6 100%)',
      color: '#7F8C8D',
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Jagadish_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="contact"
      className="section-padding"
      sx={{
        background: 'linear-gradient(135deg, rgba(107, 115, 255, 0.05) 0%, rgba(129, 199, 132, 0.05) 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soothing Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(107, 115, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(129, 199, 132, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(232, 234, 246, 0.3) 0%, transparent 50%)
          `,
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 300,
              color: 'text.primary',
            }}
          >
            Let's <span className="gradient-text">Connect</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            I'm always open to collaborations, consulting, speaking, or just a friendly chat about 
            data analysis, AI, or creative tech. Reach out via any channel below!
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3}>
                {contactButtons.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      component="a"
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      fullWidth
                      className="contact-card"
                      sx={{
                        background: contact.gradient,
                        color: 'white',
                        p: 3,
                        borderRadius: 3,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        boxShadow: `0 8px 32px ${contact.color}30`,
                        border: `1px solid ${contact.color}20`,
                        '&:hover': {
                          background: contact.gradient,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 12px 40px ${contact.color}40`,
                          border: `1px solid ${contact.color}40`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                          }}
                        >
                          {contact.icon}
                        </Box>
                        <Box sx={{ flex: 1, textAlign: 'left' }}>
                          <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                            {contact.title}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {contact.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Button>
                  </motion.div>
                ))}

                {/* Download Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    onClick={handleDownloadResume}
                    fullWidth
                    startIcon={<Download />}
                    className="soft-button"
                    sx={{
                      p: 3,
                      fontSize: '1rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(107, 115, 255, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 40px rgba(107, 115, 255, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;