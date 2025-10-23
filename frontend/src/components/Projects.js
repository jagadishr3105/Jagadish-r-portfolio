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
  Pagination,
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
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
      githubUrl: 'https://github.com/jagadishr3105/supply-chain-sql-project',
      category: 'SQL Analytics',
      icon: <Storage />,
      image: '/images/sql-project.png',
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
      image: '/images/demand-forecasting.png',
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
      image: '/images/amazon-project.png',
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
      image: '/images/capa-project.png',
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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

          <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
            {currentProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={project.id} sx={{ display: 'flex' }}>
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
              >
                  <Card
                    className="uniform-card"
                    sx={{
                      height: '400px',
                      width: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(107, 115, 255, 0.15)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
                      overflow: 'hidden',
                      flexGrow: 1,
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(107, 115, 255, 0.2)',
                        transform: 'translateY(-8px) scale(1.02)',
                        border: '1px solid rgba(107, 115, 255, 0.3)',
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardContent sx={{ 
                      p: 3, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      gap: 2,
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        minHeight: '48px',
                        flexShrink: 0,
                      }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: '12px',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '48px',
                            minHeight: '48px',
                            flexShrink: 0,
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
                            fontWeight: 600,
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            height: '28px',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '1.2rem',
                          lineHeight: 1.4,
                          minHeight: '72px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto',
                          flexShrink: 0,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          flexGrow: 1,
                          fontSize: '0.9rem',
                          minHeight: '72px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          textAlign: 'left',
                        }}
                      >
                        {project.brief}
                      </Typography>
                      <Stack 
                        direction="row" 
                        flexWrap="wrap" 
                        gap={0.5} 
                        sx={{ 
                          flexShrink: 0,
                          minHeight: '32px',
                          alignItems: 'flex-start',
                        }}
                      >
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(107, 115, 255, 0.08)',
                              color: 'text.secondary',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              height: '24px',
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                      </Stack>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGitHubClick(project.githubUrl);
                        }}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          borderRadius: '20px',
                          px: 3,
                          py: 1,
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          mt: 'auto',
                          alignSelf: 'flex-start',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 15px rgba(107, 115, 255, 0.3)',
                          },
                        }}
                      >
                        View Code
                      </Button>
                    </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 6,
              gap: 2,
            }}
          >
            <IconButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              sx={{
                backgroundColor: currentPage === 1 ? 'rgba(0,0,0,0.1)' : 'primary.main',
                color: currentPage === 1 ? 'text.disabled' : 'white',
                '&:hover': {
                  backgroundColor: currentPage === 1 ? 'rgba(0,0,0,0.1)' : 'primary.dark',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ChevronLeft />
            </IconButton>

            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'text.primary',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(107, 115, 255, 0.1)',
                  },
                },
              }}
            />

            <IconButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              sx={{
                backgroundColor: currentPage === totalPages ? 'rgba(0,0,0,0.1)' : 'primary.main',
                color: currentPage === totalPages ? 'text.disabled' : 'white',
                '&:hover': {
                  backgroundColor: currentPage === totalPages ? 'rgba(0,0,0,0.1)' : 'primary.dark',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        )}
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
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(107, 115, 255, 0.2)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(107, 115, 255, 0.15)',
            maxHeight: '90vh',
            overflow: 'hidden',
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