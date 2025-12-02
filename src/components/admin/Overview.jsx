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
        <div className="text-white text-lg">Loading statistics...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Total Appointments</p>
              <p className="text-3xl font-bold text-white">{stats.totalBookings}</p>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl shadow-lg p-6 border border-orange-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium mb-1">Unread Appointments</p>
              <p className="text-3xl font-bold text-white">{stats.unreadBookings}</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-2-2H4a2 2 0 00-2 2v.341C.67 6.165 0 7.626 0 9v5.158a2.032 2.032 0 00.595 1.437L2 17h5m8 0v1a3 3 0 11-6 0v-1m8 0H9" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-6 border border-green-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium mb-1">Active Subscribers</p>
              <p className="text-3xl font-bold text-white">{stats.activeSubscribers}</p>
            </div>
            <div className="bg-green-500/20 rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium mb-1">Published Blogs</p>
              <p className="text-3xl font-bold text-white">{stats.publishedBlogs}</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
          <p className="text-gray-300 text-sm font-medium mb-2">Today's Appointments</p>
          <p className="text-2xl font-bold text-white">{stats.todayBookings}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
          <p className="text-gray-300 text-sm font-medium mb-2">Total Subscribers</p>
          <p className="text-2xl font-bold text-white">{stats.totalSubscribers}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
          <p className="text-gray-300 text-sm font-medium mb-2">Total Blog Posts</p>
          <p className="text-2xl font-bold text-white">{stats.totalBlogs}</p>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Recent Appointments</h3>
        {recentBookings.length === 0 ? (
          <p className="text-gray-400">No appointments yet</p>
        ) : (
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{booking.name}</p>
                    <p className="text-gray-400 text-sm">{booking.serviceName}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {booking.date} at {booking.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!booking.isRead && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.isRead ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
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

