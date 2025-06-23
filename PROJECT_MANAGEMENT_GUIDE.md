# PROJECT MANAGEMENT GUIDE
# =========================

## File Structure Overview

```
client/src/
├── data/
│   └── projects.ts          # 📁 MAIN PROJECT DATA FILE - Edit this to add projects
├── pages/
│   ├── Home.tsx             # 🏠 Home page with brown strip and font switcher
│   ├── About.tsx            # 👤 About page (change your photo here)
│   ├── Projects.tsx         # 📋 Projects grid with masonry layout
│   ├── ProjectDetail.tsx    # 📄 Individual project detail pages
│   ├── Pricing.tsx          # 💰 Pricing plans (Elegance/Elite)
│   └── Contact.tsx          # 📧 Contact form (sends to contact@aakaarastudio.in)
├── components/
│   ├── Navigation.tsx       # 🍔 Hamburger menu navigation
│   ├── FontSwitcher.tsx     # 🔤 Font switching component
│   └── ScrollToTop.tsx      # ⬆️ Scroll to top button
└── contexts/
    └── FontContext.tsx      # 🎨 Font management context
```

## How to Add New Projects

### Step 1: Add Basic Project Info
Edit `client/src/data/projects.ts` and add to the `projectList` array:

```javascript
{
  id: 21,                               // Next available ID
  slug: "your-project-name",           // URL-friendly name (no spaces)
  title: "Your Project Title",         // Display name
  category: "Architecture",            // "Architecture" | "Interior Design" | "Landscape"
  image: "https://your-image-url.jpg", // Main project image
  description: "Brief project description for the grid view."
}
```

### Step 2: Add Detailed Project Info (Optional)
In the same file, add to the `projectDetails` object:

```javascript
"your-project-name": {  // Must match the slug above
  slug: "your-project-name",
  title: "Your Project Title",
  category: "Architecture",
  location: "City, State",
  year: "2024",
  client: "Client Type",
  area: "X,XXX sq ft",
  images: [
    "https://image1.jpg",  // Hero image
    "https://image2.jpg",  // Additional images
    "https://image3.jpg"
  ],
  description: "Detailed project description",
  challenge: "What challenges did this project face?",
  solution: "How did you solve those challenges?",
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ]
}
```

## Image Management

### Where to Upload Images
1. **Unsplash** (free): https://unsplash.com
2. **Imgur** (free): https://imgur.com
3. **Cloudinary** (free tier): https://cloudinary.com
4. **Your own hosting**: Upload to your website/server

### Image Requirements
- **Grid Images**: 800x600px (4:3 ratio)
- **Detail Images**: 1200x800px (3:2 ratio)
- **Format**: JPG or PNG
- **Size**: Under 500KB for fast loading

### Getting Image URLs
1. Upload image to hosting service
2. Right-click → "Copy image address"
3. Use that URL in the projects.ts file

## Page-Specific Customization

### Home Page (`client/src/pages/Home.tsx`)
- **Font Switcher**: Button in brown strip (R/P) changes "aakaara" font
- **Service List**: Edit the services in the brown strip
- **Main Content**: Edit the description and services list

### About Page (`client/src/pages/About.tsx`)
- **Your Photo**: Line 9 - replace the `src` URL
- **Bio Text**: Edit the paragraph content
- **Name/Title**: Update Ar. Shivangi Shivakumar info

### Pricing Page (`client/src/pages/Pricing.tsx`)
- **Package Prices**: Currently ₹1,779 (Elegance) and ₹2,249 (Elite)
- **Features**: Edit the `features` array to change what's included
- **Descriptions**: Modify package descriptions

### Contact Page (`client/src/pages/Contact.tsx`)
- **Email Destination**: Currently sends to contact@aakaarastudio.in
- **Form Fields**: Add/remove form fields as needed
- **Contact Info**: Update phone, email, address in contact section

## Design Customization

### Colors (edit `client/src/index.css`)
```css
--aakaara-brown: #7f6a4d;      /* Main brown color */
--aakaara-dark-brown: #5a3a22;  /* Darker brown */
--aakaara-light-brown: #d9c4b0; /* Light brown */
--aakaara-text: #7f6a4d;        /* Text color */
```

### Fonts
- **Body Text**: Quicksand (Google Fonts)
- **Headings**: Playfair Display (Google Fonts)
- **Logo**: Rigot Bold (custom font) or Playfair Display

## Navigation

### Hamburger Menu (`client/src/components/Navigation.tsx`)
- **Menu Items**: Edit the `navigation` array
- **Styling**: Slide-out animation from left
- **Active States**: Automatic highlighting of current page

## Quick Checklist for Adding Projects

- [ ] Choose a unique slug (URL name)
- [ ] Upload your images and get URLs
- [ ] Add basic info to `projectList` array
- [ ] Add detailed info to `projectDetails` object (optional)
- [ ] Test the project grid and detail page
- [ ] Check mobile responsiveness

## Tips for Best Results

1. **Consistent Image Sizes**: Use similar aspect ratios for better grid layout
2. **SEO-Friendly Slugs**: Use descriptive, URL-friendly names
3. **Quality Images**: High-resolution images make your work look professional
4. **Detailed Descriptions**: Help potential clients understand your process
5. **Regular Updates**: Keep adding new projects to showcase growth

## Getting Help

If you need help:
1. Check this guide first
2. Look at existing project examples in the code
3. Test changes on a single project before adding many
4. Keep backups of your projects.ts file

Happy project managing! 🎯