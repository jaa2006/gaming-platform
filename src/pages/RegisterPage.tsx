import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, UserCircle, Mail, Lock } from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register with:', { name, email, password });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md">
        <div className="valorant-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-accent">CREATE</span> YOUR ACCOUNT
            </h1>
            <p className="text-foreground/70">
              Join the future of AI chat with gaming aesthetics
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <UserCircle size={16} className="text-accent mr-2" />
                <label htmlFor="name" className="font-medium">
                  NAME
                </label>
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="valorant-input w-full"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Mail size={16} className="text-accent mr-2" />
                <label htmlFor="email" className="font-medium">
                  EMAIL
                </label>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="valorant-input w-full"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Lock size={16} className="text-accent mr-2" />
                <label htmlFor="password" className="font-medium">
                  PASSWORD
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="valorant-input w-full pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground/60 hover:text-accent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Lock size={16} className="text-accent mr-2" />
                <label htmlFor="confirmPassword" className="font-medium">
                  CONFIRM PASSWORD
                </label>
              </div>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="valorant-input w-full pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-foreground/60 hover:text-accent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="rounded border-border bg-input h-4 w-4 focus:ring-accent"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-foreground/80">
                I agree to the{' '}
                <Link to="/terms" className="text-accent hover:text-accent-hover">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-accent hover:text-accent-hover">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <FuturisticButton
              type="submit"
              className="w-full py-3"
            >
              CREATE ACCOUNT
            </FuturisticButton>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-accent hover:text-accent-hover transition-colors font-semibold"
              >
                LOGIN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;