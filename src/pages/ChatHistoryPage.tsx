import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Filter, MessageSquare, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils';

interface ChatHistoryItem {
  id: string;
  title: string;
  preview: string;
  date: Date;
  messageCount: number;
}

const ChatHistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data
  const mockChatHistory: ChatHistoryItem[] = [
    {
      id: '1',
      title: 'Game Strategy Discussion',
      preview: 'We were discussing optimal strategies for team composition in competitive play...',
      date: new Date(2025, 3, 15),
      messageCount: 24,
    },
    {
      id: '2',
      title: 'Technical Support',
      preview: 'Troubleshooting performance issues with the latest game update...',
      date: new Date(2025, 3, 12),
      messageCount: 18,
    },
    {
      id: '3',
      title: 'AI Capabilities Question',
      preview: 'I was asking about what types of tasks the AI assistant can help with...',
      date: new Date(2025, 3, 10),
      messageCount: 12,
    },
    {
      id: '4',
      title: 'General Conversation',
      preview: 'Just chatting about various topics and testing the AI responses...',
      date: new Date(2025, 3, 8),
      messageCount: 32,
    },
  ];

  // Filter and search
  const filteredChats = mockChatHistory.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         chat.preview.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'recent') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return matchesSearch && chat.date > oneWeekAgo;
    }
    if (selectedFilter === 'long') {
      return matchesSearch && chat.messageCount > 20;
    }
    
    return matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold">
              CHAT <span className="text-accent">HISTORY</span>
            </h1>
            
            <div className="flex items-center relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="valorant-input pr-10 w-full md:w-64"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60" size={18} />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-sm ${
                selectedFilter === 'all' 
                  ? 'bg-accent text-white' 
                  : 'bg-card hover:bg-card-hover'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('recent')}
              className={`px-4 py-2 rounded-sm flex items-center ${
                selectedFilter === 'recent' 
                  ? 'bg-accent text-white' 
                  : 'bg-card hover:bg-card-hover'
              }`}
            >
              <Calendar size={16} className="mr-2" />
              Recent
            </button>
            <button
              onClick={() => setSelectedFilter('long')}
              className={`px-4 py-2 rounded-sm flex items-center ${
                selectedFilter === 'long' 
                  ? 'bg-accent text-white' 
                  : 'bg-card hover:bg-card-hover'
              }`}
            >
              <MessageSquare size={16} className="mr-2" />
              Long Conversations
            </button>
          </div>
          
          <div className="space-y-4">
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="valorant-card hover:border-accent hover:border transition-colors group"
                >
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {chat.title}
                    </h3>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:text-accent transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 mb-3">{chat.preview}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/60">
                      {formatDate(chat.date)} • {chat.messageCount} messages
                    </span>
                    
                    <Link to={`/chat?id=${chat.id}`} className="text-accent hover:text-accent-hover font-medium flex items-center">
                      Continue
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="valorant-card text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">No conversations found</h3>
                <p className="text-foreground/70 mb-6">
                  We couldn't find any chat history matching your search criteria.
                </p>
                <Link to="/chat" className="valorant-button">
                  START NEW CHAT
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatHistoryPage;