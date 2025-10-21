const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  brief: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Data Science', 'Machine Learning', 'Database', 'Quality Engineering', 'AI', 'Analytics']
  },
  author: {
    type: String,
    default: 'Jagadish R'
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  readTime: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  featuredImage: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'scheduled'],
    default: 'draft'
  },
  aiGenerated: {
    type: Boolean,
    default: false
  },
  writingStyle: {
    tone: String,
    complexity: String,
    keywords: [String],
    sentenceLength: Number,
    paragraphStructure: String
  },
  trendingScore: {
    type: Number,
    default: 0
  },
  seoData: {
    metaDescription: String,
    keywords: [String],
    socialTitle: String,
    socialDescription: String
  },
  analytics: {
    views: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

// Index for better performance
articleSchema.index({ slug: 1 });
articleSchema.index({ category: 1 });
articleSchema.index({ publishDate: -1 });
articleSchema.index({ trendingScore: -1 });

// Virtual for URL
articleSchema.virtual('url').get(function() {
  return `/blog/${this.slug}`;
});

// Method to calculate read time
articleSchema.methods.calculateReadTime = function() {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

// Method to generate slug from title
articleSchema.statics.generateSlug = function(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

module.exports = mongoose.model('Article', articleSchema);
