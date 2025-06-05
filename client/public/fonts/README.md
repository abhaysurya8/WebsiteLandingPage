# Font Integration Instructions

## Rigot Bold Font Setup

To use the custom Rigot Bold font for the "aakaara" brand name, please follow these steps:

### 1. Create the fonts directory
This directory (`client/public/fonts/`) should contain your Rigot Bold font files.

### 2. Upload your Rigot Bold font files
Place the following font files in this directory:

- `rigot-bold.woff2` (recommended - best compression and browser support)
- `rigot-bold.woff` (fallback for older browsers)
- `rigot-bold.ttf` (final fallback)

### 3. File naming convention
Ensure your font files are named exactly as specified above, or update the font-face declarations in `client/src/styles/fonts.css` to match your file names.

### 4. Supported formats
The font integration supports:
- WOFF2 (Web Open Font Format 2.0) - preferred
- WOFF (Web Open Font Format) - good fallback
- TTF (TrueType Font) - final fallback

### 5. Font fallbacks
If the Rigot Bold font fails to load, the system will fall back to:
1. Quicksand (Google Font)
2. System fonts (-apple-system, BlinkMacSystemFont)
3. Generic sans-serif

### 6. Usage in components
The font is applied using the Tailwind CSS class `font-rigot` which is defined in the fonts.css file.

### 7. Performance optimization
- The fonts use `font-display: swap` for optimal loading performance
- Google Fonts (Quicksand) are preloaded in the HTML head
- Font files should be compressed and optimized before uploading

## Current Implementation
The application currently uses:
- **Rigot Bold**: For the "aakaara" brand name only
- **Quicksand**: For all other text content (loaded from Google Fonts)

## File Structure
