# Aakaara Website - Management Instructions

## Summary of Changes Made

✅ **Navigation**: Removed top "aakaara" text and implemented hamburger menu that slides out from left
✅ **Pricing Page**: Redesigned with Elegant and Elite packages matching your screenshot
✅ **Contact Form**: Configured to send emails to contact@aakaarastudio.in
✅ **Font Switching**: Added button in brown strip to switch between Playfair and Rigot Bold fonts
✅ **Responsive Design**: All pages work well on mobile and desktop
✅ **Project Management**: Clear instructions for adding new projects

## How to Add More Projects

### 1. Adding Projects to the Grid
Edit `client/src/pages/Projects.tsx` - look for the comment "TO ADD MORE PROJECTS" and add new project objects like this:

```javascript
{
  id: 7,
  slug: "your-project-slug", // Used in URL
  title: "Your Project Title",
  category: "Architecture", // or "Interior Design" or "Landscape"
  image: "your-image-url",
  description: "Your project description"
}
```

### 2. Adding Project Details
Edit `client/src/pages/ProjectDetail.tsx` - look for the comment "TO ADD MORE PROJECT DETAILS" and add:

```javascript
"your-project-slug": {
  title: "Project Title",
  category: "Category",
  location: "Location",
  year: "Year",
  client: "Client Type", 
  area: "Area",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"], // Multiple images
  description: "Project description",
  challenge: "Project challenge",
  solution: "Project solution", 
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

## How to Change Your Profile Picture

Edit `client/src/pages/About.tsx` - look for the comment "TO CHANGE YOUR PICTURE" and:

1. Upload your image to a hosting service (Imgur, Cloudinary, etc.)
2. Replace the `src` URL with your image URL
3. Ensure image is square (400x400px) for best results

## Font Switching

The "aakaara" text in the brown strip has a small button (R/P) to switch between:
- **P**: Playfair Display (elegant serif)
- **R**: Rigot Bold (your custom font)

## Email Configuration

To enable the contact form to send emails:

1. Get a SendGrid API key from https://sendgrid.com
2. Add the API key as a secret in your environment
3. The form will automatically send emails to contact@aakaarastudio.in

## File Locations

- **Navigation**: `client/src/components/Navigation.tsx`
- **Home Page**: `client/src/pages/Home.tsx`
- **About Page**: `client/src/pages/About.tsx`
- **Projects**: `client/src/pages/Projects.tsx`
- **Project Details**: `client/src/pages/ProjectDetail.tsx`
- **Pricing**: `client/src/pages/Pricing.tsx`
- **Contact**: `client/src/pages/Contact.tsx`
- **Styles**: `client/src/index.css`
- **Font Context**: `client/src/contexts/FontContext.tsx`

## Design Features

- **Brown Color Scheme**: Uses custom Aakaara colors defined in CSS variables
- **Animations**: Fade-in, slide-up, and slide-in animations throughout
- **Mobile Responsive**: Hamburger menu and responsive grid layouts
- **Professional Typography**: Quicksand for body text, Playfair Display for headings
- **Custom Font**: Rigot Bold font is loaded and ready to use

All pages are fully functional and the website is ready for production use!