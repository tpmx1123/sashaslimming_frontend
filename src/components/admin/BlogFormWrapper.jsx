import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import BlogForm from './BlogForm';

const BlogFormWrapper = () => {
  const navigate = useNavigate();

  // Check authentication
  React.useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/admin-login');
    }
  }, [navigate]);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: `
          linear-gradient(135deg, #22222A 0%, #61338A 25%, #B886E8 50%, #61338A 75%, #22222A 100%),
          radial-gradient(circle at 20% 50%, rgba(97, 51, 138, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(184, 134, 232, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, rgba(232, 213, 255, 0.15) 0%, transparent 50%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#B886E8] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#61338A] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#E8D5FF] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#61338A] to-[#B886E8] border-b-2 border-[#61338A] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Blog Management</h1>
            </div>
            <button
              onClick={() => navigate('/admin-panel?tab=blogs')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors border border-white/30"
            >
              ← Back to Admin Panel
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogForm />
      </div>
      </div>
    </div>
  );
};

export default BlogFormWrapper;

