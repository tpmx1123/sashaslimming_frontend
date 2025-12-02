const API_BASE_URL = 'http://localhost:8081/api';

export const blogService = {
  getAllBlogs: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }
      const response = await fetch(`${API_BASE_URL}/blogs/admin/all`, {
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
        if (response.status === 401) {
          // Token expired or invalid - clear storage and redirect
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('email');
          localStorage.removeItem('role');
          window.location.href = '/admin-login';
          return { success: false, message: 'Session expired. Please login again.' };
        }
        const error = await response.json().catch(() => ({ error: 'Failed to fetch blogs' }));
        return { success: false, message: error.error || error.message || 'Failed to fetch blogs' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  createBlog: async (blogData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }
      const response = await fetch(`${API_BASE_URL}/blogs/admin`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        if (response.status === 401) {
          // Only redirect if token is actually invalid, not on other errors
          const errorData = await response.json().catch(() => ({}));
          if (errorData.error && errorData.error.includes('token') || errorData.error && errorData.error.includes('Unauthorized')) {
            localStorage.removeItem('token');
            window.location.href = '/admin-login';
            return { success: false, message: 'Session expired. Please login again.' };
          }
        }
        const error = await response.json().catch(() => ({ error: 'Failed to create blog' }));
        return { success: false, message: error.error || error.message || 'Failed to create blog' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  updateBlog: async (id, blogData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/blogs/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const error = await response.json();
        return { success: false, message: error.error || 'Failed to update blog' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  deleteBlog: async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/blogs/admin/${id}`, {
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
        return { success: false, message: error.error || 'Failed to delete blog' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  uploadImage: async (file) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No authentication token found' };
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/blogs/admin/upload-image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          // Don't set Content-Type header - let browser set it with boundary for multipart/form-data
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, url: data.url };
      } else {
        // Handle connection refused error
        if (!response.ok && response.status === 0) {
          return { 
            success: false, 
            message: 'Cannot connect to server. Please make sure the backend is running on port 8081.' 
          };
        }
        const error = await response.json().catch(() => ({ error: 'Failed to upload image' }));
        return { success: false, message: error.error || 'Failed to upload image' };
      }
    } catch (error) {
      // Handle network errors
      if (error.message && error.message.includes('Failed to fetch')) {
        return { 
          success: false, 
          message: 'Cannot connect to server. Please make sure the backend is running on port 8081.' 
        };
      }
      return { success: false, message: 'Network error: ' + error.message };
    }
  },
};

