import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FuturisticButton from '../components/FuturisticButton';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI CHAT WITH GAMING SPIRIT";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setIndex(0);
        setDisplayText('');
      }, 2000);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ 
              backgroundImage: 'url(https://i.imghippo.com/files/MiFY8355xQo.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Left: Character Illustration */}
          <div className="col-span-1 flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="cyber-container"
            >
              <div className="cyber-canvas">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`tr-${i + 1}`} />
                ))}
                <div className="cyber-card">
                  <div className="cyber-card-content">
                    <div className="cyber-card-glare" />
                    <div className="cyber-lines">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} />
                      ))}
                    </div>
                    <div className="w-full h-full">
                      <img 
                        src="https://i.imghippo.com/files/MiFY8355xQo.jpg" 
                        alt="Futuristic Character"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="cyber-corner">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} />
                      ))}
                    </div>
                    <div className="cyber-scan-line" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Middle: Main Content */}
          <motion.div 
            className="col-span-1 flex flex-col justify-center space-y-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {displayText}
              <span className="inline-block w-2 h-8 bg-accent animate-pulse ml-1"></span>
            </h1>
            
            <p className="text-foreground/80 max-w-md">
              Experience AI conversation with the aesthetic and energy of your favorite competitive games. 
              Fast responses, tactical information, and a user interface designed for gamers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/chat">
                <FuturisticButton>
                  START CHATTING
                </FuturisticButton>
              </Link>
              
              <Link to="/subscription">
                <FuturisticButton variant="outline">
                  VIEW PLANS
                </FuturisticButton>
              </Link>
            </div>
          </motion.div>
          
          {/* Right: Card */}
          <motion.div 
            className="col-span-1 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <img
                src="https://i.imghippo.com/files/KPn5614XVM.jpg"
                alt="Card Image"
                className="img w-full h-full object-cover absolute inset-0"
              />
              <div className="textBox">
                <p className="head">Ethereum</p>
                <p className="discription">Cryptocurrency</p>
                <p className="price">1.654,34€</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">ADVANCED</span> FEATURES
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover how our AI chat platform combines cutting-edge technology with gaming-inspired design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="valorant-card">
              <div className="h-12 w-12 bg-accent bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">LIGHTNING FAST</h3>
              <p className="text-foreground/70">
                Get responses in milliseconds with our optimized AI architecture.
              </p>
            </div>
            
            <div className="valorant-card">
              <div className="h-12 w-12 bg-accent bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SECURE CHATS</h3>
              <p className="text-foreground/70">
                End-to-end encryption keeps your conversations private and secure.
              </p>
            </div>
            
            <div className="valorant-card">
              <div className="h-12 w-12 bg-accent bg-opacity-20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SMART LEARNING</h3>
              <p className="text-foreground/70">
                Our AI adapts to your style and preferences over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute bottom-0 right-0 w-full h-full bg-accent bg-opacity-5 transform skew-y-6" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              READY TO <span className="text-accent">LEVEL UP</span> YOUR CONVERSATIONS?
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Join thousands of users experiencing AI chat with a gaming twist.
            </p>
            <Link to="/register">
              <FuturisticButton className="text-lg px-8 py-4">
                CREATE YOUR ACCOUNT
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;