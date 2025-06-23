# EASY WEBSITE EDITING GUIDE
# ===========================

## Quick Reference for Common Changes

### 📸 Change Your Profile Picture
**File:** `client/src/pages/About.tsx` (Line 9)
1. Upload your photo to https://imgur.com or https://cloudinary.com
2. Copy the image URL
3. Replace the URL in line 9: `src="YOUR_IMAGE_URL_HERE"`
4. Hover over the image to see change instructions

### 🎨 Switch Fonts
**Home Page:** Click the R/P button in the brown strip to switch between:
- **P** = Playfair Display (elegant serif)
- **R** = Rigot Bold (your custom font)

### 📋 Add New Projects
**File:** `client/src/data/projects.ts`

#### Step 1: Add to Project List (Line 12)
```javascript
{
  id: 12, // Next available number
  slug: "your-project-name", // URL-friendly name
  title: "Your Project Title",
  category: "Architecture", // or "Interior Design" or "Landscape"
  image: "https://your-image-url.jpg",
  description: "Brief description for grid view"
}
```

#### Step 2: Add Detailed Info (Line 85)
```javascript
"your-project-name": { // Must match slug above
  slug: "your-project-name",
  title: "Your Project Title",
  category: "Architecture",
  location: "City, State",
  year: "2024",
  client: "Client Type",
  area: "X,XXX sq ft",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  description: "Detailed description",
  challenge: "What challenges did this project face?",
  solution: "How did you solve them?",
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### 🖼️ Upload Images
**Best Options:**
1. **Imgur** (Free): https://imgur.com
2. **Cloudinary** (Free): https://cloudinary.com
3. **Unsplash** (Stock photos): https://unsplash.com

**Image Sizes:**
- Grid images: 800x600px
- Detail images: 1200x800px
- Profile photo: 400x400px (square)

### 📝 Edit Text Content

#### Home Page Text
**File:** `client/src/pages/Home.tsx`
- Line 20-30: Main description
- Line 40-50: Services list in brown strip

#### About Page Text
**File:** `client/src/pages/About.tsx`
- Line 25-35: Your bio/description
- Line 15: Your name/title

#### Contact Information
**File:** `client/src/pages/Contact.tsx`
- Line 180-190: Phone, email, address

#### Pricing Information
**File:** `client/src/pages/Pricing.tsx`
- Line 37-38: Package prices
- Line 4-13: Features list

### 🎨 Change Colors
**File:** `client/src/index.css` (Lines 25-30)
```css
--aakaara-brown: #7f6a4d;      /* Main brown */
--aakaara-dark-brown: #5a3a22;  /* Dark brown */
--aakaara-light-brown: #d9c4b0; /* Light brown */
```

## Your Current Projects
Based on your Word documents, you have these projects:

### Architecture & Interior (6 projects)
1. Mr. Ujjwal's Residence
2. Sirigere Mane  
3. Mr. Prajwal's Residence
4. Mr. Shivakumar's Residence
5. Mr. Kumar's Residence
6. Co-Working Space

### Landscape (5 projects)
1. Terrace Garden
2. MVJ College Office
3. High Rise Apartment
4. Girish's Backyard
5. Anil's Farmhouse

## Quick Testing
After making changes:
1. Save the file
2. Check the website automatically updates
3. Test on mobile by making browser window smaller
4. Check all links work properly

## Getting Help
1. Check this guide first
2. Look for comments in the code (// TO ADD... or // CHANGE...)
3. Follow the same pattern as existing projects
4. Test with one project before adding many

## File Locations Summary
- **Projects**: `client/src/data/projects.ts`
- **About/Photo**: `client/src/pages/About.tsx`
- **Home**: `client/src/pages/Home.tsx`
- **Contact**: `client/src/pages/Contact.tsx`
- **Pricing**: `client/src/pages/Pricing.tsx`
- **Colors**: `client/src/index.css`