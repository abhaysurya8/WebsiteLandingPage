// Performance optimization utilities
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    { href: '/fonts/rigot-bold.woff2', type: 'font/woff2' },
    { href: '/fonts/playfair-display.woff2', type: 'font/woff2' }
  ];
  
  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = font.type;
    link.href = font.href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const optimizeImages = () => {
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 2) { // First 3 images load immediately
      img.loading = 'lazy';
    }
  });
};