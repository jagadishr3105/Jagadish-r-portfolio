import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Grid,
} from '@mui/material';
import {
  ArrowBack,
  CalendarToday,
  Person,
  AccessTime,
  Category,
  Facebook,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getArticleBySlug, getRelatedArticles } from '../data/blogData';

const ArticleTemplate = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);


  const handleBackClick = () => {
    navigate('/');
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';

    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleRelatedArticleClick = (relatedSlug, event) => {
    // Add visual feedback and smooth transition
    const clickedElement = event.currentTarget;
    clickedElement.style.transform = 'scale(0.98)';
    clickedElement.style.opacity = '0.8';
    
    setTimeout(() => {
      navigate(`/blog/${relatedSlug}`);
    }, 150);
  };

  if (!article) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" color="text.secondary">
          Article not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={handleBackClick}
          sx={{
            mb: 4,
            color: 'primary.main',
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Back to Portfolio
        </Button>

        <Grid container spacing={4}>
          {/* Main Article Content */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(107, 115, 255, 0.15)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
                  overflow: 'hidden',
                  mb: 4,
                }}
              >
                <CardContent sx={{ p: 6 }}>
                  {/* Article Header */}
                  <Box sx={{ mb: 4 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        icon={<Category />}
                        label={article.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.1)',
                          color: 'primary.main',
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        icon={<Person />}
                        label={article.author}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.08)',
                          color: 'text.secondary',
                        }}
                      />
                      <Chip
                        icon={<CalendarToday />}
                        label={article.publishDate}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.08)',
                          color: 'text.secondary',
                        }}
                      />
                      <Chip
                        icon={<AccessTime />}
                        label={article.readTime}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(107, 115, 255, 0.08)',
                          color: 'text.secondary',
                        }}
                      />
                    </Stack>

                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 3,
                        lineHeight: 1.3,
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        mb: 3,
                      }}
                    >
                      {article.brief}
                    </Typography>

                    {/* Tags */}
                    <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap' }}>
                      {article.tags.map((tag, index) => (
                        <Chip
                          key={`tag-${tag}-${index}`}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(107, 115, 255, 0.05)',
                            color: 'text.secondary',
                            border: '1px solid rgba(107, 115, 255, 0.1)',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Divider sx={{ mb: 4 }} />

                  {/* Article Content */}
                  <Box
                    sx={{
                      '& p': { mb: 3, lineHeight: 1.8, fontSize: '1.1rem' },
                      '& h2': { 
                        fontWeight: 600, 
                        mt: 4, 
                        mb: 2, 
                        color: 'primary.main',
                        fontSize: '1.5rem',
                      },
                      '& h3': { 
                        fontWeight: 600, 
                        mt: 3, 
                        mb: 2, 
                        color: 'text.primary',
                        fontSize: '1.3rem',
                      },
                      '& ul': { pl: 3, '& li': { mb: 1, fontSize: '1.1rem' } },
                      '& ol': { pl: 3, '& li': { mb: 1, fontSize: '1.1rem' } },
                      '& strong': { fontWeight: 600 },
                    }}
                  >
                    {article.content.split('\n').map((paragraph, index) => {
                      if (paragraph.trim() === '') return <br key={`br-${index}`} />;
                      
                      // Check if it's a heading
                      if (paragraph.startsWith('## ')) {
                        return (
                          <Typography
                            key={`paragraph-${index}`}
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mt: 4,
                              mb: 2,
                              color: 'primary.main',
                            }}
                          >
                            {paragraph.replaceAll('## ', '')}
                          </Typography>
                        );
                      }
                      
                      if (paragraph.startsWith('### ')) {
                        return (
                          <Typography
                            key={`paragraph-${index}`}
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mt: 3,
                              mb: 2,
                              color: 'text.primary',
                            }}
                          >
                            {paragraph.replaceAll('### ', '')}
                          </Typography>
                        );
                      }
                      
                      // Check if it's a list item
                      if (paragraph.startsWith('- ')) {
                        return (
                          <Typography
                            key={`paragraph-${index}`}
                            component="li"
                            variant="body1"
                            sx={{ fontSize: '1.1rem', mb: 1 }}
                          >
                            {paragraph.replaceAll('- ', '')}
                          </Typography>
                        );
                      }
                      
                      // Regular paragraph
                      return (
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{
                            mb: 3,
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                          }}
                        >
                          {paragraph}
                        </Typography>
                      );
                    })}
                  </Box>

                  {/* Social Share Buttons */}
                  <Divider sx={{ my: 4 }} />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                      Share this article
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <IconButton
                        onClick={() => handleShare('twitter')}
                        sx={{
                          backgroundColor: 'rgba(29, 161, 242, 0.1)',
                          color: '#1DA1F2',
                          '&:hover': {
                            backgroundColor: 'rgba(29, 161, 242, 0.2)',
                          },
                        }}
                      >
                        <Twitter />
                      </IconButton>
                      <IconButton
                        onClick={() => handleShare('facebook')}
                        sx={{
                          backgroundColor: 'rgba(24, 119, 242, 0.1)',
                          color: '#1877F2',
                          '&:hover': {
                            backgroundColor: 'rgba(24, 119, 242, 0.2)',
                          },
                        }}
                      >
                        <Facebook />
                      </IconButton>
                      <IconButton
                        onClick={() => handleShare('linkedin')}
                        sx={{
                          backgroundColor: 'rgba(0, 119, 181, 0.1)',
                          color: '#0077B5',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 119, 181, 0.2)',
                          },
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>

              {/* Discord Community Section */}
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                  overflow: 'hidden',
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', color: 'white' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    💬 Join Our Discord Community
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      opacity: 0.9,
                      lineHeight: 1.6,
                    }}
                  >
                    Connect with fellow data science enthusiasts, share insights, and discuss the latest trends in supply chain analytics.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#5865F2',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#4752C4',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(88, 101, 242, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => window.open('https://discord.gg/your-discord-link', '_blank')}
                  >
                    Join Discord Server
                  </Button>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 2,
                      opacity: 0.8,
                      fontSize: '0.9rem',
                    }}
                  >
                    *Discord link will be provided soon
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Related Posts */}
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(107, 115, 255, 0.15)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
                  overflow: 'hidden',
                  mb: 3,
                }}
              >
                <CardContent sx={{ p: 6 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 4,
                      fontSize: '1.5rem',
                    }}
                  >
                    Related Posts
                  </Typography>
                  <Stack spacing={4}>
                    {relatedArticles.map((relatedArticle, index) => (
                      <motion.div
                        key={relatedArticle.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          elevation={0}
                          sx={{
                            p: 3,
                            cursor: 'pointer',
                            border: '1px solid rgba(107, 115, 255, 0.1)',
                            borderRadius: '16px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              borderColor: 'primary.main',
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 32px rgba(107, 115, 255, 0.15)',
                              background: 'rgba(255, 255, 255, 0.95)',
                            },
                            '&:active': {
                              transform: 'translateY(-2px)',
                            },
                          }}
                          onClick={(event) => handleRelatedArticleClick(relatedArticle.slug, event)}
                        >
                          {/* NEW indicator for latest article */}
                          {relatedArticle.isNew && (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                px: 2,
                                py: 0.5,
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                zIndex: 1,
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                              }}
                            >
                              NEW
                            </Box>
                          )}
                          
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                              mb: 2,
                              lineHeight: 1.4,
                              fontSize: '1.1rem',
                              pr: relatedArticle.isNew ? 8 : 0,
                            }}
                          >
                            {relatedArticle.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '1rem',
                              lineHeight: 1.6,
                              mb: 2,
                            }}
                          >
                            {relatedArticle.brief.substring(0, 150)}...
                          </Typography>
                          
                          {/* Tags and metadata */}
                          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                            <Chip
                              label={relatedArticle.category}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(107, 115, 255, 0.1)',
                                color: 'primary.main',
                                fontSize: '0.8rem',
                                height: '24px',
                                fontWeight: 600,
                              }}
                            />
                            <Chip
                              icon={<AccessTime />}
                              label={relatedArticle.readTime}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(107, 115, 255, 0.08)',
                                color: 'text.secondary',
                                fontSize: '0.8rem',
                                height: '24px',
                              }}
                            />
                            <Chip
                              icon={<CalendarToday />}
                              label={relatedArticle.publishDate}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(107, 115, 255, 0.08)',
                                color: 'text.secondary',
                                fontSize: '0.8rem',
                                height: '24px',
                              }}
                            />
                          </Stack>
                        </Card>
                      </motion.div>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ArticleTemplate;
