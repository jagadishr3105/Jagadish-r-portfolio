# Portfolio Customization Guide

This guide will help you customize the Data Analyst Portfolio to match your personal brand and showcase your unique skills and experience.

## 📝 Content Customization

### 1. Personal Information

#### Hero Section (`src/components/Hero.js`)

**Line 42-44**: Update your name and title
```javascript
<Typography variant="h1">
  <span className="gradient-text">Your Name Here</span>
</Typography>
```

**Line 54-56**: Update your professional title
```javascript
<Typography variant="h2">
  Data Analyst & Insights Expert
</Typography>
```

**Line 65-71**: Update your bio/tagline
```javascript
<Typography variant="body1">
  I'm a passionate data analyst who transforms complex datasets into
  actionable insights. I specialize in building interactive dashboards,
  performing statistical analysis, and creating data-driven solutions
  that drive business growth.
</Typography>
```

**Line 27-39**: Update social media links
```javascript
const socialLinks = [
  {
    icon: <LinkedIn />,
    href: 'https://linkedin.com/in/your-actual-profile',
    label: 'LinkedIn',
  },
  {
    icon: <GitHub />,
    href: 'https://github.com/your-actual-username',
    label: 'GitHub',
  },
  {
    icon: <Email />,
    href: 'mailto:your.actual.email@example.com',
    label: 'Email',
  },
];
```

#### About Section (`src/components/About.js`)

**Line 75-85**: Update your bio
```javascript
<Typography variant="body1">
  I'm a passionate Data Analyst with over X years of experience in transforming 
  raw data into meaningful insights that drive business decisions. My journey began 
  with a degree in [Your Degree] and has evolved into a career focused on uncovering 
  patterns, trends, and opportunities hidden within data.
</Typography>
```

**Line 87-97**: Update your experience description
```javascript
<Typography variant="body1">
  I specialize in [your specializations]. My expertise spans across various industries 
  including [your industries], where I've helped organizations 
  increase efficiency and profitability through data-driven strategies.
</Typography>
```

**Line 99-106**: Update your interests
```javascript
<Typography variant="body1">
  When I'm not analyzing data, you can find me [your hobbies/interests].
</Typography>
```

**Line 118-140**: Update education details
```javascript
<Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
  Your Actual Degree
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
  Your University • Your Years
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  Your specialization details
</Typography>
```

### 2. Skills Section (`src/components/Skills.js`)

**Line 18-30**: Update your tech stack
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code />,
    color: '#64ffda',
    skills: [
      { name: 'Python', level: 95, description: 'Your Python experience' },
      { name: 'R', level: 88, description: 'Your R experience' },
      // Add your actual skills with honest proficiency levels
    ],
  },
  // Update other categories with your actual skills
];
```

**Line 95-102**: Update certifications
```javascript
const certifications = [
  'Your Actual Certification 1',
  'Your Actual Certification 2',
  // Add your real certifications
];
```

### 3. Projects Section (`src/components/Projects.js`)

**Line 18-80**: Replace with your actual projects
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Detailed description of what you built, the problem it solved, and the impact it had.',
    image: '/path/to/your/project/image.jpg',
    technologies: ['Python', 'Tableau', 'SQL'], // Your actual tech stack
    githubUrl: 'https://github.com/yourusername/your-repo',
    liveUrl: 'https://your-live-demo.com',
    category: 'Dashboard', // Dashboard, Machine Learning, etc.
    icon: <Dashboard />,
  },
  // Add 4-6 of your best projects
];
```

### 4. Experience Section (`src/components/Experience.js`)

**Line 20-85**: Update with your work history
```javascript
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Your Company Name',
    location: 'City, State',
    period: 'Start Year - End Year (or Present)',
    logo: '/path/to/company/logo.jpg',
    type: 'Full-time', // Full-time, Part-time, Contract, Internship
    description: 'Brief description of your role and responsibilities.',
    achievements: [
      'Quantified achievement 1 (include numbers/percentages)',
      'Quantified achievement 2',
      'Quantified achievement 3',
      // 3-5 key achievements per role
    ],
    technologies: ['Python', 'SQL', 'Tableau'], // Technologies you used
    icon: <Analytics />,
    color: '#64ffda',
  },
  // Add all your relevant work experience
];
```

### 5. Contact Information (`src/components/Contact.js`)

**Line 25-45**: Update contact details
```javascript
const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'your.actual.email@example.com',
    href: 'mailto:your.actual.email@example.com',
    color: '#64ffda',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: 'Your actual phone number',
    href: 'tel:your-phone-number',
    color: '#f50057',
  },
  {
    icon: <LocationOn />,
    title: 'Location',
    value: 'Your City, State',
    href: 'https://maps.google.com/?q=Your City, State',
    color: '#ff9800',
  },
  // Update with your actual information
];
```

