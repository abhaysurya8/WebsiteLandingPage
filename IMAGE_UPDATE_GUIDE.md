# IMAGE UPDATE GUIDE
# ===================

## How to Change Project Images

All project images are stored in `/client/src/data/projects.ts`

### Current Projects with Image URLs:

**Architecture Projects:**
1. **Mr. Ujjwal's Residence** (Line 36)
   - Current: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9
   - TO CHANGE: Replace this URL with your image

2. **Sirigere Mane** (Line 42) 
   - Current: https://images.unsplash.com/photo-1600607687939-ce8a6c25118c
   - TO CHANGE: Replace this URL with your image

3. **Mr. Prajwal's Residence** (Line 48)
   - Current: https://images.unsplash.com/photo-1545324418-cc1a3fa10c00
   - TO CHANGE: Replace this URL with your image

4. **Mr. Shivakumar's Residence** (Line 54)
   - Current: https://images.unsplash.com/photo-1600585154340-be6161a56a0c
   - TO CHANGE: Replace this URL with your image

5. **Mr. Kumar's Residence** (Line 60)
   - Current: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0
   - TO CHANGE: Replace this URL with your image

6. **Co-Working Space** (Line 66)
   - Current: https://images.unsplash.com/photo-1497366216548-37526070297c
   - TO CHANGE: Replace this URL with your image

**Landscape Projects:**
7. **Terrace Garden** (Line 72)
   - Current: https://images.unsplash.com/photo-1416879595882-3373a0480b5b
   - TO CHANGE: Replace this URL with your image

8. **MVJ College Office** (Line 78)
   - Current: https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e
   - TO CHANGE: Replace this URL with your image

9. **High Rise Apartment** (Line 84)
   - Current: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab
   - TO CHANGE: Replace this URL with your image

10. **Girish's Backyard** (Line 90)
    - Current: https://images.unsplash.com/photo-1574691250077-03a929faece5
    - TO CHANGE: Replace this URL with your image

11. **Anil's Farmhouse** (Line 96)
    - Current: https://images.unsplash.com/photo-1585128792020-803d29415281
    - TO CHANGE: Replace this URL with your image

## Steps to Update Images:

1. **Upload your images** to:
   - Imgur: https://imgur.com (Free)
   - Cloudinary: https://cloudinary.com (Free)
   - Google Drive (make public)
   - Your own hosting

2. **Get the direct image URL**:
   - Right-click your uploaded image
   - Copy image address/URL

3. **Update the projects.ts file**:
   - Open `/client/src/data/projects.ts`
   - Find the project you want to update
   - Replace the `image:` URL with your new URL

4. **Image Size Recommendations**:
   - Grid images: 800x600px (4:3 ratio)
   - Detail images: 1200x800px (3:2 ratio)
   - File size: Under 500KB for fast loading

## Example Update:

```javascript
// BEFORE:
{
  id: 1,
  slug: "ujjwal-residence",
  title: "Mr. Ujjwal's Residence",
  category: "Architecture",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9...",
  description: "..."
}

// AFTER (with your image):
{
  id: 1,
  slug: "ujjwal-residence", 
  title: "Mr. Ujjwal's Residence",
  category: "Architecture",
  image: "https://your-image-hosting.com/your-project-image.jpg",
  description: "..."
}
```

## Quick Reference File Locations:
- **Main project data**: `/client/src/data/projects.ts`
- **Image update guide**: This file
- **Project management**: `/PROJECT_MANAGEMENT_GUIDE.md`
- **Easy editing**: `/EASY_EDIT_GUIDE.md`

The website will automatically update when you save the file!