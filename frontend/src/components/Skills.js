import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  Code,
  Dashboard,
  Cloud,
  Storage,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      color: '#6B73FF',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 90 },
        { name: 'SQL', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'Scala', level: 75 },
      ],
    },
    {
      title: 'Visualization Tools',
      icon: <Dashboard />,
      color: '#81C784',
      skills: [
        { name: 'Tableau', level: 95 },
        { name: 'Power BI', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 85 },
        { name: 'Plotly', level: 80 },
      ],
    },
    {
      title: 'Cloud Services',
      icon: <Cloud />,
      color: '#6B73FF',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Databricks', level: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: <Storage />,
      color: '#81C784',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ],
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
            A comprehensive overview of my technical skills and proficiency levels
            across various data analysis tools and technologies
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={category.title}>
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
                    height: '480px',
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
                    p: 3, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        gap: 2,
                        minHeight: '60px',
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
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
                          fontSize: '1.3rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Stack spacing={2.5}>
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Box sx={{ mb: 1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                  }}
                                >
                                  {skill.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'text.secondary',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                  }}
                                >
                                  {skill.level}%
                                </Typography>
                              </Box>
                              <Box 
                                sx={{
                                  width: '100%',
                                  height: 10,
                                  backgroundColor: 'rgba(107, 115, 255, 0.1)',
                                  borderRadius: '8px',
                                  overflow: 'hidden',
                                }}
                              >
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  style={{
                                    height: '100%',
                                    background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}CC 100%)`,
                                    borderRadius: '8px',
                                  }}
                                />
                              </Box>
                            </Box>
                          </motion.div>
                        ))}
                      </Stack>
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