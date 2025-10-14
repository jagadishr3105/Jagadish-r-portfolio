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

        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} lg={5} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="soothing-card" sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: category.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 500,
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
                                  fontWeight: 500,
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  fontWeight: 500,
                                }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <Box className="skill-bar">
                              <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                  background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                                }}
                              />
                            </Box>
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
                title: 'AWS Certified Data Analytics',
                issuer: 'Amazon Web Services',
                year: '2023',
                description: 'Specialty certification in data analytics on AWS platform',
              },
              {
                title: 'Tableau Desktop Specialist',
                issuer: 'Tableau Software',
                year: '2022',
                description: 'Certified in Tableau desktop visualization and analytics',
              },
              {
                title: 'Google Data Analytics Certificate',
                issuer: 'Google',
                year: '2021',
                description: 'Professional certificate in data analytics fundamentals',
              },
              {
                title: 'Microsoft Certified: Data Analyst Associate',
                issuer: 'Microsoft',
                year: '2022',
                description: 'Power BI and Excel data analysis certification',
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