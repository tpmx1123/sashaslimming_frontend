import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicBlogService } from '../services/publicBlogService';
import { newsletterService } from '../services/newsletterService';
import { getBlogSlug } from '../utils/slugUtils';
import toast, { Toaster } from 'react-hot-toast';
import SEO from './SEO';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError('');
      const result = await publicBlogService.getAllBlogs();
      
      if (result.success) {
        setBlogPosts(result.data || []);
      } else {
        setError(result.message || 'Failed to load blogs');
      }
    } catch (err) {
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterError('');
    setNewsletterSubmitting(true);

    try {
      const result = await newsletterService.subscribe(newsletterEmail);
      
      if (result.success) {
        toast.success(result.message || 'Successfully subscribed to newsletter!');
        setNewsletterEmail('');
      } else {
        setNewsletterError(result.message || 'Failed to subscribe. Please try again.');
        toast.error(result.message || 'Failed to subscribe');
      }
    } catch (err) {
      const errorMsg = 'Network error. Please check your connection and try again.';
      setNewsletterError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  // Get unique categories from blogs
  const categories = ['All Articles', ...new Set(blogPosts.map(post => post.category).filter(Boolean))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Articles' || post.category === activeCategory;
    const matchesSearch = 
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen mt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#61338A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      <SEO 
        title="Blog - Body Transformation Tips & Success Stories | Sasha Slimming"
        description="Expert advice, success stories, and the latest insights on body transformation, fat reduction, skin tightening, and advanced slimming treatments."
        keywords="body transformation blog, slimming tips, fat reduction advice, skin tightening guide, body contouring articles, weight loss success stories"
        canonical="https://sashaslimming.com/blog"
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sasha-purple-deeper to-sasha-purple-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SASHA Slimming Blog</h1>
          <p className="text-xl md:text-xl max-w-3xl mx-auto">
            Expert advice, success stories, and the latest in body transformation
          </p>
        </div>
      </div>

      {/* Categories and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sasha-pink"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sasha-pink hover:bg-pink-600 text-white rounded-full p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-sasha-purple-deeper text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            {error}
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={post.image || 'https://via.placeholder.com/800x600?text=No+Image'} 
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600?text=No+Image';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-sasha-purple-light text-sasha-purple-deeper text-xs font-medium rounded-full">
                        {post.category || 'Uncategorized'}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-sasha-purple-deeper transition-colors">
                      <Link to={`/blog/${getBlogSlug(post)}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </span>
                      <Link 
                        to={`/blog/${getBlogSlug(post)}`}
                        className="text-sasha-purple-deeper hover:text-sasha-purple-dark font-medium text-sm flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {blogPosts.length === 0 
                ? 'No blog posts available yet. Check back soon!' 
                : 'No articles found matching your search.'}
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-sasha-purple-deeper text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Latest Posts</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest articles, tips, and success stories.
          </p>
          <form 
            onSubmit={handleNewsletterSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={newsletterEmail}
              onChange={(e) => {
                setNewsletterEmail(e.target.value);
                setNewsletterError('');
              }}
              required
              className={`flex-grow px-5 py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none text-gray-900 ${
                newsletterError ? 'border-2 border-red-500' : ''
              }`}
              disabled={newsletterSubmitting}
            />
            <button 
              type="submit"
              disabled={newsletterSubmitting}
              className="bg-sasha-pink bg-pink-600 disabled:bg-pink-400 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors whitespace-nowrap"
            >
              {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {newsletterError && (
            <p className="text-red-300 text-sm mt-2">{newsletterError}</p>
          )}
        </div>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          success: {
            style: {
              background: '#4BB543',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
            },
          },
          error: {
            style: {
              background: '#FF3333',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
            },
          },
        }}
      />
    </div>
  );
};

export default Blog;
