const API_BASE_URL = 'http://localhost:8081/api';

export const publicBlogService = {
  getAllBlogs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/public/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { success: false, message: 'Failed to fetch blogs' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  getFeaturedBlogs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/public/featured`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { success: false, message: 'Failed to fetch featured blogs' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  getBlogBySlug: async (slug) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/public/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { success: false, message: 'Blog not found' };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },
};

