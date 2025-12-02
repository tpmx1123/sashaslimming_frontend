import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';

const Appointments = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, read, unread

  useEffect(() => {
    fetchBookings();
  }, [filterStatus]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError('');
      
      let result;
      if (filterStatus === 'unread') {
        result = await bookingService.getUnreadBookings();
      } else {
        result = await bookingService.getAllBookings();
      }

      if (result.success) {
        setBookings(result.data || []);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    const result = await bookingService.markAsRead(id);
    if (result.success) {
      fetchBookings();
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const result = await bookingService.deleteBooking(id);
      if (result.success) {
        fetchBookings();
      } else {
        alert(result.message);
      }
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

  const formatTime = (timeString) => {
    if (!timeString) return '';
    try {
      // Convert 24-hour format to 12-hour format
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
      return `${displayHour}:${minutes} ${period}`;
    } catch {
      return timeString;
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.serviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone?.includes(searchTerm);
    
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-white text-lg">Loading appointments...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Appointments Management</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
          />
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
          >
            <option value="all">All Appointments</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/20 border-2 border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Appointments Table */}
      {filteredBookings.length === 0 ? (
        <div className="bg-gradient-to-br from-[#61338A]/80 to-[#B886E8]/80 backdrop-blur-lg rounded-xl shadow-lg p-8 border-2 border-[#61338A]/50 text-center">
          <p className="text-white/80 text-lg">No appointments found</p>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#61338A]/80 to-[#B886E8]/80 backdrop-blur-lg rounded-xl shadow-lg border-2 border-[#61338A]/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/10 backdrop-blur-sm">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">NAME</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">CONTACT</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">SERVICE</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">DATE & TIME</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white">{booking.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white/90">{booking.email}</div>
                      <div className="text-xs text-white/70 mt-1">{booking.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white/90 capitalize">{booking.serviceName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white/90">{booking.date}</div>
                      <div className="text-xs text-white/70 mt-1">{formatTime(booking.time)}</div>
                    </td>
                    <td className="px-6 py-4">
                      {booking.isRead ? (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          Read
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                          Unread
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-3">
                        {!booking.isRead && (
                          <button
                            onClick={() => handleMarkAsRead(booking.id)}
                            className="text-[#B886E8] hover:text-[#E8D5FF] transition-colors font-medium"
                          >
                            Mark Read
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(booking.id)}
                          className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-gradient-to-br from-[#61338A]/60 to-[#B886E8]/60 backdrop-blur-lg rounded-xl shadow-lg p-4 border-2 border-[#61338A]/50">
        <p className="text-white/90 text-sm">
          Showing <span className="font-semibold text-white">{filteredBookings.length}</span> of{' '}
          <span className="font-semibold text-white">{bookings.length}</span> appointments
        </p>
      </div>
    </div>
  );
};

export default Appointments;
