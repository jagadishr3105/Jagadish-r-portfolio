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

const Article1 = () => {
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
                  label="Data Science"
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
                  label="January 15, 2024"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.08)',
                    color: 'text.secondary',
                  }}
                />
                <Chip
                  icon={<AccessTime />}
                  label="8 min read"
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
                Understanding Data Science: A Comprehensive Guide
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                An in-depth exploration of data science fundamentals, covering statistics, machine learning, and practical applications in real-world scenarios.
              </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Article Content */}
            <Box sx={{ '& p': { mb: 3, lineHeight: 1.8 } }}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Data science has emerged as one of the most transformative fields in the 21st century, combining statistical analysis, programming, and domain expertise to extract meaningful insights from data. In this comprehensive guide, we'll explore the fundamental concepts, methodologies, and practical applications that make data science such a powerful tool for solving complex problems.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                What is Data Science?
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from many structural and unstructured data. It combines domain expertise, programming skills, and knowledge of mathematics and statistics to uncover actionable insights hidden in an organization's data.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                The Data Science Process
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The data science process typically follows these key steps:
              </Typography>

              <Box component="ol" sx={{ pl: 3, '& li': { mb: 2 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Problem Definition:</strong> Clearly define the business problem and determine how data science can provide a solution.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data Collection:</strong> Gather relevant data from various sources, including databases, APIs, and external datasets.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data Cleaning:</strong> Handle missing values, outliers, and inconsistencies to ensure data quality.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Exploratory Data Analysis (EDA):</strong> Explore the data to understand patterns, relationships, and distributions.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Model Building:</strong> Apply appropriate machine learning algorithms to build predictive or descriptive models.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Model Evaluation:</strong> Assess model performance using appropriate metrics and validation techniques.
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Deployment:</strong> Implement the model in a production environment for real-world use.
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Key Skills for Data Scientists
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Successful data scientists typically possess a combination of technical and soft skills:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Programming:</strong> Python, R, SQL, and familiarity with big data tools
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Statistics & Mathematics:</strong> Probability, statistics, linear algebra, and calculus
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Machine Learning:</strong> Supervised and unsupervised learning algorithms
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data Visualization:</strong> Tools like Matplotlib, Seaborn, Tableau, or Power BI
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Domain Knowledge:</strong> Understanding of the specific industry or field
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Real-World Applications
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Data science finds applications across virtually every industry:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Healthcare:</strong> Drug discovery, medical imaging analysis, and personalized treatment plans
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Finance:</strong> Fraud detection, algorithmic trading, and risk assessment
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>E-commerce:</strong> Recommendation systems, demand forecasting, and customer segmentation
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Transportation:</strong> Route optimization, autonomous vehicles, and traffic management
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Conclusion
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Data science represents a powerful approach to solving complex problems through data-driven insights. As organizations continue to generate vast amounts of data, the demand for skilled data scientists will only continue to grow. By mastering the fundamental concepts and methodologies outlined in this guide, you'll be well-equipped to embark on your own data science journey and contribute to the exciting field of extracting knowledge from data.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Article1;
