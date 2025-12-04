import API_BASE_URL from '../config/apiConfig';

export const newsletterService = {
  // Public endpoint - Subscribe to newsletter (no authentication required)
  subscribe: async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        return { success: true, message: data.message || 'Successfully subscribed to newsletter' };
      } else {
        return { success: false, message: data.message || 'Failed to subscribe' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please check your connection and try again.' };
    }
  },
};

