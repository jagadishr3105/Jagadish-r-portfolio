import React from 'react';
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
} from '@mui/material';
import {
  ArrowBack,
  CalendarToday,
  Person,
  AccessTime,
  Category,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Article2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        py: 8,
      }}
    >
      <Container maxWidth="md">
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

        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(107, 115, 255, 0.15)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(107, 115, 255, 0.1)',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 6 }}>
            {/* Article Header */}
            <Box sx={{ mb: 4 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  icon={<Category />}
                  label="Database"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.1)',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                />
                <Chip
                  icon={<Person />}
                  label="Jagadish R"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.08)',
                    color: 'text.secondary',
                  }}
                />
                <Chip
                  icon={<CalendarToday />}
                  label="January 10, 2024"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.08)',
                    color: 'text.secondary',
                  }}
                />
                <Chip
                  icon={<AccessTime />}
                  label="6 min read"
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
                SQL Optimization Techniques for Better Performance
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                Learn advanced SQL optimization strategies, indexing techniques, and query performance tuning methods to improve database efficiency.
              </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Article Content */}
            <Box sx={{ '& p': { mb: 3, lineHeight: 1.8 } }}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                SQL performance optimization is crucial for maintaining efficient database operations, especially as data volumes grow. Poorly written queries can significantly impact application performance and user experience. In this comprehensive guide, we'll explore proven techniques to optimize your SQL queries and improve database performance.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Understanding Query Performance
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Before diving into optimization techniques, it's essential to understand how databases execute queries. The query execution plan shows how the database engine processes your SQL statement, including which indexes are used, how tables are joined, and the order of operations.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Essential Optimization Techniques
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                1. Proper Indexing Strategy
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Indexes are the foundation of query performance. They allow the database to quickly locate rows without scanning entire tables.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Primary Keys:</strong> Automatically indexed, ensure they're used in WHERE clauses
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Foreign Keys:</strong> Index foreign key columns for efficient joins
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Composite Indexes:</strong> Create indexes on frequently queried column combinations
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Covering Indexes:</strong> Include all columns needed for the query to avoid table lookups
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                2. Query Structure Optimization
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The way you structure your queries can significantly impact performance:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Use WHERE clauses effectively:</strong> Filter data early to reduce the dataset
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Avoid SELECT *:</strong> Only select the columns you need
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Use LIMIT/TOP:</strong> Restrict result sets when you don't need all rows
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Optimize JOINs:</strong> Use appropriate JOIN types and ensure join conditions are indexed
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                3. Advanced Optimization Techniques
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                For more complex scenarios, consider these advanced techniques:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Query Rewriting:</strong> Restructure complex queries for better performance
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Materialized Views:</strong> Pre-compute complex aggregations
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Partitioning:</strong> Divide large tables into smaller, manageable pieces
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Query Caching:</strong> Cache frequently executed queries
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Performance Monitoring and Analysis
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Regular monitoring is essential for maintaining optimal performance:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Execution Plans:</strong> Analyze query execution plans to identify bottlenecks
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Performance Metrics:</strong> Monitor query execution times, CPU usage, and I/O operations
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Index Usage:</strong> Track which indexes are being used and which are unused
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Slow Query Logs:</strong> Identify and analyze queries that take too long to execute
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Best Practices Summary
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                To achieve optimal SQL performance, follow these best practices:
              </Typography>

              <Box component="ol" sx={{ pl: 3, '& li': { mb: 2 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Always analyze query execution plans before and after optimization
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Create indexes based on actual query patterns, not theoretical needs
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Test performance improvements with realistic data volumes
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Monitor and maintain indexes regularly to prevent fragmentation
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Document optimization decisions for future reference
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Conclusion
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                SQL optimization is both an art and a science. By understanding the underlying principles and applying the techniques discussed in this guide, you can significantly improve your database performance. Remember that optimization is an ongoing process that requires regular monitoring and adjustment as your data and query patterns evolve.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Article2;
