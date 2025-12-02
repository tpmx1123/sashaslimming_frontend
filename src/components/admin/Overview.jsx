import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';
import { subscriberService } from '../../services/subscriberService';
import { blogService } from '../../services/blogService';

const Overview = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    unreadBookings: 0,
    todayBookings: 0,
    totalSubscribers: 0,
    activeSubscribers: 0,
    totalBlogs: 0,
    publishedBlogs: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Fetch all data in parallel
      const [bookingsResult, unreadResult, subscribersResult, activeSubscribersResult, blogsResult] = await Promise.all([
        bookingService.getAllBookings(),
        bookingService.getUnreadBookings(),
        subscriberService.getAllSubscribers(),
        subscriberService.getActiveSubscribers(),
        blogService.getAllBlogs(),
      ]);

      const bookings = bookingsResult.success ? bookingsResult.data : [];
      const unreadBookings = unreadResult.success ? unreadResult.data : [];
      const subscribers = subscribersResult.success ? subscribersResult.data : [];
      const activeSubscribers = activeSubscribersResult.success ? activeSubscribersResult.data : [];
      const blogs = blogsResult.success ? blogsResult.data : [];

      // Calculate today's bookings
      const today = new Date().toISOString().split('T')[0];
      const todayBookings = bookings.filter(booking => booking.date === today);

      // Get recent bookings (last 5)
      const recent = bookings
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

      setStats({
        totalBookings: bookings.length,
        unreadBookings: unreadBookings.length,
        todayBookings: todayBookings.length,
        totalSubscribers: subscribers.length,
        activeSubscribers: activeSubscribers.length,
        totalBlogs: blogs.length,
        publishedBlogs: blogs.filter(blog => blog.status === 'PUBLISHED').length,
      });

      setRecentBookings(recent);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#61338A] text-lg">Loading statistics...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Appointments */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Total Appointments</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalBookings}</p>
              <p className="text-gray-500 text-xs mt-1">{stats.unreadBookings} pending</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Messages */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Contact Messages</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
              <p className="text-gray-500 text-xs mt-1">+0%</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Blog Posts</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalBlogs}</p>
              <p className="text-gray-500 text-xs mt-1">{stats.publishedBlogs} published</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-3">
              <svg className="w-8 h-8 text-[#61338A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Subscribers */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalSubscribers}</p>
              <p className="text-gray-500 text-xs mt-1">{stats.activeSubscribers} active</p>
            </div>
            <div className="bg-pink-100 rounded-lg p-3">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => window.location.href = '/admin/blog/new'}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#61338A] rounded-lg p-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">New Blog Post</h3>
                <p className="text-gray-600 text-sm">Create a new blog article</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => window.location.href = '/admin-panel?tab=appointments'}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 rounded-lg p-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">View Appointments</h3>
                <p className="text-gray-600 text-sm">Manage bookings</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Appointments</h3>
        {recentBookings.length === 0 ? (
          <p className="text-gray-500">No appointments yet</p>
        ) : (
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 font-medium">{booking.name}</p>
                    <p className="text-gray-600 text-sm">{booking.serviceName}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {booking.date} at {booking.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!booking.isRead && (
                      <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">New</span>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      booking.isRead ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {booking.isRead ? 'Read' : 'Unread'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;

