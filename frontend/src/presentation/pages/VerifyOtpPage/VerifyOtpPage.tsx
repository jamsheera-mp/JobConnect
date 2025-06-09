

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '@presentation/components/layout/Header';
import { Footer } from '@presentation/components/layout/Footer';
import axios from 'axios';

const VerifyOtpPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const emailFromState = location.state?.email;
    if (!emailFromState) {
      navigate('/register');
    } else {
      setEmail(emailFromState);
      handleResendOtp(emailFromState);
    }
  }, [location, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await axios.post('http://localhost:3000/api/auth/verify-otp', {
        email,
        otp,
      });
      setSuccess(response.data.message);
      setError('');
      if (response.data.userId) {
        localStorage.setItem('userId', response.data.userId);
      }
      setTimeout(() => navigate('/'), 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to verify OTP');
      setSuccess('');
    }
  };

  const handleResendOtp = async (emailToResend: string) => {
    setIsResending(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/api/auth/send-otp', {
        email: emailToResend,
      });
      setSuccess(response.data.message);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRegisterClick={() => navigate('/register')} />

      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Verify Your Email
            </h2>
            {email && (
              <p className="text-center text-sm text-gray-600 mb-6">
                An OTP has been sent to {email}
              </p>
            )}
            {error && (
              <p className="text-center text-sm text-red-600 mb-4">{error}</p>
            )}
            {success && (
              <p className="text-center text-sm text-green-600 mb-4">{success}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full px-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Verify OTP
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => email && handleResendOtp(email)}
                disabled={isResending}
                className={`text-blue-600 hover:text-blue-700 text-sm font-medium ${
                  isResending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isResending ? 'Resending...' : 'Resend OTP'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VerifyOtpPage;