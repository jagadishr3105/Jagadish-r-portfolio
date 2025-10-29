import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Code,
  Dashboard,
  Psychology,
  Storage,
  Group,
  Calculate,
  BarChart,
  Build,
  Settings,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code />,
      color: '#6B73FF',
      skills: ['SQL', 'Python', 'HTML', 'Bash'],
    },
    {
      title: 'Data Visualization',
      icon: <Dashboard />,
      color: '#81C784',
      skills: ['Tableau', 'EDA using Matplotlib', 'Plotly'],
    },
    {
      title: 'Machine Learning',
      icon: <Psychology />,
      color: '#6B73FF',
      skills: [
        'Descriptive/Predictive Analytics',
        'NLP',
        'Deep Learning',
        'Libraries: Scikit learn, Pandas, Numpy'
      ],
    },
    {
      title: 'Databases',
      icon: <Storage />,
      color: '#81C784',
      skills: ['AWS Redshift', 'Google Big Query', 'MySQL', 'Oracle'],
    },
    {
      title: 'Project Management',
      icon: <Group />,
      color: '#6B73FF',
      skills: [
        'Agile',
        'Waterfall Methodology using JIRA',
        'Cross-functional Collaboration'
      ],
    },
    {
      title: 'Decision Modeling, Simulation & Optimization Problems',
      icon: <Calculate />,
      color: '#81C784',
      skills: [
        "Microsoft Excel's Solver",
        'Risk and Precision tree tools'
      ],
    },
    {
      title: 'Statistics',
      icon: <BarChart />,
      color: '#6B73FF',
      skills: [
        'Linear/Logistic Regression',
        'A/B testing',
        'Multi-variate testing',
        'Clustering',
        'Hypothesis testing'
      ],
    },
    {
      title: 'Key Skills',
      icon: <Build />,
      color: '#81C784',
      skills: [
        'Dimensional Modeling',
        'Data Analysis',
        'Unit Testing',
        'Data cataloging using Alation'
      ],
    },
    {
      title: 'Automation Tools',
      icon: <Settings />,
      color: '#6B73FF',
      skills: ['Cron Job'],
    },
  ];

  return (
    <Box
      id="skills"
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
            Skills & <span className="gradient-text">Expertise</span>
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
            A comprehensive overview of my technical skills across programming, data science, machine learning, and business analytics
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card
                  className="uniform-card"
                  sx={{
                    height: '100%',
                    width: '100%',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(107, 115, 255, 0.15)',
                    borderRadius: '24px',
                    boxShadow: '0 12px 40px rgba(107, 115, 255, 0.08)',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 20px 60px rgba(107, 115, 255, 0.2)',
                      transform: 'translateY(-8px) scale(1.02)',
                      border: '1px solid rgba(107, 115, 255, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2.5, sm: 3 }, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: '100%',
                  }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        mb: 2.5,
                        gap: 2,
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 45, sm: 50 },
                          height: { xs: 45, sm: 50 },
                          borderRadius: '16px',
                          backgroundColor: category.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          flexShrink: 0,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                          lineHeight: 1.3,
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          flex: 1,
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Box 
                      sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-start',
                        minHeight: 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1.25,
                          alignItems: 'flex-start',
                          width: '100%',
                        }}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={`${category.title}-${skill}-${skillIndex}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            style={{ display: 'inline-block', maxWidth: '100%' }}
                          >
                            <Box
                              sx={{
                                backgroundColor: `${category.color}15`,
                                color: category.color,
                                fontWeight: 500,
                                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                padding: { xs: '6px 10px', sm: '8px 12px' },
                                borderRadius: '12px',
                                border: `1px solid ${category.color}30`,
                                display: 'inline-block',
                                wordWrap: 'break-word',
                                whiteSpace: 'normal',
                                maxWidth: '100%',
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                                '&:hover': {
                                  backgroundColor: `${category.color}25`,
                                  transform: 'translateY(-2px)',
                                  border: `1px solid ${category.color}50`,
                                },
                              }}
                            >
                              <Typography
                                component="span"
                                sx={{
                                  fontSize: 'inherit',
                                  fontWeight: 'inherit',
                                  color: 'inherit',
                                  lineHeight: 1.4,
                                  display: 'block',
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  whiteSpace: 'normal',
                                  textAlign: 'left',
                                }}
                              >
                                {skill}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <Typography
            variant="h3"
              sx={{
                textAlign: 'center',
              mt: 8,
                mb: 4,
              fontWeight: 300,
                color: 'text.primary',
              }}
            >
              Certifications & <span className="gradient-text">Achievements</span>
            </Typography>
          <Typography
            variant="body1"
              sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Professional certifications and notable achievements in data analytics
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                title: 'Lean Six Sigma Yellow Belt',
                issuer: 'AIGPE',
                year: '2023',
                description: 'Process improvement and quality management certification',
              },
              {
                title: 'Tableau',
                issuer: 'Udemy',
                year: '2023',
                description: 'Data visualization and business intelligence certification',
              },
              {
                title: 'Executing Basic ERP Processes with SAP S/4HANA',
                issuer: 'SAP',
                year: '2024',
                description: 'Enterprise resource planning and business process certification',
              },
              {
                title: 'Introduction to Python',
                issuer: 'University of Michigan',
                year: '2020',
                description: 'Programming fundamentals and data analysis certification',
              },
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} md={3} key={cert.title}>
                  <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className="soothing-card hover-lift"
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontWeight: 500,
                          color: 'text.primary',
                          fontSize: '1rem',
                        }}
                      >
                        {cert.title}
                      </Typography>
                      <Typography
                        variant="body2"
                      sx={{
                        color: 'primary.main',
                          fontWeight: 500,
                          mb: 1,
                        }}
                      >
                        {cert.issuer}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 2,
                        fontWeight: 500,
                        }}
                      >
                        {cert.year}
                      </Typography>
            <Typography
                        variant="body2"
              sx={{
                color: 'text.secondary',
                          lineHeight: 1.5,
                          fontSize: '0.875rem',
                        }}
                      >
                        {cert.description}
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

export default Skills;