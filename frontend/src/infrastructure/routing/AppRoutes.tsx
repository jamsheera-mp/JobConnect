// src/infrastructure/routing/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@presentation/pages/HomePage/HomePage';
import RegisterPage from '@presentation/pages/RegisterPage/RegisterPage';
import VerifyOtpPage from '@presentation/pages/VerifyOtpPage/VerifyOtpPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
    </Routes>
  );
};

export default AppRoutes; 
