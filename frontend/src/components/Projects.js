import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import {
  GitHub,
  Launch,
  TrendingUp,
  Dashboard,
  Analytics,
  Assessment,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Financial Dashboard Analytics',
      description: 'Interactive Tableau dashboard analyzing financial performance metrics, KPIs, and trends for a Fortune 500 company. Includes real-time data visualization and predictive modeling.',
      image: '/api/placeholder/400/250',
      technologies: ['Tableau', 'Python', 'SQL', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/your-username/financial-dashboard',
      liveUrl: 'https://your-dashboard-demo.com',
      category: 'Dashboard',
      icon: <Dashboard />,
    },
    {
      id: 2,
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning project using K-means clustering to segment customers based on purchasing behavior. Implemented RFM analysis and created actionable marketing strategies.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      githubUrl: 'https://github.com/your-username/customer-segmentation',
      liveUrl: 'https://your-segmentation-demo.com',
      category: 'Machine Learning',
      icon: <Analytics />,
    },
    {
      id: 3,
      title: 'Sales Forecasting Model',
      description: 'Time series analysis and forecasting model predicting sales trends using ARIMA and Prophet models. Achieved 92% accuracy in quarterly predictions.',
      image: '/api/placeholder/400/250',
      technologies: ['R', 'Prophet', 'ARIMA', 'ggplot2', 'Shiny'],
      githubUrl: 'https://github.com/your-username/sales-forecasting',
      liveUrl: 'https://your-forecasting-demo.com',
      category: 'Forecasting',
      icon: <TrendingUp />,
    },
    {
      id: 4,
      title: 'E-commerce Data Pipeline',
      description: 'End-to-end ETL pipeline processing e-commerce data from multiple sources. Automated data cleaning, transformation, and loading into data warehouse.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker', 'AWS S3'],
      githubUrl: 'https://github.com/your-username/ecommerce-pipeline',
      liveUrl: 'https://your-pipeline-demo.com',
      category: 'Data Engineering',
      icon: <Assessment />,
    },
    {
      id: 5,
      title: 'Healthcare Analytics Dashboard',
      description: 'Power BI dashboard analyzing patient outcomes, treatment effectiveness, and hospital performance metrics. Includes predictive models for patient readmission.',
      image: '/api/placeholder/400/250',
      technologies: ['Power BI', 'SQL Server', 'Python', 'DAX', 'Azure'],
      githubUrl: 'https://github.com/your-username/healthcare-analytics',
      liveUrl: 'https://your-healthcare-demo.com',
      category: 'Healthcare',
      icon: <Dashboard />,
    },
    {
      id: 6,
      title: 'Social Media Sentiment Analysis',
      description: 'NLP project analyzing social media sentiment for brand monitoring. Real-time sentiment tracking with automated alerts and trend analysis.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Twitter API', 'Streamlit'],
      githubUrl: 'https://github.com/your-username/sentiment-analysis',
      liveUrl: 'https://your-sentiment-demo.com',
      category: 'NLP',
      icon: <Analytics />,
    },
  ];

  return (
    <Box
      id="projects"
      className="section-padding"
      sx={{
        backgroundColor: 'background.paper',
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
            Featured <span className="gradient-text">Projects</span>
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
            Explore my portfolio of data analysis projects, from interactive dashboards 
            to machine learning models and data pipelines
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="hover-lift"
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.default',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: 'rgba(100, 255, 218, 0.9)',
                        color: 'background.default',
                        borderRadius: '50%',
                        p: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        display: 'flex',
                        gap: 1,
                      }}
                    >
                      <IconButton
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.9)',
                            color: 'background.default',
                          },
                        }}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.9)',
                            color: 'background.default',
                          },
                        }}
                      >
                        <Launch fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: 'primary.main',
                          border: '1px solid rgba(100, 255, 218, 0.3)',
                          mb: 2,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(136, 146, 176, 0.1)',
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: 'primary.main',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        sx={{
                          borderColor: 'rgba(100, 255, 218, 0.5)',
                          color: 'primary.main',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        component="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="small"
                        startIcon={<Launch />}
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'background.default',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.8)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component="a"
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
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
              View All Projects on GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
