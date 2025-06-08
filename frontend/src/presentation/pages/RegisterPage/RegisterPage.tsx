import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Building, User, Mail, Phone, Lock } from 'lucide-react'
import { Header } from '@presentation/components/layout/Header'
import { Footer } from '@presentation/components/layout/Footer'
import { type Role, type User as UserType } from '@core/entities'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const roleParam = searchParams.get('role')
  const [role, setRole] = useState<Role>(
    roleParam === 'recruiter' ? 'recruiter' : 'jobSeeker'
  )
  const [formData, setFormData] = useState<UserType>({
    id: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    role: role,
    companyName: role === 'recruiter' ? '' : undefined,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    navigate('/verify-otp', { state: { email: formData.email } })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRegisterClick={() => navigate('/register')} />

      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Register as {role === 'recruiter' ? 'a Recruiter' : 'a Job Seeker'}
            </h2>
            <div className="flex justify-center mb-6">
              <button
                onClick={() => {
                  setRole('jobSeeker')
                  navigate('/register?role=jobSeeker')
                }}
                className={`px-4 py-2 rounded-l-lg font-medium ${role === 'jobSeeker' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Job Seeker
              </button>
              <button
                onClick={() => {
                  setRole('recruiter')
                  navigate('/register?role=recruiter')
                }}
                className={`px-4 py-2 rounded-r-lg font-medium ${role === 'recruiter' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Recruiter
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <User className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              {role === 'recruiter' && (
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Building className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName || ''}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your company name"
                      required={role === 'recruiter'}
                    />
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Mail className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Phone className="h-5 w-5" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Lock className="h-5 w-5" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Register
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login here
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RegisterPage