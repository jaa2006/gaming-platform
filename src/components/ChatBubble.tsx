import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser, timestamp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "chat-bubble",
        isUser ? "chat-bubble-user" : ""
      )}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="font-bold text-sm">
          {isUser ? "YOU" : "AI ASSISTANT"}
        </span>
        <span className="text-xs text-foreground/60">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      <p className="text-foreground/90">
        {message}
      </p>
    </motion.div>
  );
};

export const TypingIndicator: React.FC = () => {
  return (
    <div className="chat-bubble max-w-[80px] flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-accent/80 animate-pulse"></span>
      <span className="w-2 h-2 rounded-full bg-accent/80 animate-pulse delay-75"></span>
      <span className="w-2 h-2 rounded-full bg-accent/80 animate-pulse delay-150"></span>
    </div>
  );
};

export default ChatBubble;