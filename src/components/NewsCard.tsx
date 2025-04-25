import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface NewsCardProps {
  title: string;
  image: string;
  description: string;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, image, description, className }) => {
  return (
    <motion.div 
      className={cn("valorant-card group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 mb-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        {/* Diagonal corner element */}
        <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-accent transform rotate-45" />
      </div>
      
      <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
      <p className="text-foreground/80 mb-4 text-sm">{description}</p>
      
      <div className="flex justify-between items-center">
        <motion.button 
          className="uppercase text-sm font-bold text-accent hover:text-accent-hover transition-colors flex items-center"
          whileHover={{ x: 5 }}
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
        
        <span className="text-xs text-foreground/60">5 MIN READ</span>
      </div>
    </motion.div>
  );
};

export default NewsCard;