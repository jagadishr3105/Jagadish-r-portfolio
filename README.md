# 📊 Data Analyst Portfolio

A modern, responsive portfolio website built with **React** and **Python Flask** to showcase data analysis skills, projects, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20for%20Deployment-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Python](https://img.shields.io/badge/Python-3.12-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-5.x-purple)

## 🌟 Live Demo

> **Note**: Add your live demo link here after deployment

## ✨ Features

### 🎨 **Modern Design**
- Dark theme with professional teal and pink accents
- Smooth animations using Framer Motion
- Fully responsive design for all devices
- Material-UI components for consistent styling

### 📱 **Complete Sections**
- **Hero Section**: Animated introduction with call-to-action
- **About**: Personal bio, education, and interests
- **Projects**: Showcase of 6 data analysis projects
- **Skills**: Categorized technical skills with proficiency levels
- **Experience**: Professional timeline with achievements
- **Contact**: Functional contact form with backend integration

### 🔧 **Technical Features**
- React 18 with modern hooks and components
- Python Flask REST API for contact form
- Email integration for form submissions
- SEO optimized with meta tags
- Performance optimized with lazy loading
- Cross-browser compatibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library
- **Material-UI (MUI)** - Component library and theming
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Python-dotenv** - Environment variable management
- **Gunicorn** - WSGI HTTP Server for deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/data-analyst-portfolio.git
   cd data-analyst-portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend will be available at `http://localhost:3000`

3. **Setup Backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```
   Backend will be available at `http://localhost:5001`

## ⚙️ Configuration

### Email Setup (Contact Form)

1. **Create `.env` file in backend directory:**
   ```bash
   cp env.example .env
   ```

2. **Configure your email settings:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASSWORD=your_gmail_app_password
   RECIPIENT_EMAIL=your.email@gmail.com
   ```

3. **For Gmail users:**
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `EMAIL_PASSWORD`

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `frontend/src/components/Hero.js` - Name, title, bio
- `frontend/src/components/About.js` - About section, education
- `frontend/src/components/Projects.js` - Your projects
- `frontend/src/components/Skills.js` - Your skills and certifications
- `frontend/src/components/Experience.js` - Work experience
- `frontend/src/components/Contact.js` - Contact information

### Styling
- Colors: Edit `frontend/src/App.js` theme configuration
- Fonts: Update font imports in `frontend/public/index.html`
- Images: Replace placeholder images in `frontend/public/images/`

For detailed customization instructions, see [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)

## 🚀 Deployment

### Frontend Options
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

### Backend Options
- **Render** (Recommended)
- **Heroku**
- **Railway**
- **PythonAnywhere**

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## 📁 Project Structure

```
data-analyst-portfolio/
├── frontend/                    # React Application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── App.js             # Main app component
│   │   └── index.js           # Entry point
│   ├── public/                # Static assets
│   └── package.json           # Dependencies
├── backend/                    # Python Flask API
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   └── env.example           # Environment variables template
├── README.md                  # This file
├── CUSTOMIZATION_GUIDE.md     # Customization instructions
├── DEPLOYMENT_GUIDE.md        # Deployment guide
└── PROJECT_SUMMARY.md         # Complete project overview
```

## 📊 Sample Content Included

### Projects (6 Examples)
1. **Financial Dashboard Analytics** - Tableau dashboard with KPIs
2. **Customer Segmentation Analysis** - ML clustering project
3. **Sales Forecasting Model** - Time series analysis
4. **E-commerce Data Pipeline** - ETL pipeline with Airflow
5. **Healthcare Analytics Dashboard** - Power BI metrics
6. **Social Media Sentiment Analysis** - NLP project

### Skills Categories
- Programming Languages (Python, R, SQL, JavaScript)
- Data Visualization (Tableau, Power BI, Matplotlib, Plotly)
- Cloud Platforms (AWS, Google Cloud, Azure, Snowflake)
- Databases & Tools (PostgreSQL, MongoDB, Spark, Airflow)
- Machine Learning (Scikit-learn, TensorFlow, Statistical Modeling)
- Business Intelligence (Excel, Google Analytics, SPSS, Looker)

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Mobile Responsive**: ✅ All breakpoints covered
- **SEO Optimized**: ✅ Meta tags and structured data
- **Fast Loading**: ✅ Optimized assets and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have questions or need help customizing the portfolio:

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Material-UI for the excellent component library
- Framer Motion for smooth animations
- Flask community for the robust web framework

---

**⭐ Star this repository if it helped you build your portfolio!**

**🔗 Don't forget to add your live demo link and update the contact information!**