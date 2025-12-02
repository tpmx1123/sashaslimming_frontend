import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogService } from '../../services/blogService';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest'); // newest, oldest
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [filterStatus, sortOrder]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError('');
      const result = await blogService.getAllBlogs();

      if (result.success) {
        let blogsData = result.data || [];
        
        // Sort blogs
        blogsData.sort((a, b) => {
          const dateA = new Date(a.createdAt || a.updatedAt);
          const dateB = new Date(b.createdAt || b.updatedAt);
          return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
        
        setBlogs(blogsData);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    navigate('/admin/blog/new');
  };

  const handleEdit = (id) => {
    navigate(`/admin/blog/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const result = await blogService.deleteBlog(id);
      if (result.success) {
        fetchBlogs();
        setSelectedBlogs(selectedBlogs.filter(bid => bid !== id));
      } else {
        alert(result.message);
      }
    }
  };

  const handleBulkDelete = async () => {
    if (selectedBlogs.length === 0) {
      alert('Please select blogs to delete');
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete ${selectedBlogs.length} blog post(s)?`)) {
      try {
        await Promise.all(selectedBlogs.map(id => blogService.deleteBlog(id)));
        fetchBlogs();
        setSelectedBlogs([]);
      } catch (err) {
        alert('Failed to delete some blogs');
      }
    }
  };

  const handleBulkStatusChange = async (newStatus) => {
    if (selectedBlogs.length === 0) {
      alert('Please select blogs to update');
      return;
    }

    try {
      await Promise.all(
        selectedBlogs.map(async (id) => {
          const blog = blogs.find(b => b.id === id);
          if (blog) {
            await blogService.updateBlog(id, { ...blog, status: newStatus });
          }
        })
      );
      fetchBlogs();
      setSelectedBlogs([]);
    } catch (err) {
      alert('Failed to update some blogs');
    }
  };

  const toggleSelectAll = () => {
    if (selectedBlogs.length === filteredBlogs.length) {
      setSelectedBlogs([]);
    } else {
      setSelectedBlogs(filteredBlogs.map(b => b.id));
    }
  };

  const toggleSelectBlog = (id) => {
    if (selectedBlogs.includes(id)) {
      setSelectedBlogs(selectedBlogs.filter(bid => bid !== id));
    } else {
      setSelectedBlogs([...selectedBlogs, id]);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || blog.status === filterStatus.toUpperCase();
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  // Statistics
  const stats = {
    total: blogs.length,
    published: blogs.filter(b => b.status === 'PUBLISHED').length,
    draft: blogs.filter(b => b.status === 'DRAFT').length,
    featured: blogs.filter(b => b.isFeatured).length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-white text-lg">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#61338A] to-[#B886E8] rounded-xl shadow-lg p-4 border border-[#61338A]/20">
          <p className="text-white/80 text-sm font-medium mb-1">Total Blogs</p>
          <p className="text-2xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl shadow-lg p-4 border border-green-500/20">
          <p className="text-white/80 text-sm font-medium mb-1">Published</p>
          <p className="text-2xl font-bold text-white">{stats.published}</p>
        </div>
        <div className="bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl shadow-lg p-4 border border-gray-500/20">
          <p className="text-white/80 text-sm font-medium mb-1">Drafts</p>
          <p className="text-2xl font-bold text-white">{stats.draft}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl shadow-lg p-4 border border-yellow-500/20">
          <p className="text-white/80 text-sm font-medium mb-1">Featured</p>
          <p className="text-2xl font-bold text-white">{stats.featured}</p>
        </div>
      </div>

      {/* Header with Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Blog Management</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#61338A]"
          />
          
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#61338A]"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#61338A]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-[#38c559] hover:bg-[#7a4ba3] text-white rounded-lg transition-colors font-medium"
          >
            + New Blog
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedBlogs.length > 0 && (
        <div className="bg-[#61338A]/20 border border-[#61338A]/50 rounded-lg p-4 flex items-center justify-between">
          <span className="text-white font-medium">
            {selectedBlogs.length} blog(s) selected
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkStatusChange('PUBLISHED')}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
            >
              Publish Selected
            </button>
            <button
              onClick={() => handleBulkStatusChange('DRAFT')}
              className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded transition-colors"
            >
              Draft Selected
            </button>
            <button
              onClick={handleBulkDelete}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"
            >
              Delete Selected
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Blogs Table */}
      {filteredBlogs.length === 0 ? (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/20 text-center">
          <p className="text-gray-400 text-lg">No blogs found</p>
        </div>
      ) : (
        <>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#61338A]/30">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedBlogs.length === filteredBlogs.length && filteredBlogs.length > 0}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 text-[#61338A] bg-white/10 border-white/20 rounded focus:ring-[#61338A]"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Featured Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Published Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {paginatedBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedBlogs.includes(blog.id)}
                          onChange={() => toggleSelectBlog(blog.id)}
                          className="w-4 h-4 text-[#61338A] bg-white/10 border-white/20 rounded focus:ring-[#61338A]"
                        />
                      </td>
                      <td className="px-6 py-4">
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-600 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">No Image</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">{blog.title}</div>
                        {blog.isFeatured && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded mt-1 inline-block">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-300">{blog.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        {blog.status === 'PUBLISHED' ? (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                            Published
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-500/20 text-gray-400">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300">
                          {formatDate(blog.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(blog.id)}
                            className="text-[#B886E8] hover:text-[#E8D5FF] transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 border border-white/20">
              <div className="text-gray-300 text-sm">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length} blogs
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#61338A] text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
