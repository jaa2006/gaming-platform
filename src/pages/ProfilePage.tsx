import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Moon, Sun, Globe, Volume2 } from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64 shrink-0">
              <div className="valorant-card">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-accent/30 mx-auto flex items-center justify-center">
                    <User size={40} className="text-accent" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold">User Name</h2>
                  <p className="text-foreground/60">Free Account</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab('personal')}
                    className={`w-full text-left px-4 py-3 flex items-center ${
                      activeTab === 'personal'
                        ? 'bg-accent text-white'
                        : 'hover:bg-card-hover'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    Personal Info
                  </button>
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`w-full text-left px-4 py-3 flex items-center ${
                      activeTab === 'preferences'
                        ? 'bg-accent text-white'
                        : 'hover:bg-card-hover'
                    }`}
                  >
                    <Settings size={18} className="mr-3" />
                    Preferences
                  </button>
                  <button
                    onClick={() => setActiveTab('subscription')}
                    className={`w-full text-left px-4 py-3 flex items-center ${
                      activeTab === 'subscription'
                        ? 'bg-accent text-white'
                        : 'hover:bg-card-hover'
                    }`}
                  >
                    <CreditCard size={18} className="mr-3" />
                    Subscription
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'personal' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="valorant-card"
                >
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
                    PERSONAL INFORMATION
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <label className="font-medium flex items-center">
                        <User size={16} className="text-accent mr-2" />
                        NAME
                      </label>
                      <input
                        type="text"
                        className="valorant-input w-full mt-1"
                        defaultValue="User Name"
                      />
                    </div>

                    <div>
                      <label className="font-medium flex items-center">
                        <Mail size={16} className="text-accent mr-2" />
                        EMAIL
                      </label>
                      <input
                        type="email"
                        className="valorant-input w-full mt-1"
                        defaultValue="user@example.com"
                      />
                    </div>

                    <div>
                      <label className="font-medium flex items-center">
                        <Lock size={16} className="text-accent mr-2" />
                        CHANGE PASSWORD
                      </label>
                      <input
                        type="password"
                        className="valorant-input w-full mt-1 mb-2"
                        placeholder="Current password"
                      />
                      <input
                        type="password"
                        className="valorant-input w-full mb-2"
                        placeholder="New password"
                      />
                      <input
                        type="password"
                        className="valorant-input w-full"
                        placeholder="Confirm new password"
                      />
                    </div>

                    <div className="flex justify-end">
                      <FuturisticButton type="submit">
                        SAVE CHANGES
                      </FuturisticButton>
                    </div>
                  </form>
                </motion.div>
              )}

              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="valorant-card"
                >
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
                    PREFERENCES
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="font-medium flex items-center mb-2">
                        <Moon size={16} className="text-accent mr-2" />
                        APPEARANCE
                      </label>
                      <div className="flex space-x-4">
                        <button className="valorant-input flex-1 py-3 flex items-center justify-center bg-accent text-white">
                          <Moon size={18} className="mr-2" />
                          Dark
                        </button>
                        <button className="valorant-input flex-1 py-3 flex items-center justify-center">
                          <Sun size={18} className="mr-2" />
                          Light
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="font-medium flex items-center mb-2">
                        <Globe size={16} className="text-accent mr-2" />
                        LANGUAGE
                      </label>
                      <select className="valorant-input w-full">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Deutsch</option>
                        <option>日本語</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-medium flex items-center mb-2">
                        <Volume2 size={16} className="text-accent mr-2" />
                        AI VOICE
                      </label>
                      <select className="valorant-input w-full">
                        <option>Default</option>
                        <option>Female 1</option>
                        <option>Female 2</option>
                        <option>Male 1</option>
                        <option>Male 2</option>
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <FuturisticButton type="submit">
                        SAVE PREFERENCES
                      </FuturisticButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'subscription' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="valorant-card"
                >
                  <h2 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
                    SUBSCRIPTION DETAILS
                  </h2>

                  <div className="mb-8 p-4 border border-accent/30 bg-accent/5">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold">Free Plan</h3>
                        <p className="text-foreground/60">Basic features</p>
                      </div>
                      <span className="text-accent font-bold">ACTIVE</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Usage Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-card-hover">
                        <p className="text-foreground/60 text-sm">Messages Used</p>
                        <p className="text-2xl font-bold">35 / 50</p>
                        <div className="w-full bg-border h-2 mt-2">
                          <div className="bg-accent h-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div className="p-4 bg-card-hover">
                        <p className="text-foreground/60 text-sm">Reset In</p>
                        <p className="text-2xl font-bold">12h 34m</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <p className="text-foreground/70 mb-4">
                      Upgrade to a paid plan for unlimited messages and premium features.
                    </p>
                    <FuturisticButton>
                      UPGRADE SUBSCRIPTION
                    </FuturisticButton>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Add missing component imports
import { Settings, CreditCard } from 'lucide-react';

export default ProfilePage;