import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Work,
  TrendingUp,
  Assessment,
  Analytics,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// ExperienceCard component defined outside to avoid re-creation
const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <Card
      sx={{
        backgroundColor: 'background.paper',
        border: '1px solid rgba(100, 255, 218, 0.2)',
        borderRadius: 3,
        mb: 3,
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)',
          transform: 'translateY(-5px)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: 3,
            gap: 2,
          }}
        >
          <Avatar
            src={experience.logo}
            alt={experience.company}
            sx={{
              width: 60,
              height: 60,
              border: '2px solid',
              borderColor: experience.color,
            }}
          />
          
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                mb: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: { xs: 1, md: 0 },
                }}
              >
                {experience.title}
              </Typography>
              <Chip
                label={experience.type}
                size="small"
                sx={{
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  color: experience.color,
                  border: `1px solid ${experience.color}30`,
                }}
              />
            </Box>
            
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                mb: 0.5,
              }}
            >
              {experience.company}
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 1,
              }}
            >
              {experience.location} • {experience.period}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 3,
            lineHeight: 1.7,
          }}
        >
          {experience.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Key Achievements
          </Typography>
          <Stack spacing={1}>
            {experience.achievements.map((achievement, idx) => (
              <motion.div
                key={`achievement-${experience.id}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: experience.color,
                      mt: 1,
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {achievement}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Technologies Used
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {experience.technologies.map((tech, idx) => (
              <motion.div
                key={`tech-${experience.id}-${tech}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Chip
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(136, 146, 176, 0.1)',
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.div>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      id: 1,
      title: 'Senior Data Analyst',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      logo: '/api/placeholder/60/60',
      type: 'Full-time',
      description: 'Leading data analytics initiatives for a Fortune 500 technology company, focusing on customer behavior analysis and business intelligence.',
      achievements: [
        'Developed automated reporting system that reduced manual work by 75%',
        'Built predictive models that improved customer retention by 23%',
        'Led cross-functional team of 5 analysts on major data migration project',
        'Created executive dashboards used by C-level leadership for strategic decisions',
        'Implemented A/B testing framework that increased conversion rates by 18%',
      ],
      technologies: ['Python', 'Tableau', 'SQL', 'AWS', 'Snowflake', 'Git'],
      icon: <Analytics />,
      color: '#64ffda',
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'FinanceFirst Bank',
      location: 'New York, NY',
      period: '2020 - 2022',
      logo: '/api/placeholder/60/60',
      type: 'Full-time',
      description: 'Specialized in financial data analysis, risk assessment, and regulatory reporting for a mid-size regional bank.',
      achievements: [
        'Designed fraud detection system that reduced false positives by 40%',
        'Automated monthly regulatory reports, saving 20 hours per month',
        'Performed credit risk analysis for loan portfolio worth $500M',
        'Created real-time monitoring dashboard for transaction anomalies',
        'Collaborated with compliance team on stress testing models',
      ],
      technologies: ['R', 'Power BI', 'SQL Server', 'Excel', 'SAS', 'Python'],
      icon: <TrendingUp />,
      color: '#f50057',
    },
    {
      id: 3,
      title: 'Junior Data Analyst',
      company: 'RetailMax Inc.',
      location: 'Chicago, IL',
      period: '2019 - 2020',
      logo: '/api/placeholder/60/60',
      type: 'Full-time',
      description: 'Entry-level position focusing on sales analytics, inventory optimization, and customer segmentation for retail operations.',
      achievements: [
        'Analyzed sales data across 200+ retail locations',
        'Developed customer segmentation model using RFM analysis',
        'Created inventory forecasting model that reduced stockouts by 15%',
        'Built weekly sales performance reports for regional managers',
        'Assisted in migration from legacy reporting system to modern BI tools',
      ],
      technologies: ['Excel', 'Tableau', 'SQL', 'Python', 'Google Analytics'],
      icon: <Assessment />,
      color: '#ff9800',
    },
    {
      id: 4,
      title: 'Data Analytics Intern',
      company: 'StartupHub Ventures',
      location: 'Austin, TX',
      period: '2018 - 2019',
      logo: '/api/placeholder/60/60',
      type: 'Internship',
      description: 'Summer internship program focusing on market research, competitive analysis, and data visualization for early-stage startups.',
      achievements: [
        'Conducted market research for 10+ portfolio companies',
        'Created data collection and analysis workflows',
        'Built interactive dashboards for investor presentations',
        'Performed competitive analysis using web scraping techniques',
        'Presented findings to startup founders and investment partners',
      ],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'SQL'],
      icon: <Work />,
      color: '#4caf50',
    },
  ];

  return (
    <Box
      id="experience"
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
            Work <span className="gradient-text">Experience</span>
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
            My professional journey in data analytics, from internship to senior roles, 
            showcasing growth, impact, and diverse industry experience
          </Typography>
        </motion.div>

        {isMobile ? (
          // Mobile Layout - Simple Cards
          <Box>
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </Box>
        ) : (
          // Desktop Layout - Timeline
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: experience.color,
                      border: 'none',
                      p: 1,
                    }}
                  >
                    {React.cloneElement(experience.icon, { 
                      sx: { color: 'background.default' } 
                    })}
                  </TimelineDot>
                  {index < experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: 'rgba(100, 255, 218, 0.3)',
                        width: 2,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard experience={experience} index={index} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              mt: 6,
              backgroundColor: 'background.default',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              borderRadius: 3,
              p: 4,
              textAlign: 'center',
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
              Career <span className="gradient-text">Highlights</span>
            </Typography>
            
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                gap: 4,
                mt: 4,
              }}
            >
              {[
                { number: '4+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '15+', label: 'Technologies Mastered' },
                { number: '3', label: 'Industries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;