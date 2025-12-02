const API_BASE_URL = 'http://localhost:8081/api';

export const authService = {
  login: async (username, password) => {
    try {
      // Validate inputs
      if (!username || !password) {
        return { success: false, message: 'Username and password are required' };
      }

      const requestBody = { username: username.trim(), password: password.trim() };
      console.log('Sending login request:', { url: `${API_BASE_URL}/auth/login`, body: { username: requestBody.username, password: '***' } });

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status, response.statusText);

      let data;
      try {
        const text = await response.text();
        console.log('Response text:', text);
        data = JSON.parse(text);
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        // If response is not valid JSON, return a generic error
        return { 
          success: false, 
          message: `Server error (${response.status}). Please check if the backend is running.` 
        };
      }
      
      console.log('Parsed response data:', data);
      
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email || '');
        localStorage.setItem('role', data.role);
        return { success: true, data };
      } else {
        // Handle error response - check for both 'error' and 'message' fields
        const errorMessage = data.error || data.message || `Login failed (${response.status})`;
        console.error('Login failed:', errorMessage);
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please check if the backend is running on http://localhost:8081' };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getProfile: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No token found' };
      }

      const response = await fetch(`${API_BASE_URL}/admin/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        if (response.status === 401) {
          authService.logout();
        }
        return { success: false, message: data.error || 'Failed to fetch profile' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return { success: false, message: 'No token found' };
      }

      const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();
      
      if (response.ok) {
        return { success: true, message: data.message || 'Password changed successfully' };
      } else {
        const errorMessage = data.error || data.message || 'Failed to change password';
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },
};

