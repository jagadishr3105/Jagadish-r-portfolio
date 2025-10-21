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

const Article3 = () => {
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
                  label="Machine Learning"
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
                  label="January 5, 2024"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.08)',
                    color: 'text.secondary',
                  }}
                />
                <Chip
                  icon={<AccessTime />}
                  label="10 min read"
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
                Machine Learning in Supply Chain Management
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                Exploring how machine learning algorithms can revolutionize supply chain operations, from demand forecasting to inventory optimization.
              </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Article Content */}
            <Box sx={{ '& p': { mb: 3, lineHeight: 1.8 } }}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The supply chain industry is experiencing a digital transformation, with machine learning (ML) emerging as a game-changing technology. From predicting demand fluctuations to optimizing inventory levels and improving delivery routes, ML algorithms are revolutionizing how companies manage their supply chains. This comprehensive guide explores the various applications and benefits of machine learning in supply chain management.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                The Current State of Supply Chain Challenges
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Modern supply chains face numerous complex challenges that traditional methods struggle to address effectively:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Demand Volatility:</strong> Unpredictable customer demand patterns and market fluctuations
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Inventory Optimization:</strong> Balancing stock levels to avoid both stockouts and excess inventory
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Supplier Risk Management:</strong> Identifying and mitigating supplier-related risks
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Route Optimization:</strong> Finding the most efficient delivery paths and schedules
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Quality Control:</strong> Ensuring product quality throughout the supply chain
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Key Machine Learning Applications
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                1. Demand Forecasting
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                ML algorithms can analyze historical sales data, market trends, seasonal patterns, and external factors to predict future demand with remarkable accuracy.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Time Series Analysis:</strong> ARIMA, LSTM, and Prophet models for trend analysis
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>External Factors:</strong> Weather, economic indicators, and social media sentiment
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Multi-level Forecasting:</strong> Product, category, and regional demand predictions
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                2. Inventory Optimization
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                ML helps determine optimal inventory levels by considering demand patterns, lead times, storage costs, and service level requirements.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Safety Stock Calculation:</strong> Dynamic safety stock levels based on demand variability
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>ABC Analysis:</strong> ML-enhanced classification of inventory items
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Reorder Point Optimization:</strong> Intelligent reorder triggers considering multiple factors
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                3. Route and Logistics Optimization
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Advanced algorithms optimize delivery routes, warehouse operations, and transportation schedules to reduce costs and improve efficiency.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Vehicle Routing Problem (VRP):</strong> Optimizing delivery routes for multiple vehicles
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Dynamic Routing:</strong> Real-time route adjustments based on traffic and conditions
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Load Optimization:</strong> Maximizing vehicle capacity utilization
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                4. Supplier Risk Assessment
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                ML models can evaluate supplier performance, predict potential disruptions, and recommend alternative suppliers.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Performance Scoring:</strong> Multi-dimensional supplier evaluation
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Risk Prediction:</strong> Early warning systems for supplier issues
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Alternative Sourcing:</strong> Automated supplier recommendation systems
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Implementation Considerations
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Successfully implementing ML in supply chain management requires careful planning and consideration of several factors:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data Quality:</strong> Ensure clean, accurate, and comprehensive data
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Integration:</strong> Seamless integration with existing ERP and WMS systems
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Change Management:</strong> Training staff and managing organizational change
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Scalability:</strong> Designing solutions that can grow with the business
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Real-World Success Stories
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Companies across various industries are already seeing significant benefits from ML implementation:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Retail:</strong> 20-30% reduction in inventory costs through improved demand forecasting
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Manufacturing:</strong> 15-25% improvement in production planning accuracy
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Logistics:</strong> 10-20% reduction in transportation costs through route optimization
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>E-commerce:</strong> 30-40% improvement in delivery time predictions
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Future Trends and Opportunities
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The future of ML in supply chain management looks promising, with several emerging trends:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Autonomous Supply Chains:</strong> Self-managing supply networks with minimal human intervention
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Real-time Optimization:</strong> Continuous optimization of supply chain operations
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Predictive Maintenance:</strong> ML-driven equipment maintenance and failure prediction
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Sustainability Optimization:</strong> Balancing efficiency with environmental impact
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Conclusion
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Machine learning is transforming supply chain management by providing unprecedented insights and optimization capabilities. Companies that embrace these technologies will gain significant competitive advantages through improved efficiency, reduced costs, and enhanced customer satisfaction. The key to success lies in careful planning, proper implementation, and continuous optimization of ML models to adapt to changing business needs and market conditions.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Article3;
