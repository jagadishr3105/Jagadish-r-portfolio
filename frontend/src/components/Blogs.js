import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  IconButton,
  Pagination,
} from '@mui/material';
import {
  Article,
  OpenInNew,
  CalendarToday,
  Person,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { getAllArticles } from '../data/blogData';

const Blogs = () => {
  // Get blog articles from data file, sorted by date (newest first)
  const allBlogs = getAllArticles()
    .map(article => ({
      ...article,
      icon: <Article />,
    }))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);

  // Get current page blogs
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, endIndex);

  const handleBlogClick = (slug) => {
    // Open article in new tab
    window.open(`/blog/${slug}`, '_blank');
  };

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

  return (
    <Box
      id="blogs"
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
            Latest <span className="gradient-text">Blogs</span>
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
            Insights, tutorials, and thoughts on data science, engineering, and technology trends.
          </Typography>

          <Box className="blog-grid-container">
            {currentBlogs.map((blog, index) => (
              <Box 
                key={blog.id} 
                className="blog-grid-item"
                sx={{ minHeight: '400px' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Card
                    className="uniform-card"
                    sx={{
                      height: '400px',
                      width: '100%',
                      maxWidth: '100%',
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
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(107, 115, 255, 0.2)',
                        transform: 'translateY(-8px) scale(1.02)',
                        border: '1px solid rgba(107, 115, 255, 0.3)',
                      },
                    }}
                    onClick={() => handleBlogClick(blog.slug)}
                  >
                    {/* NEW Indicator */}
                    {blog.isNew && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 1,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                        }}
                      >
                        NEW
                      </Box>
                    )}
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
                          {blog.icon}
                        </Box>
                        <Chip
                          label={blog.category}
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
                        {blog.title}
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
                        {blog.brief}
                      </Typography>
                      <Stack 
                        direction="row" 
                        flexWrap="wrap" 
                        gap={1} 
                        sx={{ 
                          flexShrink: 0,
                          minHeight: '32px',
                          alignItems: 'center',
                        }}
                      >
                        <Chip
                          icon={<Person fontSize="small" />}
                          label={blog.author}
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
                        <Chip
                          icon={<CalendarToday fontSize="small" />}
                          label={blog.publishDate}
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
                        <Chip
                          label={blog.readTime}
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
                      </Stack>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<OpenInNew />}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBlogClick(blog.slug);
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
                        Read Article
                      </Button>
                    </CardContent>
                </Card>
              </motion.div>
              </Box>
            ))}
          </Box>

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
    </Box>
  );
};

export default Blogs;
