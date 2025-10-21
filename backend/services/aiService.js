const OpenAI = require('openai');
const Article = require('../models/Article');

class AIService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  // Analyze writing style from existing articles
  async analyzeWritingStyle() {
    try {
      const articles = await Article.find({ aiGenerated: false })
        .select('title brief content')
        .limit(10);

      if (articles.length === 0) {
        return null;
      }

      const prompt = `
        Analyze the writing style of these articles and provide a detailed style profile:
        
        ${articles.map(article => `
          Title: ${article.title}
          Brief: ${article.brief}
          Content: ${article.content.substring(0, 1000)}...
        `).join('\n\n')}
        
        Please provide:
        1. Tone (professional, casual, technical, etc.)
        2. Complexity level (beginner, intermediate, advanced)
        3. Common keywords and phrases
        4. Average sentence length
        5. Paragraph structure patterns
        6. Writing patterns and preferences
        
        Return as JSON format.
      `;

      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
      });

      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error analyzing writing style:', error);
      return null;
    }
  }

  // Generate article based on trending topic and writing style
  async generateArticle(topic, writingStyle = null) {
    try {
      // Get writing style if not provided
      if (!writingStyle) {
        writingStyle = await this.analyzeWritingStyle();
      }

      const styleInstructions = writingStyle ? `
        Writing Style Guidelines:
        - Tone: ${writingStyle.tone}
        - Complexity: ${writingStyle.complexity}
        - Common keywords: ${writingStyle.keywords?.join(', ')}
        - Sentence length: ${writingStyle.sentenceLength} words average
        - Structure: ${writingStyle.paragraphStructure}
      ` : '';

      const prompt = `
        Write a comprehensive blog article about "${topic}" for a data science and engineering audience.
        
        ${styleInstructions}
        
        Requirements:
        1. Title: Catchy and SEO-friendly
        2. Brief: 1-2 sentence summary
        3. Content: 1500-2500 words with:
           - Introduction with problem statement
           - Main sections with clear headings (use ## for main headings, ### for subheadings)
           - Practical examples and use cases
           - Technical details where appropriate
           - Conclusion with key takeaways
        4. Category: Choose from Data Science, Machine Learning, Database, Quality Engineering, AI, Analytics
        5. Tags: 3-5 relevant tags
        
        Format the response as JSON:
        {
          "title": "Article Title",
          "brief": "Brief description",
          "content": "Full article content with markdown formatting",
          "category": "Category",
          "tags": ["tag1", "tag2", "tag3"],
          "readTime": "X min read"
        }
      `;

      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 4000
      });

      const articleData = JSON.parse(response.choices[0].message.content);
      
      // Generate slug
      articleData.slug = Article.generateSlug(articleData.title);
      articleData.aiGenerated = true;
      articleData.author = 'Jagadish R';
      articleData.publishDate = new Date();

      return articleData;
    } catch (error) {
      console.error('Error generating article:', error);
      throw error;
    }
  }

  // Optimize existing article for SEO
  async optimizeArticle(articleId) {
    try {
      const article = await Article.findById(articleId);
      if (!article) {
        throw new Error('Article not found');
      }

      const prompt = `
        Optimize this article for SEO and engagement:
        
        Title: ${article.title}
        Content: ${article.content.substring(0, 2000)}...
        
        Provide:
        1. Meta description (150-160 characters)
        2. SEO keywords (5-10 relevant keywords)
        3. Social media title (optimized for sharing)
        4. Social media description (engaging for social platforms)
        
        Return as JSON format.
      `;

      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5
      });

      const seoData = JSON.parse(response.choices[0].message.content);
      
      article.seoData = seoData;
      await article.save();

      return seoData;
    } catch (error) {
      console.error('Error optimizing article:', error);
      throw error;
    }
  }
}

module.exports = new AIService();
