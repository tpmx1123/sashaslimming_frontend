import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { publicBlogService } from '../services/publicBlogService';
import { newsletterService } from '../services/newsletterService';
import { getBlogSlug } from '../utils/slugUtils';
import BookModel from './BookModel';
import Footer from './Footer';
import toast, { Toaster } from 'react-hot-toast';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (blog) {
      fetchRelatedBlogs();
    }
  }, [blog]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Try fetching by slug first
      let result = await publicBlogService.getBlogBySlug(slug);
      
      // If not found and slug looks like it might be a generated slug from title,
      // the backend should handle it via its fallback logic
      // But if still not found, try to decode and search
      if (!result.success && slug) {
        // The backend has fallback logic to find by title, so this should work
        // But let's also try URL decoding in case of encoding issues
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
          result = await publicBlogService.getBlogBySlug(decodedSlug);
        }
      }
      
      if (result.success) {
        setBlog(result.data);
      } else {
        setError(result.message || 'Blog post not found');
      }
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedBlogs = async () => {
    try {
      const result = await publicBlogService.getAllBlogs();
      if (result.success && blog) {
        // Get blogs from same category, excluding current blog
        const related = result.data
          .filter(post => 
            post.category === blog.category && 
            post.id !== blog.id &&
            post.status === 'PUBLISHED'
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    } catch (err) {
      console.error('Failed to fetch related blogs');
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

  const getShareableLink = () => {
    return window.location.href;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getShareableLink());
      setLinkCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const shareOnSocialMedia = (platform) => {
    const url = encodeURIComponent(getShareableLink());
    const title = encodeURIComponent(blog?.title || '');
    const text = encodeURIComponent(blog?.excerpt || '');

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen mt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#61338A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-gray-50 min-h-screen mt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
          <Link 
            to="/blog"
            className="inline-block bg-sasha-purple-deeper hover:bg-sasha-purple-dark text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      
      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="mb-6 text-sasha-purple-deeper hover:text-sasha-purple-dark font-medium flex items-center transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-sasha-purple-light text-sasha-purple-deeper text-sm font-medium rounded-full">
            {blog.category || 'Uncategorized'}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        {/* Meta Information and Share */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{formatDate(blog.createdAt)}</span>
            {blog.tags && (
              <>
                <span>•</span>
                <span className="flex flex-wrap gap-2">
                  {blog.tags.split(',').map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                      {tag.trim()}
                    </span>
                  ))}
                </span>
              </>
            )}
          </div>
          
          {/* Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Share:</span>
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-600 hover:text-sasha-purple-deeper hover:bg-sasha-purple-light rounded-full transition-colors"
              title="Copy link"
            >
              {linkCopied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => shareOnSocialMedia('facebook')}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              title="Share on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button
              onClick={() => shareOnSocialMedia('twitter')}
              className="p-2 text-gray-600 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
              title="Share on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button
              onClick={() => shareOnSocialMedia('whatsapp')}
              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
              title="Share on WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
            <button
              onClick={() => shareOnSocialMedia('linkedin')}
              className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
              title="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
            {blog.excerpt}
          </p>
        )}

        {/* Book Appointment CTA */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[#61338A] to-[#B886E8] rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Start Your Journey?</h3>
              <p className="text-white/90">Book a consultation appointment with us today!</p>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-[#61338A] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
          style={{
            lineHeight: '1.8',
            fontSize: '18px',
            color: '#374151',
          }}
        />

        {/* Tags */}
        {blog.tags && (
          <div className="mb-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.split(',').map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-sasha-purple-light text-sasha-purple-deeper rounded-full text-sm font-medium"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${getBlogSlug(relatedPost)}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image || 'https://via.placeholder.com/800x600?text=No+Image'} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="px-2 py-1 bg-sasha-purple-light text-sasha-purple-deeper text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
              className="bg-sasha-pink  bg-pink-600 disabled:bg-pink-400 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors whitespace-nowrap"
            >
              {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {newsletterError && (
            <p className="text-red-300 text-sm mt-2">{newsletterError}</p>
          )}
        </div>
      </div>

      {/* Back to Blog CTA */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Want to Read More?</h2>
          <p className="text-gray-600 mb-6">
            Explore our collection of articles on body transformation and wellness.
          </p>
          <Link 
            to="/blog"
            className="inline-block bg-sasha-purple-deeper hover:bg-sasha-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>

      {/* Booking Modal */}
      <BookModel isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <Footer />
    </div>
  );
};

export default BlogDetail;

