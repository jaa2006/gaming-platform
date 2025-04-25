import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FuturisticButton from '../components/FuturisticButton';

interface FaqItem {
  question: string;
  answer: string;
}

const HelpPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'How do I start a new chat?',
      answer: 'To start a new chat, simply navigate to the Chat section by clicking on "CHAT" in the main navigation. Once there, you can type your message in the input field at the bottom of the page and press Enter or click the Send button.',
    },
    {
      question: 'Is my chat history stored securely?',
      answer: 'Yes, all your conversations are encrypted and stored securely on our servers. We take privacy very seriously and do not share your data with third parties. You can also delete your chat history at any time from the Chat History page.',
    },
    {
      question: 'What are the limitations of the free plan?',
      answer: 'The free plan includes up to 50 messages per day with standard response times. You\'ll have access to basic AI chat capabilities and community templates. For unlimited messages, faster responses, and advanced features, consider upgrading to a paid plan.',
    },
    {
      question: 'How do I change my account settings?',
      answer: 'You can change your account settings by clicking on your profile icon in the top right corner and selecting "Profile" from the dropdown menu. From there, you can update your personal information, change your password, and customize your preferences.',
    },
    {
      question: 'Can I use the AI assistant for gaming strategies?',
      answer: 'Absolutely! Our AI assistant is designed with gamers in mind and can provide insights on game strategies, team compositions, meta discussions, and more. The more specific your questions, the better responses you\'ll receive.',
    },
    {
      question: 'How do I export my chat history?',
      answer: 'Pro and Ultimate subscribers can export their chat history by going to the Chat History page, selecting the conversations they want to export, and clicking the Export button. The data will be provided in a downloadable format that you can save for your records.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            HELP & <span className="text-accent">FAQ</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="valorant-card text-center">
              <div className="h-12 w-12 bg-accent/20 flex items-center justify-center mx-auto mb-4 rounded-sm">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Getting Started</h3>
              <p className="text-foreground/70 mb-4">New to AIDUEL? Learn the basics with our quick guides.</p>
              <Link to="/help/getting-started" className="text-accent hover:text-accent-hover font-medium">
                View Guides
              </Link>
            </div>
            
            <div className="valorant-card text-center">
              <div className="h-12 w-12 bg-accent/20 flex items-center justify-center mx-auto mb-4 rounded-sm">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tutorials</h3>
              <p className="text-foreground/70 mb-4">Learn how to make the most of all our features.</p>
              <Link to="/help/tutorials" className="text-accent hover:text-accent-hover font-medium">
                Watch Videos
              </Link>
            </div>
            
            <div className="valorant-card text-center">
              <div className="h-12 w-12 bg-accent/20 flex items-center justify-center mx-auto mb-4 rounded-sm">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-foreground/70 mb-4">Need help? Our support team is here for you.</p>
              <Link to="/contact" className="text-accent hover:text-accent-hover font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-4 mb-12">
            {faqItems.map((item, index) => (
              <div key={index} className="valorant-card overflow-hidden">
                <button
                  className="w-full text-left font-bold text-lg p-4 flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {item.question}
                  {openIndex === index ? (
                    <ChevronUp className="text-accent" size={20} />
                  ) : (
                    <ChevronDown className="text-accent" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 pt-0 text-foreground/80 border-t border-border"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          <div className="valorant-card text-center">
            <h2 className="text-xl font-bold mb-4">Didn't Find What You're Looking For?</h2>
            <p className="text-foreground/70 mb-6">
              Our support team is ready to help you with any questions or issues you may have.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <FuturisticButton>
                  CONTACT SUPPORT
                </FuturisticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpPage;