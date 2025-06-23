# Aakaara Studio Website - Complete Customization Guide

## 📝 Text Content Changes

### 1. Homepage Content
**File:** `client/src/pages/Home.tsx`
- **Main Headline:** Line 11 - "Redefining Spaces with Expertise..."
- **Subtitle:** Line 15 - "Crafting bespoke solutions..."
- **Services Description:** Lines 21-31 - Architecture, Interior, Landscape descriptions
- **Right Sidebar Services:** Lines 42-44 - Architecture, Interior, Landscape labels

### 2. About Page Content
**File:** `client/src/pages/About.tsx`
- **Page Title:** "About Us" section
- **Company Description:** Main paragraph about Aakaara Studio
- **Mission Statement:** Company values and approach
- **Team Information:** Architect details and credentials

### 3. Contact Page Content
**File:** `client/src/pages/Contact.tsx`
- **Page Title:** Line ~28 - "Get In Touch"
- **Contact Description:** Line ~32 - Contact form introduction
- **Form Labels:** Name, Email, Phone, Subject, Message labels
- **Contact Information:** Phone, email, address details

### 4. Projects Page Content
**File:** `client/src/pages/Projects.tsx`
- **Page Title:** Line 28 - "Our Projects"
- **Page Description:** Line 31 - Portfolio introduction text
- **Category Names:** All, Architecture, Interior Design, Landscape

### 5. Pricing Page Content
**File:** `client/src/pages/Pricing.tsx`
- **Page Title:** Line 20 - "Pricing Plans"
- **Description:** Line 23 - Pricing introduction
- **Package Names:** Elegance, Elite
- **Pricing Amounts:** ₹1,779, ₹2,249
- **Features List:** Lines 5-12 - All service features

### 6. Footer Content (All Pages)
**Location:** Footer sections in each page file
- **Architect Name:** "Ar. Shivangi Shivakumar"
- **Phone Number:** "+91 99726 81819"
- **Email:** "contact@aakaarastudio.in"
- **Address:** "Nagasandra, Bangalore- 560073"

---

## 🖼️ Image Management

### 1. Project Images
**File:** `client/src/data/projects.ts`
- **Main Project Images:** Update `image` field for each project
- **Project Detail Images:** Update `images` array in `projectDetails`
- **Image Location:** Store images in `attached_assets/` folder
- **Image Format:** Use import path `@assets/image_name.jpg`

### 2. Adding New Project Images
```javascript
// In projects.ts
{
  id: 12,
  slug: "new-project",
  title: "New Project Name",
  category: "Architecture", // or "Interior Design" or "Landscape"
  image: "/path/to/main/image.jpg",
  description: "Project description here"
}

// For detailed project view
"new-project": {
  slug: "new-project",
  images: [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg"
  ]
}
```

### 3. Background Images
- **Hero Sections:** Can be added to any page in the CSS classes
- **Section Backgrounds:** Modify component styles for custom backgrounds

---

## 🎨 Design & Color Changes

### 1. Color Scheme
**File:** `client/src/index.css`
**Lines:** 17-23 - CSS Variables

```css
:root {
  --aakaara-brown: #8B4513;        /* Main brown color */
  --aakaara-dark-brown: #654321;   /* Darker brown */
  --aakaara-light-brown: #D2B48C;  /* Light brown */
  --aakaara-text: #2C3E50;         /* Main text color */
}
```

### 2. Typography
**File:** `client/src/index.css`
- **Rigot Font:** Lines 25-30 - Used for "aakaara" text
- **Playfair Font:** Lines 32-37 - Used for headings
- **Font Sizes:** Can be changed in each component's className

### 3. Button Styles
**Locations:** Throughout component files
- **Primary Buttons:** `bg-aakaara-brown text-white`
- **Secondary Buttons:** `border border-aakaara-brown text-aakaara-brown`
- **Hover Effects:** `hover:bg-aakaara-dark-brown`

### 4. Layout & Spacing
- **Container Width:** `max-w-[1200px]` - Can be changed globally
- **Padding:** `px-6 md:px-12` - Responsive padding
- **Margins:** `mb-6`, `mt-8` etc. - Tailwind spacing classes

---

## 🏗️ Structural Changes

### 1. Adding New Pages
1. **Create New Page:** `client/src/pages/NewPage.tsx`
2. **Add Route:** `client/src/App.tsx` - Add new route
3. **Add Navigation:** `client/src/components/Navigation.tsx` - Add menu item

