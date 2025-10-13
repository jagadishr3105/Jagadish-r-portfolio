import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import {
  School,
  Psychology,
  TrendingUp,
  DataUsage,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel',
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
    'Jupyter', 'Git', 'AWS', 'Google Analytics', 'SPSS'
  ];

  const interests = [
    {
      icon: <DataUsage />,
      title: 'Data Visualization',
      description: 'Creating compelling visual stories from complex datasets'
    },
    {
      icon: <TrendingUp />,
      title: 'Predictive Analytics',
      description: 'Building models to forecast trends and business outcomes'
    },
    {
      icon: <Psychology />,
      title: 'Business Intelligence',
      description: 'Transforming data into actionable business insights'
    },
    {
      icon: <School />,
      title: 'Statistical Analysis',
      description: 'Applying statistical methods to solve real-world problems'
    }
  ];

  return (
    <Box
      id="about"
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
            About <span className="gradient-text">Me</span>
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
            Get to know more about my background, skills, and what drives my passion for data analysis
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Image and Bio */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Avatar
                  src="/api/placeholder/250/250"
                  alt="About Me"
                  sx={{
                    width: 250,
                    height: 250,
                    mx: 'auto',
                    mb: 3,
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)',
                  }}
                />
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                I'm a passionate Data Analyst with over 3 years of experience in transforming 
                raw data into meaningful insights that drive business decisions. My journey began 
                with a degree in Statistics and has evolved into a career focused on uncovering 
                patterns, trends, and opportunities hidden within data.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                I specialize in creating interactive dashboards, performing statistical analysis, 
                and building predictive models. My expertise spans across various industries 
                including finance, healthcare, and e-commerce, where I've helped organizations 
                increase efficiency and profitability through data-driven strategies.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                When I'm not analyzing data, you can find me exploring new visualization 
                techniques, contributing to open-source projects, or sharing insights 
                through technical blog posts and community presentations.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Side - Skills and Interests */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Education */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Education
                </Typography>
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    mb: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                      Master of Science in Data Science
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      University Name • 2020-2022
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Specialized in Machine Learning, Statistical Analysis, and Big Data Technologies
                    </Typography>
                  </CardContent>
                </Card>
                
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                      Bachelor of Science in Statistics
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      University Name • 2016-2020
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Focus on Applied Statistics, Probability Theory, and Research Methods
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              {/* Tech Stack */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Tech Stack
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: 'primary.main',
                          border: '1px solid rgba(100, 255, 218, 0.3)',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mt: 8,
              mb: 4,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            Areas of <span className="gradient-text">Interest</span>
          </Typography>
          
          <Grid container spacing={3}>
            {interests.map((interest, index) => (
              <Grid item xs={12} sm={6} md={3} key={interest.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className="hover-lift"
                    sx={{
                      height: '100%',
                      backgroundColor: 'background.paper',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      textAlign: 'center',
                      p: 2,
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {React.cloneElement(interest.icon, { fontSize: 'large' })}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {interest.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {interest.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
