import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ChatHistoryPage from './pages/ChatHistoryPage';
import SubscriptionPage from './pages/SubscriptionPage';
import HelpPage from './pages/HelpPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="history" element={<ChatHistoryPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;