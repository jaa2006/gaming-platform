import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github as GitHub, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <MessageCircle className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold uppercase tracking-wider">
                AI<span className="text-accent">DUEL</span>
              </span>
            </Link>
            <p className="text-foreground/80">
              Experience the next generation of AI chat with a futuristic gaming interface.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/chat" className="text-foreground/80 hover:text-accent transition-colors">Chat</Link></li>
              <li><Link to="/history" className="text-foreground/80 hover:text-accent transition-colors">History</Link></li>
              <li><Link to="/subscription" className="text-foreground/80 hover:text-accent transition-colors">Subscription</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-foreground/80 hover:text-accent transition-colors">Help & FAQ</Link></li>
              <li><Link to="/terms" className="text-foreground/80 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Subscribe</h3>
            <p className="text-foreground/80 mb-4">Get the latest updates and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="valorant-input w-full"
              />
              <button 
                type="submit"
                className="valorant-button ml-2"
              >
                GO
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>© 2025 AIDUEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;