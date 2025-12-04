import API_BASE_URL from '../config/apiConfig';

export const bookingService = {
  // Public endpoint - Create a new booking (no authentication required)
  createBooking: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json().catch(() => ({ error: 'Failed to create booking' }));
        return { success: false, message: error.error || error.message || 'Failed to create booking' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please check your connection and try again.' };
    }
  },

  getAllBookings: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }
      const response = await fetch(`${API_BASE_URL}/bookings/admin/all`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Failed to fetch bookings' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  getUnreadBookings: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/bookings/admin/unread`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Failed to fetch unread bookings' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  markAsRead: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/bookings/admin/${id}/mark-read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Failed to mark as read' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  deleteBooking: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/bookings/admin/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Failed to delete booking' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },
};

