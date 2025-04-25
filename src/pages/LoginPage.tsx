import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, UserCircle, Lock, Github, Mail } from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', { email, password });
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
              <span className="text-accent">LOGIN</span> TO CONTINUE
            </h1>
            <p className="text-foreground/70">
              Access your AI chat assistant with gaming aesthetics
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Mail size={16} className="text-accent mr-2" />
                <label htmlFor="email" className="font-medium">
                  EMAIL
                </label>
              </div>
              <div className="relative">
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
              <div className="flex justify-end mt-1">
                <Link
                  to="/forgot-password"
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <FuturisticButton
              type="submit"
              className="w-full py-3"
            >
              LOGIN NOW
            </FuturisticButton>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-foreground/60">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 valorant-input hover:bg-card-hover transition-colors py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 valorant-input hover:bg-card-hover transition-colors py-3"
              >
                <Github size={24} />
                <span>GitHub</span>
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-accent hover:text-accent-hover transition-colors font-semibold"
              >
                REGISTER
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;