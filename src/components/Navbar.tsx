import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MessageCircle, History, CreditCard, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'CHAT', path: '/chat' },
  { name: 'HISTORY', path: '/history' },
  { name: 'SUBSCRIPTION', path: '/subscription' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-4"
        >
          <span className="text-2xl font-bold uppercase tracking-wider">
            FIX<span className="text-accent">CODE</span>
          </span>
          <div className="flex items-center space-x-3">
            <img src="https://i.imghippo.com/files/WPHA2522oUM.png" alt="Logo 1" className="h-8 w-auto" />
            <img src="https://i.imghippo.com/files/mOF4312Sc.png" alt="Logo 2" className="h-8 w-auto" />
          </div>
          <span className="text-sm text-foreground/70">Gamespot Experience AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 relative uppercase font-medium hover:text-accent transition-colors',
                location.pathname === link.path ? 'text-accent' : 'text-foreground'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent w-full"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
          <Link
            to="/login"
            className="valorant-button ml-4"
          >
            LOGIN
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-card shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-4 py-2 font-medium uppercase',
                    location.pathname === link.path 
                      ? 'text-accent border-l-2 border-accent pl-3' 
                      : 'text-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="valorant-button w-full flex justify-center"
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;