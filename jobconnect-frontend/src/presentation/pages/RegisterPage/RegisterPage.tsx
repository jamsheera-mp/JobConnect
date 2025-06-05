import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../infrastructure/hooks'
import { RegisterFormData } from '../../../core'
import { RegisterDTO } from '../../../application/dtos/registerDTO'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { register, loading, error } = useAuth()

  const queryParams = new URLSearchParams(location.search)
  const initialRole = (queryParams.get('role') as 'jobSeeker' | 'recruiter') || 'jobSeeker'

  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    role: initialRole,
    name: '',
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)

  useEffect(() => {
    if (error) {
      setLocalError(error)
    }
  }, [error])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRoleChange = (role: 'jobSeeker' | 'recruiter') => {
    setFormData({ ...formData, role })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)

    if (!agreedToTerms) {
      setLocalError('Please agree to the Terms of Service and Privacy Policy')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match')
      return
    }

    const dto: RegisterDTO = {
      email: formData.email,
      password: formData.password,
      role: formData.role,
      name: formData.name,
    }

    try {
      await register(dto)
      navigate('/verify-otp')
    } catch (err) {
        console.log(err);
        
      // Error is handled by useAuth hook
    }
  }

  return (
    <div className="min-h-screen flex font-sans bg-gray-50">
      <div className="w-2/5 bg-indigo-600 flex items-center justify-center p-8 text-white">
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold mb-6">Create Account</h1>
          <p className="text-base mb-8 text-indigo-100">
            Join our community and take the next step in your journey.
          </p>
          <div className="space-y-4 text-indigo-100">
            <div className="flex items-start space-x-3">
              <div className="w-4 h-4 bg-indigo-400 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm">Access to thousands of job opportunities</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-4 h-4 bg-indigo-400 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm">Connect with top employers. Track applications in one place</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-4 h-4 bg-indigo-400 rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-sm">Get personalized job recommendation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 bg-white flex items-center justify-start pl-16 pr-12 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Register</h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          {localError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{localError}</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I am a :
              </label>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => handleRoleChange('jobSeeker')}
                  className={`px-6 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    formData.role === 'jobSeeker'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange('recruiter')}
                  className={`px-6 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    formData.role === 'recruiter'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Recruiter
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                placeholder="Jamsheera M P"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                placeholder="jamsheera@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                placeholder="••••••••••••"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                placeholder="••••••••••••"
                required
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <span className="text-indigo-600 hover:underline cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-indigo-600 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!agreedToTerms || loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>

            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/')}
                className="text-indigo-600 hover:underline font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage