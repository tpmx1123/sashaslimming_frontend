import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from '../services/authService';
import Overview from './admin/Overview';
import Appointments from './admin/Appointments';
import Blogs from './admin/Blogs';
import Subscribers from './admin/Subscribers';
import ChangePassword from './admin/ChangePassword';

const AdminPanel = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get active tab from URL params or default to overview
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'overview');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authService.isAuthenticated()) {
        navigate('/admin-login');
        return;
      }

      const result = await authService.getProfile();
      
      if (result.success) {
        setProfile(result.data);
      } else {
        setError(result.message);
        if (result.message.includes('Unauthorized') || result.message.includes('token')) {
          setTimeout(() => {
            navigate('/admin-login');
          }, 2000);
        }
      }
      
      setLoading(false);
    };

    fetchProfile();
  }, [navigate]);

  // Update active tab when URL params change
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Update URL when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/admin-panel?tab=${tabId}`, { replace: true });
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/admin-login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'blogs', label: 'Blogs', icon: '📝' },
    { id: 'subscribers', label: 'Subscribers', icon: '👥' },
    { id: 'password', label: 'Change Password', icon: '🔒' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'appointments':
        return <Appointments />;
      case 'blogs':
        return <Blogs />;
      case 'subscribers':
        return <Subscribers />;
      case 'password':
        return <ChangePassword />;
      default:
        return <Overview />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

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
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-white/90 text-sm">Welcome back, {profile?.username}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/')}
                className="bg-white/80 hover:bg-white/30 backdrop-blur-sm text-[#61338A] px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-white/30"
              >
                <span>🏠</span>
                <span>Home</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500/80 hover:bg-red-600 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-red-400/50"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-gradient-to-br from-[#61338A]/80 to-[#B886E8]/80 backdrop-blur-lg rounded-xl shadow-lg border-2 border-[#61338A]/50 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                        activeTab === tab.id
                          ? 'bg-white text-[#61338A] shadow-lg transform scale-105'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Profile Card */}
            <div className="mt-6 bg-gradient-to-br from-[#61338A]/60 to-[#B886E8]/60 backdrop-blur-lg rounded-xl shadow-lg border-2 border-[#61338A]/50 p-4">
              <h3 className="text-sm font-medium text-white mb-3">Profile</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-white/80">Username:</span>
                  <span className="text-white ml-2 font-medium">{profile?.username || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-white/80">Email:</span>
                  <span className="text-white ml-2 font-medium">{profile?.email || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-white/80">Role:</span>
                  <span className="text-[#E8D5FF] ml-2 font-medium">{profile?.role || 'N/A'}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminPanel;
