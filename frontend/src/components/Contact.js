import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  IconButton,
  Stack,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  Phone,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: '#64ffda',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: '#f50057',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San Francisco, CA',
      color: '#ff9800',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your backend URL
      const response = await axios.post('http://localhost:5001/api/contact', formData);
      
      if (response.data.success) {
        setAlert({
          open: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          severity: 'success',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setAlert({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setAlert(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      className="section-padding"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
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
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Get In <span className="gradient-text">Touch</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about data, 
            feel free to reach out!
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Let's Connect
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                I'm currently open to new opportunities in data analysis, 
                business intelligence, and data science roles. I'm also available 
                for consulting projects and freelance work.
              </Typography>

              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      component="a"
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      sx={{
                        backgroundColor: 'background.paper',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: 2,
                        p: 2,
                        textDecoration: 'none',
                        display: 'block',
                        '&:hover': {
                          borderColor: info.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 5px 20px ${info.color}30`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            color: info.color,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {React.cloneElement(info.icon, { fontSize: 'large' })}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 600,
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Stack>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: 4,
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <LinkedIn />, href: 'https://linkedin.com/in/yourprofile', color: '#0077b5', label: 'LinkedIn' },
                    { icon: <GitHub />, href: 'https://github.com/yourusername', color: '#333', label: 'GitHub' },
                    { icon: <Email />, href: 'mailto:your.email@example.com', color: '#64ffda', label: 'Email' },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'background.paper',
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                          color: 'text.secondary',
                          '&:hover': {
                            color: social.color,
                            borderColor: social.color,
                            backgroundColor: `${social.color}10`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Send Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'text.secondary',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : <Send />}
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
                          '&:disabled': {
                            backgroundColor: 'rgba(100, 255, 218, 0.3)',
                          },
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
