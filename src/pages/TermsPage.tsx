import React from 'react';
import { motion } from 'framer-motion';
import FuturisticButton from '../components/FuturisticButton';

const TermsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">
            TERMS OF <span className="text-accent">SERVICE</span>
          </h1>
          <p className="text-center text-foreground/60 mb-8">Last updated: July 15, 2025</p>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              INTRODUCTION
            </h2>
            <p className="text-foreground/80 mb-4">
              Welcome to AIDUEL ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by AIDUEL.
            </p>
            <p className="text-foreground/80 mb-4">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here.
            </p>
            <p className="text-foreground/80">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </div>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              COMMUNICATIONS
            </h2>
            <p className="text-foreground/80 mb-4">
              By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
            </p>
          </div>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              PURCHASES
            </h2>
            <p className="text-foreground/80 mb-4">
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p className="text-foreground/80 mb-4">
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p className="text-foreground/80">
              The service may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
            </p>
          </div>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              REFUNDS
            </h2>
            <p className="text-foreground/80 mb-4">
              We issue refunds for Contracts within 7 days of the original purchase of the Contract.
            </p>
          </div>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              CONTENT
            </h2>
            <p className="text-foreground/80 mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-foreground/80 mb-4">
              By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
            </p>
          </div>
          
          <div className="valorant-card mb-8">
            <h2 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">
              PROHIBITED USES
            </h2>
            <p className="text-foreground/80 mb-4">
              You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
            </ul>
          </div>
          
          <div className="flex justify-center mb-8">
            <a href="#" download="terms-of-service.pdf">
              <FuturisticButton>
                DOWNLOAD PDF VERSION
              </FuturisticButton>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPage;