import React from 'react'

interface HeaderProps {
  onRegisterClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">JobConnect</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Browse Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Companies
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header