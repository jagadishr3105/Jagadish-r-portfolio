# Deployment Guide

This guide covers deploying your Data Analyst Portfolio to various hosting platforms for both frontend and backend components.

## 🌐 Frontend Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers excellent React support with automatic deployments from Git.

#### Setup Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build and Deploy**
   ```bash
   cd frontend
   npm run build
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `REACT_APP_API_URL=https://your-backend-url.com`

4. **Custom Domain (Optional)**
   - Go to Domains section in Vercel dashboard
   - Add your custom domain
   - Configure DNS records as instructed

#### Automatic Deployments:
- Connect your GitHub repository
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests

### Option 2: Netlify

Great alternative with similar features to Vercel.

#### Setup Steps:

1. **Build the Project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

3. **Or Deploy via Git**
   - Connect GitHub repository in Netlify dashboard
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Set environment variables in Site Settings

### Option 3: GitHub Pages

Free option for static sites.

#### Setup Steps:

1. **Install gh-pages**
   ```bash
   cd frontend
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Backend Deployment Options

### Option 1: Render (Recommended)

Render offers free tier with automatic deployments.

#### Setup Steps:

1. **Create render.yaml** (in backend directory)
   ```yaml
   services:
     - type: web
       name: portfolio-api
       env: python
       buildCommand: pip install -r requirements.txt
       startCommand: gunicorn app:app
       envVars:
         - key: FLASK_ENV
           value: production
         - key: EMAIL_HOST
           sync: false
         - key: EMAIL_USER
           sync: false
         - key: EMAIL_PASSWORD
           sync: false
         - key: RECIPIENT_EMAIL
           sync: false
   ```

2. **Connect Repository**
   - Go to Render dashboard
   - Connect your GitHub repository
   - Select backend directory
   - Configure environment variables

3. **Environment Variables**
   Set these in Render dashboard:
   ```
   FLASK_ENV=production
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASSWORD=your_app_password
   RECIPIENT_EMAIL=your.email@gmail.com
   ```

### Option 2: Heroku

Popular platform with good Python support.

#### Setup Steps:

1. **Create Procfile** (in backend directory)
   ```
   web: gunicorn app:app
   ```

2. **Install Heroku CLI and Deploy**
   ```bash
   cd backend
   heroku login
   heroku create your-portfolio-api
   
   # Set environment variables
   heroku config:set FLASK_ENV=production
   heroku config:set EMAIL_HOST=smtp.gmail.com
   heroku config:set EMAIL_USER=your.email@gmail.com
   heroku config:set EMAIL_PASSWORD=your_app_password
   heroku config:set RECIPIENT_EMAIL=your.email@gmail.com
   
   # Deploy
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

3. **Scale the App**
   ```bash
   heroku ps:scale web=1
   ```

### Option 3: Railway

Modern platform with simple deployment.

#### Setup Steps:

1. **Connect Repository**
   - Go to Railway dashboard
   - Connect GitHub repository
   - Select backend directory

2. **Configure Environment**
   - Railway auto-detects Python
   - Add environment variables in dashboard
   - Deploy automatically triggers

### Option 4: PythonAnywhere

Good for beginners with web-based interface.

#### Setup Steps:

1. **Upload Code**
   - Use Files tab to upload backend code
   - Or clone from GitHub

2. **Create Web App**
   - Go to Web tab
   - Create new web app
   - Choose Flask framework
   - Configure WSGI file

3. **Configure WSGI**
   ```python
   import sys
   import os
   
   path = '/home/yourusername/portfolio-backend'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import app as application
   ```

## 🔐 Environment Variables Setup

### Gmail App Password Setup

1. **Enable 2-Factor Authentication**
   - Go to Google Account settings
   - Security → 2-Step Verification → Turn On

2. **Generate App Password**
   - Security → App passwords
   - Select app: Mail
   - Select device: Other (Custom name)
   - Copy the generated password

3. **Use in Environment Variables**
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASSWORD=generated_app_password
   ```

### Alternative Email Providers

#### SendGrid
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
```

#### Mailgun
```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your_mailgun_username
EMAIL_PASSWORD=your_mailgun_password
```

## 🌍 Custom Domain Setup

### Frontend Domain (Vercel/Netlify)

1. **Purchase Domain**
   - Namecheap, GoDaddy, or Google Domains

