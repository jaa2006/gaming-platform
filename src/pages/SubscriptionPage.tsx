import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    period: '/month',
    features: [
      { name: 'Basic AI Chat', included: true },
      { name: '50 messages per day', included: true },
      { name: 'Standard response time', included: true },
      { name: 'Access to community templates', included: true },
      { name: 'Priority support', included: false },
      { name: 'Advanced AI capabilities', included: false },
      { name: 'Custom chat UI themes', included: false },
      { name: 'Chat history export', included: false },
    ],
    popular: false,
  },
  {
    title: 'Pro',
    price: '$9.99',
    period: '/month',
    features: [
      { name: 'Everything in Free', included: true },
      { name: 'Unlimited messages', included: true },
      { name: 'Faster response time', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced AI capabilities', included: true },
      { name: 'Custom chat UI themes', included: true },
      { name: 'Chat history export', included: true },
      { name: 'API access', included: false },
    ],
    popular: true,
  },
  {
    title: 'Ultimate',
    price: '$19.99',
    period: '/month',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Fastest priority responses', included: true },
      { name: 'Dedicated support team', included: true },
      { name: 'API access', included: true },
      { name: 'Custom AI training', included: true },
      { name: 'Team collaboration features', included: true },
      { name: 'White-label option', included: true },
      { name: 'Early access to new features', included: true },
    ],
    popular: false,
  },
];

const SubscriptionPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-accent">UPGRADE</span> YOUR EXPERIENCE
          </h1>
          <p className="text-foreground/70 text-lg">
            Choose the plan that fits your needs and take your AI chat experience to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                popular={plan.popular}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-card p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          
          <div className="space-y-6">
            <div className="valorant-card">
              <h3 className="text-xl font-semibold mb-2">Can I switch plans at any time?</h3>
              <p className="text-foreground/70">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="valorant-card">
              <h3 className="text-xl font-semibold mb-2">How do team accounts work?</h3>
              <p className="text-foreground/70">
                Team accounts are available with the Ultimate plan. Each team member gets their own login with shared access to team resources and chat history.
              </p>
            </div>
            
            <div className="valorant-card">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-foreground/70">
                We accept all major credit cards, PayPal, and select cryptocurrencies for subscription payments.
              </p>
            </div>
            
            <div className="valorant-card">
              <h3 className="text-xl font-semibold mb-2">Is there a refund policy?</h3>
              <p className="text-foreground/70">
                We offer a 7-day money-back guarantee for all paid subscriptions if you're not satisfied with the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionPage;