const axios = require('axios');
const cheerio = require('cheerio');

class TrendingService {
  constructor() {
    this.sources = [
      {
        name: 'Reddit Data Science',
        url: 'https://www.reddit.com/r/datascience/hot.json',
        type: 'reddit'
      },
      {
        name: 'Reddit Machine Learning',
        url: 'https://www.reddit.com/r/MachineLearning/hot.json',
        type: 'reddit'
      },
      {
        name: 'GitHub Trending',
        url: 'https://github.com/trending',
        type: 'github'
      },
      {
        name: 'Kaggle Competitions',
        url: 'https://www.kaggle.com/competitions',
        type: 'kaggle'
      }
    ];
  }

  // Get trending topics from multiple sources
  async getTrendingTopics() {
    try {
      const topics = [];
      
      // Get Reddit trending topics
      const redditTopics = await this.getRedditTrending();
      topics.push(...redditTopics);

      // Get GitHub trending
      const githubTopics = await this.getGitHubTrending();
      topics.push(...githubTopics);

      // Get Kaggle trending
      const kaggleTopics = await this.getKaggleTrending();
      topics.push(...kaggleTopics);

      // Score and rank topics
      const scoredTopics = this.scoreTopics(topics);
      
      return scoredTopics.sort((a, b) => b.score - a.score).slice(0, 10);
    } catch (error) {
      console.error('Error getting trending topics:', error);
      return [];
    }
  }

  // Get trending topics from Reddit
  async getRedditTrending() {
    try {
      const topics = [];
      
      for (const source of this.sources.filter(s => s.type === 'reddit')) {
        const response = await axios.get(source.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; BlogBot/1.0)'
          }
        });

        const posts = response.data.data.children.slice(0, 10);
        
        posts.forEach(post => {
          const data = post.data;
          topics.push({
            title: data.title,
            description: data.selftext?.substring(0, 200) || '',
            score: data.score,
            comments: data.num_comments,
            url: `https://reddit.com${data.permalink}`,
            source: source.name,
            category: this.categorizeTopic(data.title),
            trendingScore: data.score + (data.num_comments * 0.5)
          });
        });
      }

      return topics;
    } catch (error) {
      console.error('Error getting Reddit trending:', error);
      return [];
    }
  }

  // Get trending repositories from GitHub
  async getGitHubTrending() {
    try {
      const response = await axios.get('https://github.com/trending', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; BlogBot/1.0)'
        }
      });

      const $ = cheerio.load(response.data);
      const topics = [];

      $('.Box-row').each((index, element) => {
        if (index >= 10) return; // Limit to top 10

        const title = $(element).find('h2 a').text().trim();
        const description = $(element).find('p').text().trim();
        const stars = $(element).find('.octicon-star').parent().text().trim();
        const language = $(element).find('[itemprop="programmingLanguage"]').text().trim();

        // Filter for data science related topics
        if (this.isDataScienceRelated(title, description, language)) {
          topics.push({
            title: `GitHub Trending: ${title}`,
            description: description,
            score: this.parseStars(stars),
            source: 'GitHub Trending',
            category: this.categorizeTopic(title),
            trendingScore: this.parseStars(stars),
            language: language
          });
        }
      });

      return topics;
    } catch (error) {
      console.error('Error getting GitHub trending:', error);
      return [];
    }
  }

  // Get trending competitions from Kaggle
  async getKaggleTrending() {
    try {
      const response = await axios.get('https://www.kaggle.com/competitions', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; BlogBot/1.0)'
        }
      });

      const $ = cheerio.load(response.data);
      const topics = [];

      $('.competition-item').each((index, element) => {
        if (index >= 5) return; // Limit to top 5

        const title = $(element).find('.competition-title').text().trim();
        const description = $(element).find('.competition-description').text().trim();
        const participants = $(element).find('.competition-participants').text().trim();

        topics.push({
          title: `Kaggle Competition: ${title}`,
          description: description,
          score: this.parseParticipants(participants),
          source: 'Kaggle',
          category: 'Data Science',
          trendingScore: this.parseParticipants(participants)
        });
      });

      return topics;
    } catch (error) {
      console.error('Error getting Kaggle trending:', error);
      return [];
    }
  }

  // Categorize topic based on keywords
  categorizeTopic(title) {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('machine learning') || titleLower.includes('ml') || titleLower.includes('neural network')) {
      return 'Machine Learning';
    } else if (titleLower.includes('database') || titleLower.includes('sql') || titleLower.includes('data warehouse')) {
      return 'Database';
    } else if (titleLower.includes('quality') || titleLower.includes('testing') || titleLower.includes('engineering')) {
      return 'Quality Engineering';
    } else if (titleLower.includes('ai') || titleLower.includes('artificial intelligence')) {
      return 'AI';
    } else if (titleLower.includes('analytics') || titleLower.includes('visualization')) {
      return 'Analytics';
    } else {
      return 'Data Science';
    }
  }

  // Check if topic is data science related
  isDataScienceRelated(title, description, language) {
    const text = `${title} ${description} ${language}`.toLowerCase();
    const keywords = [
      'data science', 'machine learning', 'ai', 'artificial intelligence',
      'python', 'r', 'sql', 'database', 'analytics', 'statistics',
      'deep learning', 'neural network', 'tensorflow', 'pytorch',
      'pandas', 'numpy', 'scikit-learn', 'jupyter', 'notebook'
    ];
    
    return keywords.some(keyword => text.includes(keyword));
  }

  // Score topics based on multiple factors
  scoreTopics(topics) {
    return topics.map(topic => {
      let score = topic.trendingScore || 0;
      
      // Boost score for data science keywords
      const text = `${topic.title} ${topic.description}`.toLowerCase();
      if (text.includes('machine learning')) score += 50;
      if (text.includes('ai') || text.includes('artificial intelligence')) score += 40;
      if (text.includes('data science')) score += 30;
      if (text.includes('python')) score += 20;
      if (text.includes('sql')) score += 15;
      
      // Boost for recent activity
      if (topic.source.includes('Reddit')) score += 10;
      if (topic.source.includes('GitHub')) score += 15;
      if (topic.source.includes('Kaggle')) score += 20;
      
      return { ...topic, score };
    });
  }

  // Helper methods
  parseStars(starsText) {
    const match = starsText.match(/(\d+(?:\.\d+)?)([kK]?)/);
    if (!match) return 0;
    
    let num = parseFloat(match[1]);
    if (match[2].toLowerCase() === 'k') {
      num *= 1000;
    }
    return num;
  }

  parseParticipants(participantsText) {
    const match = participantsText.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }
}

module.exports = new TrendingService();
