import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
  variant = 'default',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10';
      case 'ghost':
        return 'bg-transparent text-accent hover:bg-accent/10';
      default:
        return 'bg-accent text-white hover:bg-accent-hover';
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'valorant-button relative',
        getVariantClasses(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {/* Animated corner highlights */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent/80" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent/80" />
      
      {children}
    </motion.button>
  );
};

export default FuturisticButton;