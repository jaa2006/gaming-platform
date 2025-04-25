import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBubble, { TypingIndicator } from '../components/ChatBubble';
import FuturisticButton from '../components/FuturisticButton';
import { createChatCompletion } from '../lib/openai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to AIDUEL! How can I assist you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Get AI response
      const response = await createChatCompletion(input);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response || "I apologize, but I couldn't generate a response at this time.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 h-[calc(100vh-5rem)]">
        <div className="flex h-full">
          {/* Chat History Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '300px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card border-r border-border h-full hidden md:block"
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4 uppercase">Chat History</h2>
                  <div className="space-y-2">
                    {['Previous Chat 1', 'AI Help Session', 'Game Strategy Discussion'].map((chat, index) => (
                      <div 
                        key={index}
                        className="p-3 bg-card-hover cursor-pointer hover:bg-accent/10 transition-colors"
                      >
                        <h3 className="font-medium">{chat}</h3>
                        <p className="text-sm text-foreground/60">Last message: 2 days ago</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col h-full relative">
            {/* Toggle sidebar button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute top-4 left-4 z-10 bg-card p-2 rounded-full hover:bg-card-hover transition-colors"
            >
              {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="max-w-3xl mx-auto">
                {messages.map((message) => (
                  <ChatBubble
                    key={message.id}
                    message={message.text}
                    isUser={message.isUser}
                    timestamp={message.timestamp}
                  />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center">
                  <button className="p-2 text-foreground/60 hover:text-accent transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <div className="flex-1 mx-2">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="valorant-input w-full min-h-[50px] resize-none"
                      rows={1}
                    />
                  </div>
                  <button className="p-2 text-foreground/60 hover:text-accent transition-colors">
                    <Mic size={20} />
                  </button>
                  <FuturisticButton
                    onClick={handleSendMessage}
                    className="ml-2"
                  >
                    <Send size={16} className="mr-1" />
                    SEND
                  </FuturisticButton>
                </div>
                <div className="mt-2 text-xs text-foreground/60 text-center">
                  Press Enter to send, Shift+Enter for new line
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;