import API_BASE_URL from '../config/apiConfig';

export const subscriberService = {
  getAllSubscribers: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/all`, {
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
        return { success: false, message: error.error || 'Failed to fetch subscribers' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  getActiveSubscribers: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/active`, {
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
        return { success: false, message: error.error || 'Failed to fetch active subscribers' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  addSubscriber: async (email) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/add`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || error.message || 'Failed to add subscriber' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  deleteSubscriber: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/${id}`, {
        method: 'DELETE',
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
        return { success: false, message: error.error || error.message || 'Failed to delete subscriber' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  activateSubscriber: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/${id}/activate`, {
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
        return { success: false, message: error.error || error.message || 'Failed to activate subscriber' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  deactivateSubscriber: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/newsletter/admin/${id}/deactivate`, {
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
        return { success: false, message: error.error || error.message || 'Failed to deactivate subscriber' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },
};

