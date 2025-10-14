import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  GitHub,
  Close,
  Analytics,
  Storage,
  Code,
  TrendingUp,
  Assessment,
  Engineering,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Advanced SQL Analytics: Supply Chain Order Data',
      brief: 'Business analytics project extracting actionable insights from simulated e-commerce order data using advanced SQL techniques.',
      fullDescription: 'Comprehensive analysis of supply chain order data to identify profit drivers, optimize warehouse efficiency, and compare regional performance. The project demonstrates advanced SQL techniques including window functions, CTEs, and complex joins.',
      analyticalHighlights: [
        'Warehouse-level analysis (order counts, sales, on-time delivery rates)',
        'Regional profitability and rankings',
        'Product performance analysis',
        'Lead-time and shipping efficiency metrics',
        'Monthly sales trend visualization',
        'Top/bottom product category comparison',
        'Forecasting sales and segmenting profit tiers'
      ],
      techStack: ['MySQL Workbench', 'GitHub', 'CSV data', 'Excel/Sheets', 'SQL visualization'],
      keyOutcomes: [
        'Identify profit drivers and optimization opportunities',
        'Optimize warehouse efficiency metrics',
        'Compare region performance effectively',
        'Detect underperforming areas and products'
      ],
      githubUrl: 'https://github.com/jagadishr3105/supply-chain-sql-projec',
      category: 'SQL Analytics',
      icon: <Storage />,
      image: 'https://via.placeholder.com/400x250/E0F2F1/2C3E50?text=SQL+Analytics',
    },
    {
      id: 2,
      title: 'Demand Forecasting for FMCG Products',
      brief: 'Time-series forecasting for FMCG products using ARIMA and Python data science stack.',
      fullDescription: 'Advanced time-series analysis project focusing on demand forecasting for Fast-Moving Consumer Goods. The project includes comprehensive data preprocessing, stationarity testing, and ARIMA modeling with parameter optimization.',
      analyticalHighlights: [
        'Data cleaning and missing value imputation',
        'Outlier handling and data validation',
        'Weekly/monthly aggregation techniques',
        'ADF test for stationarity verification',
        'Trend and seasonality visualization',
        'Promotional and weekday effects analysis',
        'ARIMA forecasting with AIC optimization'
      ],
      techStack: ['Jupyter Notebook', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statsmodels', 'CSV data'],
      keyOutcomes: [
        'Robust baseline forecast for inventory planning',
        'Revealed demand patterns for supply chain optimization',
        'Identified seasonal trends and promotional impacts',
        'Foundation for advanced forecasting models'
      ],
      githubUrl: 'https://github.com/jagadishr3105/DemandForecasting-',
      category: 'Time Series',
      icon: <TrendingUp />,
      image: 'https://via.placeholder.com/400x250/E8EAF6/2C3E50?text=Demand+Forecasting',
    },
    {
      id: 3,
      title: 'Amazon Logistics Analysis',
      brief: 'Logistics optimization using real-world Amazon delivery data with Python EDA and insights.',
      fullDescription: 'Comprehensive logistics analysis using real Amazon delivery data to understand factors affecting delivery performance. The project provides actionable insights for route optimization and resource allocation.',
      analyticalHighlights: [
        'Delivery time analysis by product category',
        'Geographic area type impact assessment',
        'Traffic and weather correlation analysis',
        'Agent performance factor evaluation',
        'Route optimization recommendations',
        'Resource allocation insights'
      ],
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
      keyOutcomes: [
        'Groceries delivered fastest; Apparel/Electronics ~130 min',
        'Semi-Urban areas have longest delivery times',
        'Traffic/weather significantly impact delivery delays',
        'Agent age and rating influence delivery speed'
      ],
      githubUrl: 'https://github.com/jagadishr3105/Amazon_logistics-analysis',
      category: 'Logistics',
      icon: <Analytics />,
      image: 'https://via.placeholder.com/400x250/F3E5F5/2C3E50?text=Logistics+Analysis',
    },
    {
      id: 4,
      title: 'Quality Engineering CAPA Case Study: Catheter Assembly Line Bonding Failure',
      brief: 'Quality engineering case study identifying and eliminating defects in catheter assembly using root-cause tools.',
      fullDescription: 'Comprehensive quality engineering case study addressing a critical bonding failure issue in catheter assembly. The project demonstrates systematic problem-solving using industry-standard quality tools and methodologies.',
      analyticalHighlights: [
        'Root cause analysis using 5 Whys methodology',
        'Fishbone diagram for comprehensive factor mapping',
        'FMEA for risk prioritization (RPN 240)',
        'Statistical Process Control (SPC) implementation',
        'Process capability analysis',
        'Corrective and Preventive Action (CAPA) planning'
      ],
      techStack: ['Excel', 'draw.io', 'Google Docs', 'FMEA tools', 'p-chart calculations'],
      keyOutcomes: [
        'Identified inconsistent curing times as root cause',
        'Reduced bonding failures from 6% to 2%',
        'Improved yield from 91% to 98%',
        'Implemented SOP for curing process',
        'Established monitoring and control systems'
      ],
      githubUrl: 'https://github.com/jagadishr3105/Quality-Engineering-CAPA-CaseStudy',
      category: 'Quality Engineering',
      icon: <Engineering />,
      image: 'https://via.placeholder.com/400x250/FFF3E0/2C3E50?text=Quality+Engineering',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box
      id="projects"
      className="section-padding"
      sx={{
        backgroundColor: 'transparent',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
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
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            A showcase of my data analysis and engineering projects that demonstrate
            technical expertise and business impact across various domains.
          </Typography>

          <Grid container spacing={3} justifyContent="center" sx={{ width: '100%' }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={project.id}>
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
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '400px',
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(107, 115, 255, 0.15)',
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
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
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: '8px',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(107, 115, 255, 0.1)',
                            color: 'primary.main',
                            fontWeight: 500,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          mb: 2,
                          fontSize: '1.2rem',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 3,
                          flexGrow: 1,
                        }}
                      >
                        {project.brief}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          alignSelf: 'flex-start',
                          mt: 'auto',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        </motion.div>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
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
        {selectedProject && (
          <>
            <DialogTitle sx={{ color: 'text.primary', pb: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog} sx={{ color: 'text.secondary' }}>
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ pt: 2 }}>
              <Grid container spacing={3}>
                {/* Project Image */}
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={selectedProject.image}
                    alt={selectedProject.title}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
                
                {/* Project Details */}
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                    Project Description
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    {selectedProject.fullDescription}
                  </Typography>

                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                    Analytical Highlights
                  </Typography>
                  <List dense>
                    {selectedProject.analyticalHighlights.map((highlight, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: 'primary.main' }}>
                          <Assessment fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {highlight}
                            </Typography>
                          } 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                    Tech Stack
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {selectedProject.techStack.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.1)',
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                    Key Outcomes
                  </Typography>
                  <List dense>
                    {selectedProject.keyOutcomes.map((outcome, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: '30px', color: 'primary.main' }}>
                          <Code fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {outcome}
                            </Typography>
                          } 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button
                variant="contained"
                startIcon={<GitHub />}
                onClick={() => handleGitHubClick(selectedProject.githubUrl)}
              sx={{
                  backgroundColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                },
              }}
            >
                View on GitHub
            </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;