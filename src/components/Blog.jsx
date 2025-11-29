import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    // Weight Loss (3 posts)
    {
      id: 1,
      title: '10 Science-Backed Weight Loss Tips That Actually Work',
      excerpt: 'Discover the most effective, research-proven strategies for sustainable weight loss and better health.',
      date: 'November 28, 2025',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'science-backed-weight-loss-tips',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'The Truth About Intermittent Fasting for Weight Loss',
      excerpt: 'Learn how intermittent fasting can help with weight management and what science says about its effectiveness.',
      date: 'November 25, 2025',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'intermittent-fasting-weight-loss',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: '5 Common Weight Loss Mistakes You Might Be Making',
      excerpt: 'Avoid these common pitfalls that could be preventing you from reaching your weight loss goals.',
      date: 'November 22, 2025',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'common-weight-loss-mistakes',
      readTime: '5 min read'
    },
    
    // Nutrition (3 posts)
    {
      id: 4,
      title: 'The Ultimate Guide to Macro Counting for Beginners',
      excerpt: 'Learn how to track macros effectively to achieve your fitness and weight management goals.',
      date: 'November 27, 2025',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'macro-counting-beginners-guide',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Superfoods You Should Be Eating for Better Health',
      excerpt: 'Discover the most nutrient-dense foods to incorporate into your diet for optimal health and wellness.',
      date: 'November 24, 2025',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1490644658840-3f2a3be8b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'superfoods-for-better-health',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Meal Prepping 101: A Beginner\'s Guide',
      excerpt: 'Everything you need to know to start meal prepping like a pro and stay on track with your nutrition goals.',
      date: 'November 20, 2025',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1542834367427-4b5e0a0f4b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'meal-prepping-beginners-guide',
      readTime: '7 min read'
    },

    // Workout (3 posts)
    {
      id: 7,
      title: 'The Best At-Home Workouts for Busy People',
      excerpt: 'Effective workouts you can do anywhere, anytime - no equipment needed!',
      date: 'November 26, 2025',
      category: 'Workout',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'best-at-home-workouts',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Strength Training for Beginners: A Complete Guide',
      excerpt: 'Learn the fundamentals of strength training and how to get started on your fitness journey.',
      date: 'November 23, 2025',
      category: 'Workout',
      image: 'https://images.unsplash.com/photo-1571019614242-c6e2f4fcc8ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'strength-training-beginners-guide',
      readTime: '8 min read'
    },
    {
      id: 9,
      title: 'The Benefits of High-Intensity Interval Training (HIIT)',
      excerpt: 'Discover why HIIT workouts are so effective for fat loss and overall fitness.',
      date: 'November 19, 2025',
      category: 'Workout',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'benefits-of-hiit',
      readTime: '5 min read'
    },

    // Success Stories (3 posts)
    {
      id: 10,
      title: 'Sarah\'s 50-Pound Weight Loss Journey',
      excerpt: 'How Sarah transformed her life with healthy eating and regular exercise.',
      date: 'November 25, 2025',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'sarah-weight-loss-journey',
      readTime: '10 min read'
    },
    {
      id: 11,
      title: 'John\'s Transformation: From Couch to 5K',
      excerpt: 'How John went from being sedentary to running his first 5K race in just 3 months.',
      date: 'November 21, 2025',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'john-couch-to-5k',
      readTime: '8 min read'
    },
    {
      id: 12,
      title: 'Lisa\'s Journey to a Healthier Lifestyle',
      excerpt: 'How Lisa made sustainable lifestyle changes that led to lasting results.',
      date: 'November 18, 2025',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'lisa-healthier-lifestyle',
      readTime: '9 min read'
    }
  ];

  const categories = ['All Articles', 'Weight Loss', 'Nutrition', 'Workout', 'Success Stories'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Articles' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
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

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-sasha-purple-light text-sasha-purple-deeper text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-sasha-purple-deeper transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
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

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-6 py-3 border-2 border-sasha-purple-deeper text-sasha-purple-deeper hover:bg-sasha-purple-deeper hover:text-white font-medium rounded-lg transition-colors duration-300">
                Load More Articles
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found matching your search.</p>
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
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-5 py-3 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="bg-sasha-pink hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;