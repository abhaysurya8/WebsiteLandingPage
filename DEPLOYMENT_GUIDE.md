# Aakaara Studio Website - Deployment Guide

## 🚀 Running Locally on Your Laptop

### Prerequisites
- **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Download from [git-scm.com](https://git-scm.com/)

### Step 1: Download the Project
```bash
# Clone or download the project to your laptop
git clone [your-repo-url]
cd aakaara-website

# OR if you have the project files, navigate to the folder
cd path/to/aakaara-website
```

### Step 2: Install Dependencies
```bash
# Install all required packages
npm install
```

### Step 3: Set Up Environment Variables (Optional)
```bash
# Create environment file for email functionality
echo "SENDGRID_API_KEY=your_sendgrid_api_key_here" > .env

# Note: The website works without email functionality
# Contact form will show a message but won't send emails
```

### Step 4: Run the Development Server
```bash
# Start the website
npm run dev
```

The website will be available at: **http://localhost:5000**

### Step 5: Build for Production (Optional)
```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

---

## 🌐 Hosting Options

### Option 1: Replit (Recommended - Easy)
1. **Upload to Replit**: 
   - Go to [replit.com](https://replit.com)
   - Create new Repl → Upload files
   - Upload your entire project folder

2. **Deploy on Replit**:
   - Click "Deploy" button in Replit
   - Choose "Autoscale Deployment"
   - Your site will get a `.replit.app` domain

### Option 2: Netlify (Free Hosting)
1. **Prepare your project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder
   - Get instant `.netlify.app` domain

### Option 3: Vercel (Free Hosting)
1. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Automatic deployments on code changes

### Option 4: Traditional Web Hosting
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload contents of `dist` folder to your web host
   - Works with any hosting provider (GoDaddy, Hostinger, etc.)

---

## 📧 Email Functionality Setup

### Get SendGrid API Key:
1. **Sign up at [sendgrid.com](https://sendgrid.com)**
2. **Create API Key**:
   - Go to Settings → API Keys
   - Create new key with "Mail Send" permissions
3. **Add to environment**:
   ```bash
   SENDGRID_API_KEY=your_actual_api_key_here
   ```

### Alternative Email Services:
- **Gmail SMTP** - Use with nodemailer
- **Mailgun** - Alternative email service
- **EmailJS** - Client-side email sending

---

## 🛠️ Customization Guide

### Adding New Projects:
Edit `client/src/data/projects.ts`

### Changing Colors:
Edit `client/src/index.css` - Look for `:root` variables

### Updating Contact Info:
Edit footer sections in each page component

### Adding New Pages:
1. Create new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`

---

## 🔧 Troubleshooting

### Common Issues:

**Port already in use**:
```bash
# Kill process on port 5000
npx kill-port 5000
npm run dev
```

**Build errors**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not loading**:
- Ensure images are in `client/public/` folder
- Use relative paths: `/images/project1.jpg`

### Performance Tips:
- Optimize images before uploading
- Use WebP format for better compression
- Keep project descriptions concise

---

## 📞 Support

**Need help?**
- Check the console for error messages
- Ensure all dependencies are installed
- Verify Node.js version is 18+

**For advanced customization**:
- The project uses React + TypeScript
- Styling with Tailwind CSS
- Build tool: Vite

---

## 📋 Quick Command Reference

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Preview production build

# Utilities
npm install          # Install dependencies
npx kill-port 5000   # Kill port if stuck
```

Your Aakaara Studio website is now ready to showcase your architectural excellence! ✨