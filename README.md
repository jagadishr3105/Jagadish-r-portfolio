# Data Analyst Portfolio Website

A modern, responsive portfolio website built with React frontend and Python Flask backend, designed to showcase data analysis skills, projects, and experience.

## 🌟 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: Hero, About, Projects, Skills, Experience, and Contact
- **Contact Form**: Functional contact form with email integration
- **Smooth Animations**: Framer Motion animations and transitions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Lazy loading and optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library
- **Material-UI (MUI)** - Component library and styling
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Python-dotenv** - Environment variable management
- **SMTP** - Email functionality

## 📁 Project Structure

```
data-analyst-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Skills.js
│   │   │   ├── Experience.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   └── ScrollToTop.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── env.example
│   └── venv/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Git

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp env.example .env
   # Edit .env file with your email credentials
   ```

5. **Start Flask server**
   ```bash
   python app.py
   ```

The backend will be available at `http://localhost:5000`

## ⚙️ Configuration

### Email Setup (Contact Form)

To enable the contact form functionality, configure your email settings in the `.env` file:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your.email@gmail.com
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASSWORD`

### Customizing Content

#### Personal Information
Edit the following files to customize your information:

**Frontend Components:**
- `src/components/Hero.js` - Name, title, bio, social links
- `src/components/About.js` - About section, education, interests
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Footer details

**Backend API:**
- `backend/app.py` - Portfolio info endpoint

#### Projects Section
Update `src/components/Projects.js` with your projects:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    image: '/path/to/image.jpg',
    technologies: ['Python', 'Tableau', 'SQL'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://your-demo.com',
    category: 'Dashboard',
  },
  // Add more projects...
];
```

#### Skills Section
Modify `src/components/Skills.js` to reflect your skills:

```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95, description: 'Pandas, NumPy, Scikit-learn' },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

#### Experience Section
Update `src/components/Experience.js` with your work history:

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    technologies: ['Python', 'SQL', 'Tableau'],
  },
  // Add more experiences...
];
```

## 🎨 Styling and Theming

The website uses a dark theme with customizable colors. Main theme colors:

- **Primary**: `#64ffda` (Teal)
- **Secondary**: `#f50057` (Pink)
- **Background**: `#0a192f` (Dark Blue)
- **Paper**: `#112240` (Lighter Dark Blue)

To customize colors, edit `src/App.js`:

```javascript
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#your-color',
    },
    // ... other colors
  },
});
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

### Backend Deployment (Heroku/Render)

1. **Create Procfile**
   ```
   web: gunicorn app:app
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

3. **Deploy to Render**
   - Connect your GitHub repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `gunicorn app:app`

### Environment Variables

Set the following environment variables in your deployment platform:

```
FLASK_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your.email@gmail.com
```

## 🔧 Development

### Adding New Sections

1. **Create component file**
   ```bash
   touch src/components/NewSection.js
   ```

2. **Import in App.js**
   ```javascript
   import NewSection from './components/NewSection';
   ```

3. **Add to component tree**
   ```javascript
   <NewSection />
   ```

### Custom Animations

Use Framer Motion for animations:

```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

## 📊 Performance Optimization

- **Image Optimization**: Use WebP format and lazy loading
- **Code Splitting**: Implement React.lazy() for large components
- **Bundle Analysis**: Use `npm run build` and analyze bundle size
- **Caching**: Configure proper cache headers for static assets

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure Flask-CORS is properly configured
   - Check frontend API URL matches backend URL

2. **Email Not Sending**
   - Verify email credentials in `.env`
   - Check Gmail app password setup
   - Review server logs for error messages

3. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for version conflicts in package.json

### Debug Mode

Enable debug mode for development:

```bash
# Backend
export FLASK_ENV=development

# Frontend
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have questions or need help customizing the portfolio:

- Create an issue on GitHub
- Check the documentation
- Review the code comments

## 🎯 Future Enhancements

- [ ] Blog section integration
- [ ] Admin dashboard for content management
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced animations and micro-interactions

---

**Built with ❤️ for Data Analysts and Data Scientists**
