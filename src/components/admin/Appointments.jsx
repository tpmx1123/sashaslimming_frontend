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
        <div className="text-gray-700 text-lg">Loading appointments...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-700">Appointments Management</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search appointments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#61338A] focus:border-[#61338A]"
          />
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#61338A] focus:border-[#61338A]"
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
        <div className="bg-[#61338A] rounded-xl shadow-lg p-8 text-center">
          <p className="text-white text-lg">No appointments found</p>
        </div>
      ) : (
        <div className="bg-[#61338A] rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#7a4ba3]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">NAME</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">CONTACT</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">SERVICE</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">DATE & TIME</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7a4ba3]">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="bg-[#61338A] hover:bg-[#7a4ba3] transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white">{booking.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white">{booking.email}</div>
                      <div className="text-xs text-white/90 mt-1">{booking.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white capitalize">{booking.serviceName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white">{booking.date}</div>
                      <div className="text-xs text-white/90 mt-1">{formatTime(booking.time)}</div>
                    </td>
                    <td className="px-6 py-4">
                      {booking.isRead ? (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                          Read
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                          Unread
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="text-red-400 hover:text-red-300 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <p className="text-gray-600 text-sm">
          Showing <span className="font-semibold text-gray-900">{filteredBookings.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{bookings.length}</span> appointments
        </p>
      </div>
    </div>
  );
};

export default Appointments;