### 2. Navigation Menu
**File:** `client/src/components/Navigation.tsx`
- **Menu Items:** Lines with Link components
- **Mobile Menu:** Hamburger menu items
- **Logo Text:** "aakaara" with font switching

### 3. Project Categories
**File:** `client/src/data/projects.ts`
- **Categories:** "Architecture", "Interior Design", "Landscape"
- **Adding New Category:** Add to project objects and update filters

### 4. Contact Form Fields
**File:** `client/src/pages/Contact.tsx`
- **Form Fields:** Name, Email, Phone, Subject, Message, Project Type
- **Validation:** Required fields marked with *
- **Options:** Project type dropdown options

---

## 📱 Responsive Design

### 1. Breakpoints
- **Mobile:** Default styles
- **Tablet:** `md:` prefix (768px+)
- **Desktop:** `lg:` prefix (1024px+)
- **Large Desktop:** `xl:` prefix (1280px+)

### 2. Mobile-Specific Changes
- **Navigation:** Hamburger menu for mobile
- **Grid Layout:** Different column counts for different screens
- **Font Sizes:** Responsive text sizing with `text-[size] md:text-[size]`

---

## 🔧 Advanced Customizations

### 1. Animation Changes
**File:** `client/src/components/LoadingScreen.tsx`
- **Loading Animation:** Building construction animation
- **Duration:** Change timeout in `client/src/App.tsx` line 41

**File:** `client/src/components/PageTransition.tsx`
- **Transition Effects:** Fade and slide animations
- **Duration:** Animation timing and easing

### 2. Font Switching Feature
**File:** `client/src/contexts/FontContext.tsx`
- **Available Fonts:** Rigot Bold, Playfair Display
- **Switch Trigger:** R and P keys
- **Target Element:** "aakaara" text only

### 3. Masonry Layout
**File:** `client/src/pages/Projects.tsx`
- **Columns:** Responsive column count
- **Spacing:** Gap between project cards
- **Card Design:** Shadow, borders, hover effects

---

## 📧 Email & Contact Setup

### 1. Email Configuration
**File:** `server/email.ts`
- **Email Service:** SendGrid integration
- **Template:** Email format and content
- **Recipient:** Where contact forms are sent

### 2. Contact Information
**Update in All Footer Sections:**
- **Phone Number**
- **Email Address**
- **Physical Address**
- **Social Media Links** (can be added)

---

## 🎯 Quick Edit Locations

### Most Common Changes:
1. **Project Content:** `client/src/data/projects.ts`
2. **Colors:** `client/src/index.css` (CSS variables)
3. **Contact Info:** Footer sections in page files
4. **Company Name:** Navigation and footer areas
5. **Services:** Homepage services list
6. **Pricing:** `client/src/pages/Pricing.tsx`

### Image Updates:
1. **Add Images:** Place in `attached_assets/` folder
2. **Update References:** Change paths in `projects.ts`
3. **Optimize:** Compress images before uploading

### Text Updates:
1. **Page Titles:** First h1 element in each page
2. **Descriptions:** Paragraph elements
3. **Button Text:** Button content
4. **Form Labels:** Label elements

---

## 🚀 Publishing Changes

### After Making Changes:
1. **Test Locally:** `npm run dev`
2. **Build for Production:** `npm run build`
3. **Deploy:** Upload to your hosting platform
4. **Clear Cache:** Browser refresh with Ctrl+F5

### Best Practices:
- **Test on Mobile:** Check responsive design
- **Optimize Images:** Use WebP format when possible
- **Keep Backups:** Save original files before major changes
- **Gradual Updates:** Make small changes and test

---

## 📞 Support Notes

### File Structure Overview:
```
client/src/
├── components/     # Reusable UI components
├── pages/         # Main page files
├── data/          # Project and content data
├── contexts/      # App settings (font switching)
├── lib/           # Utilities and configurations
└── index.css      # Global styles and colors
```

### Common Issues:
- **Images Not Loading:** Check file paths and format
- **Colors Not Changing:** Update CSS variables in index.css
- **Layout Issues:** Review Tailwind CSS classes
- **Mobile Problems:** Test responsive breakpoints

This guide covers all customizable aspects of your Aakaara Studio website. Each change location is clearly marked with file paths and line numbers for easy editing.