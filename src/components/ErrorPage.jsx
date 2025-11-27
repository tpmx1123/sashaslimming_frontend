import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), 
                        url('https://res.cloudinary.com/di4caiech/image/upload/v1764244451/ChatGPT_Image_Nov_27_2025_05_23_45_PM_n2xkpe.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center w-full">
        {/* Mobile View */}
        <div className="lg:hidden bg-white/90 p-6 rounded-2xl shadow-xl mx-4">
          <h1 className="text-7xl font-bold text-sasha-purple-deeper mb-3">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
          <p className="text-gray-600 mb-6 px-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col space-y-3 mb-6">
            <Link
              to="/"
              className="px-6 py-3 bg-sasha-purple-deeper hover:bg-sasha-purple-dark text-white font-medium rounded-lg transition-all duration-300 text-base shadow-md"
            >
              Return to Home
            </Link>
            <Link
              to="/contact-us"
              className="px-6 py-3 bg-white text-sasha-purple-deeper font-medium rounded-lg transition-all duration-300 text-base border-2 border-sasha-purple-deeper shadow-md"
            >
              Contact Support
            </Link>
          </div>
          
          <p className="text-sm text-gray-600">
            Need help? Email us at{' '}
            <a href="mailto:support@sashaslimming.com" className="text-sasha-purple-deeper font-medium hover:underline">
              support@sashaslimming.com
            </a>
          </p>
        </div>
        
        {/* Desktop View - Remains unchanged */}
        <div className="hidden lg:block text-sasha-purple-deeper max-w-2xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Oops! Page Not Found</h2>
          <p className="text-base md:text-lg mb-6 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <Link
              to="/"
              className="px-6 py-3 bg-sasha-purple-deeper hover:bg-sasha-purple-dark text-white font-medium rounded-lg transition-colors duration-300 text-base "
            >
              Return to Home
            </Link>
            <Link
              to="/contact-us"
              className="px-6 py-3 bg-white/80 hover:bg-white/20 text-black font-medium rounded-lg transition-colors duration-300 text-base border-2 border-sasha-purple-deeper/80 "
            >
              Contact Support
            </Link>
          </div>
          <p className="text-sm text-black">
            Need help? Email us at{' '}
            <a href="mailto:support@sashaslimming.com" className="text-black hover:underline">
              support@sashaslimming.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;