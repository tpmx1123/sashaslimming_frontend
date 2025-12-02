const API_BASE_URL = 'http://localhost:8081/api';

export const contactService = {
  submitContactForm: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        return { success: true, message: data.message || 'Your message has been sent successfully!' };
      } else {
        return { success: false, message: data.message || 'Failed to send message. Please try again.' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please check your connection and try again.' };
    }
  },
};

