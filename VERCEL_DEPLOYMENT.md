# Vercel Deployment Guide

## Prerequisites

1. Make sure you have a Vercel account
2. Install Vercel CLI: `npm i -g vercel`

## Environment Variables

Set these environment variables in your Vercel dashboard:

```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
DATABASE_URL=your-database-url (if using database)
```

## Deployment Steps

1. **Build the project locally first:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

3. **Or connect your GitHub repository to Vercel for automatic deployments**

## File Structure for Vercel

The project is configured with the following structure:
- `client/` - React frontend
- `server/` - Express backend
- `dist/public/` - Built static files
- `vercel.json` - Vercel configuration

## Case Sensitivity Fixes Applied

1. ✅ All import paths use consistent casing
2. ✅ Image paths use correct case (`/Images/` with capital I)
3. ✅ Font file paths are correct
4. ✅ Build configuration optimized for Vercel
5. ✅ TypeScript configurations added
6. ✅ Vite configuration cleaned up

## Troubleshooting

If you encounter issues:

1. **Build fails**: Check that all dependencies are installed
2. **Images not loading**: Verify image paths in `client/src/data/projects.ts`
3. **Email not working**: Ensure environment variables are set correctly
4. **Routing issues**: Check that `vercel.json` routes are configured properly

## Notes

- The project uses a monorepo structure with client and server
- Static files are served from `dist/public/`
- API routes are handled by the Express server
- All file paths are case-sensitive for Vercel deployment 