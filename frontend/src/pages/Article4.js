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

const Article4 = () => {
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
                  label="Quality Engineering"
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
                  label="January 1, 2024"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(107, 115, 255, 0.08)',
                    color: 'text.secondary',
                  }}
                />
                <Chip
                  icon={<AccessTime />}
                  label="12 min read"
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
                Quality Engineering: Best Practices and Case Studies
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                A comprehensive look at quality engineering methodologies, CAPA processes, and real-world case studies from manufacturing environments.
              </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Article Content */}
            <Box sx={{ '& p': { mb: 3, lineHeight: 1.8 } }}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality engineering is a systematic approach to ensuring that products and processes meet or exceed customer expectations while minimizing defects and waste. In today's competitive manufacturing environment, quality engineering has evolved from a reactive discipline to a proactive, data-driven approach that prevents issues before they occur. This comprehensive guide explores the fundamental principles, methodologies, and real-world applications of quality engineering.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                The Evolution of Quality Engineering
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality engineering has undergone significant transformation over the decades, evolving from simple inspection-based approaches to sophisticated, data-driven methodologies:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Inspection Era (1900s-1950s):</strong> Focus on detecting defects after production
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Statistical Quality Control (1950s-1980s):</strong> Introduction of statistical methods and sampling
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Total Quality Management (1980s-2000s):</strong> Organization-wide quality focus and continuous improvement
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Six Sigma Era (1990s-Present):</strong> Data-driven approach to reducing variation and defects
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Digital Quality (2010s-Present):</strong> Integration of IoT, AI, and advanced analytics
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Core Quality Engineering Principles
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                1. Prevention Over Detection
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The most cost-effective approach to quality is preventing defects from occurring in the first place. This principle drives the design of robust processes and systems.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                2. Customer Focus
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality is defined by the customer. Understanding customer requirements and expectations is fundamental to quality engineering success.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                3. Data-Driven Decision Making
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality engineering relies on objective data and statistical analysis rather than subjective opinions or assumptions.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                4. Continuous Improvement
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality is not a destination but a journey. Continuous improvement through systematic problem-solving and process optimization is essential.
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Essential Quality Engineering Tools and Methodologies
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                1. Statistical Process Control (SPC)
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                SPC uses statistical methods to monitor and control processes, ensuring they operate within acceptable limits and identifying when corrective action is needed.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Control Charts:</strong> X-bar, R, p, and c charts for different data types
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Process Capability Analysis:</strong> Cp, Cpk, Pp, and Ppk indices
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Gauge R&R Studies:</strong> Measurement system analysis and validation
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                2. Failure Mode and Effects Analysis (FMEA)
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                FMEA is a systematic approach to identifying potential failure modes, their causes, and effects, with the goal of preventing failures before they occur.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Design FMEA (DFMEA):</strong> Focus on product design and development
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Process FMEA (PFMEA):</strong> Focus on manufacturing and assembly processes
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Risk Priority Number (RPN):</strong> Quantifying risk levels for prioritization
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                3. Root Cause Analysis (RCA)
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                RCA is a systematic process for identifying the underlying causes of problems and implementing corrective actions to prevent recurrence.
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>5 Whys Analysis:</strong> Asking "why" repeatedly to drill down to root causes
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Fishbone Diagram:</strong> Visual representation of potential causes
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Pareto Analysis:</strong> Identifying the most significant contributing factors
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                CAPA Process: Corrective and Preventive Action
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The CAPA process is a systematic approach to addressing quality issues and preventing their recurrence:
              </Typography>

              <Box component="ol" sx={{ pl: 3, '& li': { mb: 2 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Identification:</strong> Detecting quality issues through various monitoring systems
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Investigation:</strong> Thorough analysis to understand the scope and impact
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Root Cause Analysis:</strong> Identifying the underlying causes of the problem
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Corrective Action:</strong> Immediate actions to address the current issue
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Preventive Action:</strong> Long-term measures to prevent recurrence
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Verification:</strong> Confirming that actions are effective
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Documentation:</strong> Recording all actions and outcomes for future reference
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Real-World Case Study: Catheter Assembly Line Bonding Failure
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Let's examine a real-world case study that demonstrates the application of quality engineering principles:
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                Problem Description
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                A medical device manufacturer experienced a 6% bonding failure rate in their catheter assembly line, significantly exceeding the acceptable 2% threshold. This resulted in increased scrap costs, delayed deliveries, and potential quality issues.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                Investigation Process
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The quality engineering team applied systematic problem-solving methodologies:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data Collection:</strong> Gathered failure data, process parameters, and environmental conditions
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>5 Whys Analysis:</strong> Identified inconsistent curing times as the root cause
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>FMEA:</strong> Calculated RPN of 240 for the bonding process
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Statistical Analysis:</strong> Confirmed correlation between curing time and failure rate
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                Solution Implementation
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Based on the analysis, the team implemented several corrective and preventive actions:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Process Standardization:</strong> Established consistent curing time parameters
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Control Systems:</strong> Implemented automated timing controls
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Training:</strong> Educated operators on proper procedures
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Monitoring:</strong> Established real-time process monitoring
                </Typography>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 2, color: 'text.primary' }}>
                Results
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                The implementation of quality engineering principles resulted in significant improvements:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Failure Rate Reduction:</strong> From 6% to 2% (67% improvement)
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Yield Improvement:</strong> From 91% to 98% (7% increase)
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Cost Savings:</strong> $50,000 annually in reduced scrap costs
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Customer Satisfaction:</strong> Improved on-time delivery performance
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Best Practices for Quality Engineering Success
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Based on industry experience and case studies, here are key best practices:
              </Typography>

              <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Management Commitment:</strong> Strong leadership support is essential for success
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Cross-functional Teams:</strong> Include representatives from all relevant departments
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Data-Driven Approach:</strong> Base decisions on objective data and analysis
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Continuous Training:</strong> Invest in ongoing education and skill development
                </Typography>
                <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem' }}>
                  <strong>Technology Integration:</strong> Leverage digital tools and automation
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2, color: 'primary.main' }}>
                Conclusion
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Quality engineering is a critical discipline that combines technical expertise, statistical methods, and systematic problem-solving to ensure product and process excellence. The case study demonstrates how proper application of quality engineering principles can lead to significant improvements in performance, cost reduction, and customer satisfaction. As manufacturing continues to evolve with new technologies and challenges, quality engineering will remain essential for maintaining competitive advantage and ensuring customer satisfaction.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Article4;