2. **Configure DNS**
   ```
   Type: CNAME
   Name: www
   Value: your-app.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

3. **Add to Platform**
   - Add domain in Vercel/Netlify dashboard
   - Wait for SSL certificate generation

### Backend Subdomain

1. **Create Subdomain**
   ```
   Type: CNAME
   Name: api
   Value: your-backend.render.com
   ```

2. **Update Frontend API URL**
   ```javascript
   const API_URL = 'https://api.yourdomain.com';
   ```

## 📊 Performance Optimization

### Frontend Optimization

1. **Build Optimization**
   ```bash
   # Analyze bundle size
   npm install --save-dev webpack-bundle-analyzer
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

2. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Compress images before upload

3. **Code Splitting**
   ```javascript
   import { lazy, Suspense } from 'react';
   
   const Projects = lazy(() => import('./components/Projects'));
   
   <Suspense fallback={<div>Loading...</div>}>
     <Projects />
   </Suspense>
   ```

### Backend Optimization

1. **Gunicorn Configuration**
   ```bash
   # Create gunicorn.conf.py
   bind = "0.0.0.0:8000"
   workers = 2
   worker_class = "sync"
   worker_connections = 1000
   timeout = 30
   max_requests = 1000
   max_requests_jitter = 100
   ```

2. **Caching Headers**
   ```python
   from flask import Flask, make_response
   
   @app.after_request
   def after_request(response):
       response.headers['Cache-Control'] = 'public, max-age=300'
       return response
   ```

## 🔒 Security Configuration

### HTTPS Setup

1. **Frontend**: Automatic with Vercel/Netlify
2. **Backend**: Automatic with Render/Heroku
3. **Custom Domain**: Configure SSL certificate

### CORS Configuration

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['https://yourdomain.com'])
```

### Environment Security

1. **Never commit .env files**
2. **Use platform environment variables**
3. **Rotate API keys regularly**
4. **Use strong passwords**

## 📈 Monitoring and Analytics

### Frontend Analytics

1. **Google Analytics**
   ```html
   <!-- In public/index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```
   
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   function App() {
     return (
       <>
         <YourApp />
         <Analytics />
       </>
     );
   }
   ```

### Backend Monitoring

1. **Logging**
   ```python
   import logging
   
   logging.basicConfig(level=logging.INFO)
   logger = logging.getLogger(__name__)
   
   @app.route('/api/contact', methods=['POST'])
   def contact():
       logger.info(f"Contact form submission from {request.remote_addr}")
   ```

2. **Health Checks**
   ```python
   @app.route('/health')
   def health():
       return {'status': 'healthy', 'timestamp': datetime.now().isoformat()}
   ```

## 🚀 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: |
          cd frontend
          npm install
      - name: Build
        run: |
          cd frontend
          npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   ```python
   # Backend: Update CORS configuration
   CORS(app, origins=['https://yourdomain.com'])
   ```

2. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Email Not Working**
   - Check Gmail app password
   - Verify environment variables
   - Check spam folder
   - Review server logs

4. **API Connection Issues**
   - Verify backend URL in frontend
   - Check HTTPS/HTTP mismatch
   - Confirm backend is running

### Debug Commands

```bash
# Frontend build logs
npm run build 2>&1 | tee build.log

# Backend logs (Heroku)
heroku logs --tail -a your-app-name

# Backend logs (Render)
# Check logs in Render dashboard

# Test API endpoint
curl -X GET https://your-backend-url.com/api/health
```

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] All environment variables configured
- [ ] Email functionality tested locally
- [ ] Build process successful
- [ ] All external links verified
- [ ] Mobile responsiveness tested
- [ ] Performance optimized

### Post-Deployment
- [ ] Frontend accessible via domain
- [ ] Backend API responding
- [ ] Contact form working
- [ ] All navigation links functional
- [ ] Analytics tracking active
- [ ] SSL certificate active
- [ ] SEO meta tags verified

### Ongoing Maintenance
- [ ] Monitor uptime and performance
- [ ] Regular security updates
- [ ] Content updates
- [ ] Analytics review
- [ ] Backup configurations

## 📞 Support Resources

- **Vercel**: [Documentation](https://vercel.com/docs)
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **Render**: [Documentation](https://render.com/docs)
- **Heroku**: [Documentation](https://devcenter.heroku.com/)

Remember to test thoroughly in a staging environment before deploying to production!
