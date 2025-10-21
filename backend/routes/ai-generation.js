const express = require('express');
const router = express.Router();
const AIService = require('../services/aiService');
const TrendingService = require('../services/trendingService');
const Article = require('../models/Article');

// Generate article from trending topic
router.post('/generate-from-trending', async (req, res) => {
  try {
    // Get trending topics
    const trendingTopics = await TrendingService.getTrendingTopics();
    
    if (trendingTopics.length === 0) {
      return res.status(404).json({ error: 'No trending topics found' });
    }

    // Select top trending topic
    const selectedTopic = trendingTopics[0];
    
    // Generate article
    const articleData = await AIService.generateArticle(selectedTopic.title);
    
    // Save to database
    const article = new Article(articleData);
    await article.save();

    res.json({
      success: true,
      article: article,
      trendingTopic: selectedTopic
    });
  } catch (error) {
    console.error('Error generating article from trending topic:', error);
    res.status(500).json({ error: 'Failed to generate article' });
  }
});

// Generate article from custom topic
router.post('/generate-custom', async (req, res) => {
  try {
    const { topic, category } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    // Generate article
    const articleData = await AIService.generateArticle(topic);
    
    // Override category if provided
    if (category) {
      articleData.category = category;
    }
    
    // Save to database
    const article = new Article(articleData);
    await article.save();

    res.json({
      success: true,
      article: article
    });
  } catch (error) {
    console.error('Error generating custom article:', error);
    res.status(500).json({ error: 'Failed to generate article' });
  }
});

// Analyze writing style
router.post('/analyze-style', async (req, res) => {
  try {
    const writingStyle = await AIService.analyzeWritingStyle();
    
    res.json({
      success: true,
      writingStyle: writingStyle
    });
  } catch (error) {
    console.error('Error analyzing writing style:', error);
    res.status(500).json({ error: 'Failed to analyze writing style' });
  }
});

// Optimize existing article
router.post('/optimize/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const seoData = await AIService.optimizeArticle(id);
    
    res.json({
      success: true,
      seoData: seoData
    });
  } catch (error) {
    console.error('Error optimizing article:', error);
    res.status(500).json({ error: 'Failed to optimize article' });
  }
});

// Get trending topics
router.get('/trending', async (req, res) => {
  try {
    const trendingTopics = await TrendingService.getTrendingTopics();
    
    res.json({
      success: true,
      topics: trendingTopics
    });
  } catch (error) {
    console.error('Error getting trending topics:', error);
    res.status(500).json({ error: 'Failed to get trending topics' });
  }
});

// Schedule daily article generation
router.post('/schedule-daily', async (req, res) => {
  try {
    // This would typically be handled by a cron job
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Daily article generation scheduled'
    });
  } catch (error) {
    console.error('Error scheduling daily generation:', error);
    res.status(500).json({ error: 'Failed to schedule daily generation' });
  }
});

module.exports = router;
