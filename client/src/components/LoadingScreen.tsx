import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("Designing your experience");
  
  const loadingSteps = [
    "Designing your experience",
    "Crafting architectural details",
    "Sketching blueprints",
    "Laying foundations",
    "Building connections",
    "Finalizing the structure"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingSteps.length;
      setLoadingText(loadingSteps[currentIndex]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      {/* Architectural Loading Animation */}
      <div className="relative mb-8">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="200" height="200" className="text-aakaara-brown">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
        </div>

        {/* Building Animation */}
        <div className="relative">
          {/* Foundation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
            className="w-32 h-2 bg-aakaara-brown mb-1 origin-left"
          />
          
          {/* Building Blocks */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (i * 0.3),
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="w-32 h-8 bg-aakaara-brown/70 border border-aakaara-brown mb-1 origin-bottom"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          
          {/* Roof */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 3.5
            }}
            className="w-36 h-4 bg-aakaara-dark-brown -ml-2"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-5, 5, -5],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -right-4 w-8 h-8 border-2 border-aakaara-brown rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [5, -5, 5],
            x: [-2, 2, -2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-2 -left-4 w-6 h-6 bg-aakaara-brown/30 rounded-sm rotate-45"
        />
      </div>

      {/* Loading Text */}
      <motion.div
        key={loadingText}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-center"
      >
        <h2 className="text-aakaara-text text-xl font-medium mb-2">
          {loadingText}
        </h2>
        
        {/* Progress Dots */}
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-aakaara-brown rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* aakaara branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 text-aakaara-brown font-rigot text-2xl font-bold"
      >
        aakaara
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;