## 🎨 Visual Customization

### 1. Profile Images

Replace placeholder images with your actual photos:

- **Hero Section**: Add your professional headshot to `public/images/profile-hero.jpg`
- **About Section**: Add another photo to `public/images/profile-about.jpg`
- **Project Images**: Add screenshots of your projects to `public/images/projects/`

Update image paths in components:
```javascript
// In Hero.js
<Avatar src="/images/profile-hero.jpg" alt="Your Name" />

// In About.js  
<Avatar src="/images/profile-about.jpg" alt="About Me" />

// In Projects.js
image: '/images/projects/project1-screenshot.jpg',
```

### 2. Color Scheme

#### Primary Colors (`src/App.js`)
```javascript
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#64ffda', // Your brand color
    },
    secondary: {
      main: '#f50057', // Your accent color
    },
    // Keep other colors or customize further
  },
});
```

#### Gradient Text (`src/App.css`)
```css
.gradient-text {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 3. Typography

Update fonts in `src/App.js`:
```javascript
typography: {
  fontFamily: '"Your-Font", "Poppins", "Inter", sans-serif',
  // Add your preferred font family
},
```

Add font imports to `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🔧 Backend Customization

### 1. Portfolio API (`backend/app.py`)

**Line 85-100**: Update portfolio information
```python
@app.route('/api/portfolio-info', methods=['GET'])
def portfolio_info():
    return jsonify({
        'name': 'Your Actual Name',
        'title': 'Your Job Title',
        'email': 'your.email@example.com',
        'phone': 'Your phone number',
        'location': 'Your location',
        'linkedin': 'Your LinkedIn URL',
        'github': 'Your GitHub URL',
        'bio': 'Your bio',
        'skills': ['Your', 'Actual', 'Skills'],
        'experience_years': 4, # Your years of experience
        'projects_completed': 50, # Your project count
        'technologies_mastered': 15, # Your tech count
        'industries_served': 3 # Industries you've worked in
    })
```

### 2. Email Configuration

Create `.env` file in backend directory:
```env
FLASK_ENV=development
PORT=5000

# Your email settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.actual.email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
RECIPIENT_EMAIL=your.actual.email@gmail.com
```

## 📊 Content Strategy Tips

### 1. Projects Selection
- Choose 4-6 of your best projects
- Include variety: dashboards, analysis, ML models, automation
- Focus on business impact and quantified results
- Include both personal and professional projects

### 2. Skills Assessment
- Be honest about proficiency levels (70-95% range)
- Include both technical and soft skills
- Group skills logically (Programming, Visualization, etc.)
- Update regularly as you learn new technologies

### 3. Experience Descriptions
- Use action verbs (Developed, Analyzed, Implemented)
- Include quantified achievements (percentages, dollar amounts, time saved)
- Focus on business impact, not just technical tasks
- Tailor to your target audience/industry

### 4. Professional Photos
- Use high-quality, professional headshots
- Maintain consistent style across images
- Ensure good lighting and clean background
- Consider hiring a professional photographer

## 🚀 Deployment Customization

### 1. Domain and Branding
- Purchase a custom domain (yourname.com)
- Update meta tags in `public/index.html`
- Add favicon and app icons
- Configure social media preview images

### 2. SEO Optimization
```html
<!-- In public/index.html -->
<title>Your Name - Data Analyst Portfolio</title>
<meta name="description" content="Your professional description">
<meta name="keywords" content="data analyst, your skills, your location">
<meta property="og:title" content="Your Name - Data Analyst">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to your preview image">
```

### 3. Analytics Setup
Add Google Analytics to track visitors:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ✅ Pre-Launch Checklist

- [ ] All personal information updated
- [ ] Professional photos added
- [ ] Real projects with working links
- [ ] Accurate skills and experience
- [ ] Contact form tested and working
- [ ] All social media links verified
- [ ] Mobile responsiveness tested
- [ ] Loading speed optimized
- [ ] SEO meta tags configured
- [ ] Analytics tracking setup
- [ ] Domain and hosting configured
- [ ] SSL certificate installed

## 🎯 Ongoing Maintenance

### Monthly Updates
- Add new projects and skills
- Update experience and achievements
- Review and update contact information
- Check all external links

### Quarterly Reviews
- Analyze website traffic and user behavior
- Update design elements and content strategy
- Review and improve SEO performance
- Backup website and data

Remember: Your portfolio is a living document that should evolve with your career. Regular updates keep it fresh and relevant to potential employers and clients.
