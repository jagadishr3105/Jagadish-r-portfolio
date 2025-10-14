import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  School,
  Work,
  Code,
  Analytics,
  Close,
  Star,
  CheckCircle,
  TrendingUp,
  DataUsage,
  Psychology,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Helper component for Tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openExperienceModal, setOpenExperienceModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenExperienceModal = (exp) => {
    setSelectedExperience(exp);
    setOpenExperienceModal(true);
  };

  const handleCloseExperienceModal = () => {
    setOpenExperienceModal(false);
    setSelectedExperience(null);
  };

  const handleOpenEducationModal = (edu) => {
    setSelectedEducation(edu);
    setOpenEducationModal(true);
  };

  const handleCloseEducationModal = () => {
    setOpenEducationModal(false);
    setSelectedEducation(null);
  };

  const skills = [
    'Data Analysis', 'Machine Learning', 'Python', 'Statistics', 
    'R', 'SQL', 'Tableau', 'Power BI', 'ETL', 'AWS', 'GCP', 'Azure'
  ];

  const experience = [
    {
      id: 1,
      title: 'Data Analyst',
      company: 'Nike',
      location: 'Portland, OR',
      period: 'Aug 2024 – Present',
      type: 'Full-time',
      description: 'Analyzing user behavior and CRM data to drive business insights and optimize marketing campaigns for Nike\'s Consumer Direct strategy.',
      achievements: [
        'Analyzed user behavior and CRM data with SQL/Python, identifying high-value segments that drove a 15% GMV lift in targeted campaigns',
        'Consolidated data from Oracle, SQL Server, and cloud platforms into unified datasets, streamlining analysis and improving KPI consistency',
        'Performed exploratory analysis on 20+ product streams, identifying demand gaps that reduced markdowns and optimized inventory allocation',
        'Designed and executed A/B tests for app features and promotions, providing insights that boosted activation and engagement',
        'Automated executive dashboards in Power BI/Tableau with SQL and PySpark, improving visibility into inventory, funnel metrics, and ROI',
        'Partnered with cross-functional teams in an Agile environment to prioritize analytics projects supporting Nike\'s Consumer Direct strategy',
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'PySpark', 'Oracle', 'SQL Server'],
      color: '#6B73FF',
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Digiquest India Ltd',
      location: 'Hyderabad, India',
      period: 'Jul 2020 - Jun 2022',
      type: 'Full-time',
      description: 'Built dynamic dashboards and automated reporting systems for media production KPIs, improving operational efficiency and data accuracy.',
      achievements: [
        'Built dynamic dashboards in Power BI and Excel to monitor media production KPIs, including content ingest turnaround, QC rejection rates, and asset delivery timelines—enabling real-time decision-making for production managers',
        'Cleaned and standardized large volumes of video/audio metadata and QC logs using Python (Pandas) and SQL, improving reporting accuracy by 40% and reducing post-production data inconsistencies',
        'Implemented Six Sigma tools (SPC, control charts) to monitor manufacturing KPIs, maintaining 98% process compliance',
        'Conducted bottleneck analysis across post-production workflows (VFX, audio mastering, QC) by tracking average processing times, leading to a 15% improvement in on-time project delivery',
        'Introduced a supplier quality scorecard and audit mechanism, resulting in a 22% decrease in supplier-related defects',
        'Automated recurring operational reports using Excel macros and Python scripts, reducing manual effort by 60% and ensuring consistent weekly updates for leadership teams',
        'Collaborated with production, quality control, and asset management teams to enhance the accuracy of metadata tagging and improve content traceability in the digital asset management system',
      ],
      technologies: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel', 'Six Sigma', 'SPC'],
      color: '#81C784',
    },
    {
      id: 3,
      title: 'Operations Analyst',
      company: 'Sri Vijayalakshmi Pulp & Packing Industry (SVLPP)',
      location: 'India',
      period: 'Jun 2017 – Jul 2018',
      type: 'Full-time',
      description: 'Tracked production metrics and built operational dashboards to optimize manufacturing processes and improve delivery performance.',
      achievements: [
        'Tracked daily production across pulp trays and PP woven bags using Excel, reducing material waste by 12%',
        'Built sales and dispatch trackers to analyze order patterns and improve on-time delivery by 18%',
        'Digitized shift-wise production logs, improving reporting accuracy and reducing manual errors',
        'Analyzed monthly raw material usage and cost trends to support purchasing and inventory planning',
        'Coordinated with production and packaging teams to streamline end-to-end operations, reducing dispatch delays and improving workflow alignment',
      ],
      technologies: ['Excel', 'Data Analysis', 'Operations Management', 'Production Tracking'],
      color: '#6B73FF',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Engineering Management',
      institution: 'Florida Institute of Technology',
      location: 'Melbourne, FL, USA',
      period: 'Aug 2022 – May 2024',
      description: 'Advanced program focusing on engineering management principles, project management, and leadership in technology organizations',
      gpa: '3.8/4.0',
      relevantCoursework: ['Project Management', 'Engineering Economics', 'Operations Research', 'Quality Management', 'Leadership in Engineering'],
      color: '#81C784',
    },
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Woxsen University',
      location: 'Hyderabad, India',
      period: 'Aug 2018 – May 2020',
      description: 'Comprehensive business administration program with focus on strategic management, analytics, and organizational leadership',
      gpa: '3.7/4.0',
      relevantCoursework: ['Strategic Management', 'Business Analytics', 'Operations Management', 'Financial Management', 'Marketing Analytics'],
      color: '#6B73FF',
    },
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Dr MGR Educational Research Institute University',
      location: 'Chennai, India',
      period: 'Jun 2013 – May 2017',
      description: 'Comprehensive engineering program covering mechanical systems, design principles, and manufacturing processes',
      gpa: '6.7/10',
      relevantCoursework: ['Engineering Mathematics', 'Thermodynamics', 'Machine Design', 'Manufacturing Processes', 'CAD/CAM'],
      color: '#81C784',
    },
  ];


  const programmingSkills = [
    { name: 'Python', level: 95, color: '#6B73FF' },
    { name: 'SQL', level: 90, color: '#81C784' },
    { name: 'R', level: 85, color: '#6B73FF' },
    { name: 'JavaScript', level: 80, color: '#81C784' },
  ];

  const toolsSkills = [
    { name: 'Tableau', level: 95, color: '#81C784' },
    { name: 'Power BI', level: 90, color: '#6B73FF' },
    { name: 'Excel', level: 85, color: '#81C784' },
    { name: 'AWS', level: 80, color: '#6B73FF' },
  ];

  const areasOfInterest = [
    {
      icon: <DataUsage sx={{ fontSize: '2.5rem' }} />,
      title: 'Financial Analytics',
      description: 'Analyzing market trends, risk assessment, and investment strategies.',
      color: '#6B73FF',
    },
    {
      icon: <TrendingUp sx={{ fontSize: '2.5rem' }} />,
      title: 'Machine Learning',
      description: 'Building predictive models and intelligent systems for various applications.',
      color: '#81C784',
    },
    {
      icon: <Psychology sx={{ fontSize: '2.5rem' }} />,
      title: 'Supply Chain Analytics',
      description: 'Optimizing logistics, inventory, and operational efficiency.',
      color: '#6B73FF',
    },
    {
      icon: <Analytics sx={{ fontSize: '2.5rem' }} />,
      title: 'Healthcare Analytics',
      description: 'Patient outcomes, medical research insights, and operational improvements.',
      color: '#81C784',
    },
  ];

  return (
    <Box
      id="about"
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
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Passionate about transforming data into meaningful insights that drive business success
          </Typography>
        </motion.div>

        {/* Tabs - Centered */}
        <Box sx={{ width: '100%', mb: 6, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            variant="scrollable"
            scrollButtons="auto"
            aria-label="about me tabs"
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
                borderRadius: '5px',
              },
              '& .MuiTab-root': {
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                mx: { xs: 0.5, sm: 1 },
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(107, 115, 255, 0.1)',
                },
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: 'primary.main',
                  boxShadow: '0 4px 20px rgba(107, 115, 255, 0.3)',
                },
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Experience" />
            <Tab label="Education" />
            <Tab label="Skills" />
          </Tabs>
        </Box>

        {/* Overview Tab */}
        <TabPanel value={activeTab} index={0}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="soothing-card" sx={{ p: 4, mb: 4, maxWidth: '800px', mx: 'auto' }}>
                <CardContent>
              <Typography
                    variant="h4"
                sx={{
                  mb: 3,
                      fontWeight: 400,
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <Code sx={{ color: 'primary.main' }} /> Professional Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 3,
                      textAlign: 'center',
                      fontSize: '1.1rem',
                    }}
                  >
                    Data Analyst with 4+ years of experience solving business problems through exploratory analysis, A/B testing, and statistical modeling.
                    Proficient in Python, PySpark, SQL, Tableau, and Power BI, with expertise in building data pipelines, analyzing customer behavior, and
                    delivering insights that drive impact. Achievements include a 15% GMV boost, 40% improvement in reporting accuracy, and 15% increase in
                    on-time delivery. Skilled at translating data into actionable insights for business leaders, mentoring analysts, and collaborating with cross-
                    functional teams in retail, e-commerce, media, and manufacturing.
              </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1.5} justifyContent="center">
                    {skills.map((skill, index) => (
            <motion.div
                        key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                          label={skill}
                        sx={{
                            backgroundColor: 'rgba(107, 115, 255, 0.1)',
                          color: 'primary.main',
                            border: '1px solid rgba(107, 115, 255, 0.2)',
                          fontWeight: 500,
                          '&:hover': {
                              backgroundColor: 'rgba(107, 115, 255, 0.15)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
                </CardContent>
              </Card>
            </motion.div>

            {/* Areas of Interest */}
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
              mb: 4,
                  fontWeight: 300,
              color: 'text.primary',
            }}
          >
            Areas of <span className="gradient-text">Interest</span>
          </Typography>
          
              <Grid container spacing={3} justifyContent="center">
                {areasOfInterest.map((interest, index) => (
              <Grid item xs={12} sm={6} md={3} key={interest.title}>
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
                      <Box
                        sx={{
                              color: interest.color,
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                            {interest.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                              fontWeight: 500,
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
          </Box>
        </TabPanel>

        {/* Experience Tab */}
        <TabPanel value={activeTab} index={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 300,
                color: 'text.primary',
                textAlign: 'center',
              }}
            >
              Professional <span className="gradient-text">Experience</span>
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
              My professional journey in data analytics, showcasing growth, impact, and diverse industry experience
            </Typography>

            {/* Timeline Container */}
            <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
              {/* Timeline Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: 'primary.main',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}
              />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 6,
                      position: 'relative',
                    }}
                  >
                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: exp.color,
                        border: '4px solid white',
                        boxShadow: '0 0 0 4px rgba(107, 115, 255, 0.2)',
                        zIndex: 2,
                      }}
                    />

                    {/* Content Card */}
                    <Box
                      sx={{
                        width: '45%',
                        ...(index % 2 === 0 ? { marginLeft: 'auto' } : { marginRight: 'auto' }),
                      }}
                    >
                      <Card
                        className="soothing-card hover-lift"
                        sx={{
                          borderRadius: 3,
                          cursor: 'pointer',
                          ...(index % 2 === 0 ? { ml: 2 } : { mr: 2 }),
                        }}
                        onClick={() => handleOpenExperienceModal(exp)}
                      >
                        <CardContent sx={{ p: 4 }}>
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
                                backgroundColor: exp.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                              }}
                            >
                              <Work />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 400,
                                  color: 'text.primary',
                                  mb: 0.5,
                                }}
                              >
                                {exp.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: 'primary.main',
                                  fontWeight: 500,
                                  mb: 0.5,
                                }}
                              >
                                {exp.company}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                }}
                              >
                                {exp.location} • {exp.period}
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
                            {exp.description}
                          </Typography>

                          <Stack direction="row" flexWrap="wrap" gap={1}>
                            {exp.technologies.slice(0, 3).map((tech, idx) => (
                              <Chip
                                key={idx}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(107, 115, 255, 0.1)',
                                  color: 'text.secondary',
                                  '&:hover': {
                                    backgroundColor: 'rgba(107, 115, 255, 0.15)',
                                    color: 'primary.main',
                                  },
                                  transition: 'all 0.3s ease',
                                }}
                              />
                            ))}
                            {exp.technologies.length > 3 && (
                              <Chip
                                label={`+${exp.technologies.length - 3} more`}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(107, 115, 255, 0.1)',
                                  color: 'text.secondary',
                                }}
                              />
                            )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </TabPanel>

        {/* Education Tab */}
        <TabPanel value={activeTab} index={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 300,
                color: 'text.primary',
                textAlign: 'center',
              }}
            >
              My <span className="gradient-text">Education</span>
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
              A summary of my academic journey and certifications
            </Typography>

            {/* Timeline Container */}
            <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
              {/* Timeline Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: 'primary.main',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}
              />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 6,
                      position: 'relative',
                    }}
                  >
                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: edu.color,
                        border: '4px solid white',
                        boxShadow: '0 0 0 4px rgba(107, 115, 255, 0.2)',
                        zIndex: 2,
                      }}
                    />

                    {/* Content Card */}
                    <Box
                      sx={{
                        width: '45%',
                        ...(index % 2 === 0 ? { marginLeft: 'auto' } : { marginRight: 'auto' }),
                      }}
                    >
                      <Card
                        className="soothing-card hover-lift"
                        sx={{
                          borderRadius: 3,
                          cursor: 'pointer',
                          ...(index % 2 === 0 ? { ml: 2 } : { mr: 2 }),
                        }}
                        onClick={() => handleOpenEducationModal(edu)}
                      >
                        <CardContent sx={{ p: 4 }}>
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
                                backgroundColor: edu.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                              }}
                            >
                              <School />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 400,
                                  color: 'text.primary',
                                  mb: 0.5,
                                }}
                              >
                                {edu.degree}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: 'primary.main',
                                  fontWeight: 500,
                                  mb: 0.5,
                                }}
                              >
                                {edu.institution}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                }}
                              >
                                {edu.period}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.7,
                            }}
                          >
                            {edu.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </TabPanel>

        {/* Skills Tab */}
        <TabPanel value={activeTab} index={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 300,
                color: 'text.primary',
                textAlign: 'center',
              }}
            >
              Technical <span className="gradient-text">Skills</span>
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
              My proficiency in various programming languages, tools, and platforms
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Card className="soothing-card" sx={{ p: 4 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 500, color: 'primary.main', textAlign: 'center' }}>
                      Programming Languages
                    </Typography>
                    <Stack spacing={3}>
                      {programmingSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Box sx={{ mb: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                                {skill.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                {skill.level}%
                              </Typography>
                            </Box>
                            <Box className="skill-bar">
                              <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                                }}
                              />
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="soothing-card" sx={{ p: 4 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 500, color: 'primary.main', textAlign: 'center' }}>
                      Tools & Platforms
                    </Typography>
                    <Stack spacing={3}>
                      {toolsSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Box sx={{ mb: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                                {skill.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                {skill.level}%
                              </Typography>
                            </Box>
                            <Box className="skill-bar">
                              <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                                }}
                              />
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

          </Box>
        </TabPanel>
      </Container>

      {/* Experience Detail Modal */}
      <Dialog
        open={openExperienceModal}
        onClose={handleCloseExperienceModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(107, 115, 255, 0.2)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
          },
        }}
      >
        {selectedExperience && (
          <>
            <DialogTitle sx={{ color: 'text.primary', pb: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  {selectedExperience.title} at {selectedExperience.company}
                </Typography>
                <IconButton onClick={handleCloseExperienceModal} sx={{ color: 'text.secondary' }}>
                  <Close />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {selectedExperience.location} • {selectedExperience.period}
              </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: 'rgba(107, 115, 255, 0.1)' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                {selectedExperience.description}
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 1 }}>
                Key Achievements
              </Typography>
              <List dense>
                {selectedExperience.achievements.map((achievement, idx) => (
                  <ListItem key={idx} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px', color: selectedExperience.color }}>
                      <CheckCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {achievement}
                      </Typography>
                    } />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 1 }}>
                Technologies
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {selectedExperience.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(107, 115, 255, 0.1)',
                      color: 'text.secondary',
                    }}
                  />
                ))}
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Education Detail Modal */}
      <Dialog
        open={openEducationModal}
        onClose={handleCloseEducationModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(107, 115, 255, 0.2)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
          },
        }}
      >
        {selectedEducation && (
          <>
            <DialogTitle sx={{ color: 'text.primary', pb: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  {selectedEducation.degree}
                </Typography>
                <IconButton onClick={handleCloseEducationModal} sx={{ color: 'text.secondary' }}>
                  <Close />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {selectedEducation.institution} • {selectedEducation.period}
              </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: 'rgba(107, 115, 255, 0.1)' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                {selectedEducation.description}
              </Typography>
              {selectedEducation.gpa && (
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  <Star sx={{ fontSize: 'small', verticalAlign: 'middle', mr: 0.5, color: 'warning.main' }} />
                  GPA: {selectedEducation.gpa}
                </Typography>
              )}
              {selectedEducation.relevantCoursework && selectedEducation.relevantCoursework.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ color: 'primary.main', mt: 3, mb: 1 }}>
                    Relevant Coursework
                  </Typography>
                  <List dense>
                    {selectedEducation.relevantCoursework.map((course, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: selectedEducation.color }}>
                          <CheckCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {course}
                          </Typography>
                        } />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default About;