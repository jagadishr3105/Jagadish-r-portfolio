import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material';
import {
  Code,
  BarChart,
  Cloud,
  Storage,
  Psychology,
  TrendingUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      color: '#64ffda',
      skills: [
        { name: 'Python', level: 95, description: 'Pandas, NumPy, Scikit-learn, Matplotlib' },
        { name: 'R', level: 88, description: 'dplyr, ggplot2, tidyverse, Shiny' },
        { name: 'SQL', level: 92, description: 'PostgreSQL, MySQL, SQL Server, BigQuery' },
        { name: 'JavaScript', level: 75, description: 'D3.js, React, Node.js' },
      ],
    },
    {
      title: 'Data Visualization',
      icon: <BarChart />,
      color: '#f50057',
      skills: [
        { name: 'Tableau', level: 90, description: 'Advanced dashboards, calculated fields, LOD' },
        { name: 'Power BI', level: 85, description: 'DAX, Power Query, custom visuals' },
        { name: 'Matplotlib/Seaborn', level: 88, description: 'Statistical plots, customization' },
        { name: 'Plotly', level: 82, description: 'Interactive visualizations, Dash apps' },
      ],
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud />,
      color: '#ff9800',
      skills: [
        { name: 'AWS', level: 80, description: 'S3, Redshift, Lambda, SageMaker' },
        { name: 'Google Cloud', level: 75, description: 'BigQuery, Cloud ML, Data Studio' },
        { name: 'Azure', level: 70, description: 'Azure ML, Data Factory, Synapse' },
        { name: 'Snowflake', level: 78, description: 'Data warehousing, optimization' },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: <Storage />,
      color: '#4caf50',
      skills: [
        { name: 'PostgreSQL', level: 90, description: 'Query optimization, indexing' },
        { name: 'MongoDB', level: 75, description: 'Aggregation pipelines, indexing' },
        { name: 'Apache Spark', level: 72, description: 'PySpark, data processing' },
        { name: 'Airflow', level: 80, description: 'ETL pipelines, scheduling' },
      ],
    },
    {
      title: 'Machine Learning',
      icon: <Psychology />,
      color: '#9c27b0',
      skills: [
        { name: 'Scikit-learn', level: 88, description: 'Classification, regression, clustering' },
        { name: 'TensorFlow', level: 75, description: 'Neural networks, deep learning' },
        { name: 'Statistical Modeling', level: 90, description: 'Hypothesis testing, ANOVA' },
        { name: 'Time Series', level: 85, description: 'ARIMA, Prophet, forecasting' },
      ],
    },
    {
      title: 'Business Intelligence',
      icon: <TrendingUp />,
      color: '#ff5722',
      skills: [
        { name: 'Excel/VBA', level: 92, description: 'Advanced formulas, macros, pivot tables' },
        { name: 'Google Analytics', level: 85, description: 'Web analytics, conversion tracking' },
        { name: 'SPSS', level: 80, description: 'Statistical analysis, survey research' },
        { name: 'Looker', level: 75, description: 'LookML, data modeling' },
      ],
    },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Tableau Desktop Specialist',
    'Google Analytics Certified',
    'Microsoft Power BI Certified',
    'Python for Data Science (Coursera)',
    'Advanced SQL (HackerRank)',
  ];

  return (
    <Box
      id="skills"
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
            }}
          >
            A comprehensive overview of my technical skills, tools, and technologies 
            I use to transform data into actionable insights
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: category.color,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {React.cloneElement(category.icon, { fontSize: 'large' })}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Stack spacing={3}>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Box>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 500,
                                  color: 'text.primary',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'primary.main',
                                  fontWeight: 600,
                                }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(136, 146, 176, 0.2)',
                                mb: 1,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: category.color,
                                  borderRadius: 4,
                                },
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.875rem',
                              }}
                            >
                              {skill.description}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
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
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Certifications & <span className="gradient-text">Achievements</span>
            </Typography>
            
            <Card
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: 3,
                p: 3,
              }}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      label={cert}
                      sx={{
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        color: 'primary.main',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        py: 2,
                        px: 1,
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
            </Card>
          </Box>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              With expertise spanning across the entire data analytics lifecycle, 
              I combine technical proficiency with business acumen to deliver 
              data-driven solutions that create measurable impact. My diverse 
              skill set enables me to work effectively across different industries 
              and collaborate with cross-functional teams.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
