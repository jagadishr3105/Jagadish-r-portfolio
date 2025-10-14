import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Dashboard,
  Analytics,
  Storage,
  Code,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Financial Dashboard Analytics',
      description: 'Interactive Tableau dashboard analyzing financial performance metrics, KPIs, and trends. Features real-time data visualization and predictive modeling.',
      image: 'https://via.placeholder.com/400x250/E0F2F1/2C3E50?text=Financial+Dashboard',
      technologies: ['Tableau', 'Python', 'SQL', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/jagadish-r/financial-dashboard',
      liveUrl: 'https://demo.jagadish-r.com/financial-dashboard',
      category: 'Dashboard',
      icon: <Dashboard />,
    },
    {
      id: 2,
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning project using K-means clustering to segment customers for targeted marketing strategies. Implemented in Python with scikit-learn.',
      image: 'https://via.placeholder.com/400x250/E8EAF6/2C3E50?text=Customer+Segmentation',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      githubUrl: 'https://github.com/jagadish-r/customer-segmentation',
      liveUrl: 'https://demo.jagadish-r.com/customer-segmentation',
      category: 'Machine Learning',
      icon: <Analytics />,
    },
    {
      id: 3,
      title: 'Sales Forecasting Model',
      description: 'Time series forecasting model built with ARIMA and Prophet to predict future sales, optimizing inventory and resource allocation.',
      image: 'https://via.placeholder.com/400x250/FFF3E0/2C3E50?text=Sales+Forecasting',
      technologies: ['R', 'Prophet', 'Shiny', 'SQL'],
      githubUrl: 'https://github.com/jagadish-r/sales-forecasting',
      liveUrl: 'https://demo.jagadish-r.com/sales-forecasting',
      category: 'Forecasting',
      icon: <Analytics />,
    },
    {
      id: 4,
      title: 'E-commerce Data Pipeline',
      description: 'End-to-end data pipeline for e-commerce analytics using Apache Airflow, processing millions of transactions daily with real-time monitoring.',
      image: 'https://via.placeholder.com/400x250/F3E5F5/2C3E50?text=E-commerce+Pipeline',
      technologies: ['Apache Airflow', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/jagadish-r/ecommerce-pipeline',
      liveUrl: 'https://demo.jagadish-r.com/ecommerce-pipeline',
      category: 'Data Engineering',
      icon: <Storage />,
    },
    {
      id: 5,
      title: 'Healthcare Analytics Dashboard',
      description: 'Comprehensive healthcare analytics platform tracking patient outcomes, resource utilization, and operational efficiency metrics.',
      image: 'https://via.placeholder.com/400x250/E8F5E8/2C3E50?text=Healthcare+Analytics',
      technologies: ['Power BI', 'SQL Server', 'Python', 'Azure', 'R'],
      githubUrl: 'https://github.com/jagadish-r/healthcare-analytics',
      liveUrl: 'https://demo.jagadish-r.com/healthcare-analytics',
      category: 'Healthcare',
      icon: <Analytics />,
    },
    {
      id: 6,
      title: 'Social Media Sentiment Analysis',
      description: 'Real-time sentiment analysis tool for social media monitoring using NLP and machine learning. Processes over 10,000 posts per hour.',
      image: 'https://via.placeholder.com/400x250/FFF8E1/2C3E50?text=Sentiment+Analysis',
      technologies: ['Python', 'NLTK', 'VADER', 'Flask', 'MongoDB'],
      githubUrl: 'https://github.com/jagadish-r/sentiment-analysis',
      liveUrl: 'https://demo.jagadish-r.com/sentiment-analysis',
      category: 'NLP',
      icon: <Code />,
    },
  ];

  return (
    <Box
      id="projects"
      className="section-padding"
      sx={{
        backgroundColor: 'transparent',
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
              fontWeight: 300,
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
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            A collection of data analysis projects showcasing my expertise in various domains
            and technologies
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                className="soothing-card hover-lift"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Project Header */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.1)',
                          color: 'primary.main',
                          border: '1px solid rgba(107, 115, 255, 0.2)',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Project Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      Technologies
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.5}>
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={`${project.id}-${tech}-${idx}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Chip
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(107, 115, 255, 0.1)',
                              color: 'text.secondary',
                              fontSize: '0.75rem',
                              height: 24,
                              '&:hover': {
                                backgroundColor: 'rgba(107, 115, 255, 0.15)',
                                color: 'primary.main',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub />}
                      size="small"
                      sx={{
                        flex: 1,
                        backgroundColor: 'rgba(107, 115, 255, 0.1)',
                        color: 'primary.main',
                        border: '1px solid rgba(107, 115, 255, 0.2)',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(107, 115, 255, 0.15)',
                          transform: 'translateY(-1px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Launch />}
                      size="small"
                      className="soft-button"
                      sx={{
                        flex: 1,
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                      }}
                    >
                      Demo
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;