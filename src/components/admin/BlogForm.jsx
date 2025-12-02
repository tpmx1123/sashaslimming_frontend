import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { blogService } from '../../services/blogService';
import toast from 'react-hot-toast';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    category: '',
    tags: '',
    metaDescription: '',
    status: 'DRAFT',
    isFeatured: false,
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [uploading, setUploading] = useState(false);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isEditMode) {
      fetchBlog();
    }
  }, [id]);

  useEffect(() => {
    // Auto-generate slug from title
    if (formData.title && !isEditMode) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, isEditMode]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const result = await blogService.getAllBlogs();
      if (result.success) {
        const blog = result.data.find(b => b.id === parseInt(id));
        if (blog) {
          setFormData({
            title: blog.title || '',
            slug: blog.slug || '',
            excerpt: blog.excerpt || '',
            content: blog.content || '',
            image: blog.image || '',
            category: blog.category || '',
            tags: blog.tags || '',
            metaDescription: blog.metaDescription || '',
            status: blog.status || 'DRAFT',
            isFeatured: blog.isFeatured || false,
          });
        } else {
          setError('Blog not found');
        }
      }
    } catch (err) {
      setError('Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      let result;
      if (isEditMode) {
        result = await blogService.updateBlog(id, formData);
      } else {
        result = await blogService.createBlog(formData);
      }

      if (result.success) {
        // Show success message and redirect
        toast.success(isEditMode ? 'Blog updated successfully!' : 'Blog created successfully!');
        setTimeout(() => {
          navigate('/admin-panel?tab=blogs');
        }, 500);
      } else {
        setError(result.message || 'Failed to save blog');
        // Check if it's an authentication error
        if (result.message && result.message.includes('Session expired')) {
          setTimeout(() => {
            navigate('/admin-login');
          }, 2000);
        }
      }
    } catch (err) {
      setError('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleAutoSave = async () => {
    if (!formData.title || formData.title.trim() === '') return;
    
    try {
      const draftData = { ...formData, status: 'DRAFT' };
      if (isEditMode) {
        await blogService.updateBlog(id, draftData);
      } else {
        // For new blogs, we can't auto-save without creating first
        // This would require a separate draft endpoint
      }
    } catch (err) {
      console.error('Auto-save failed:', err);
    }
  };

  // Auto-save draft every 30 seconds
  useEffect(() => {
    if (formData.title && formData.title.trim() !== '') {
      const interval = setInterval(handleAutoSave, 30000);
      return () => clearInterval(interval);
    }
  }, [formData, id]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size should be less than 10MB');
      return;
    }

    setUploading(true);
    try {
      const result = await blogService.uploadImage(file);
      if (result.success) {
        setFormData({ ...formData, image: result.url });
        toast.success('Image uploaded successfully!');
      } else {
        toast.error(result.message || 'Failed to upload image');
      }
    } catch (err) {
      toast.error('An error occurred while uploading image');
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-[#61338A]/80 to-[#B886E8]/80 backdrop-blur-lg rounded-xl shadow-lg border-2 border-[#61338A]/50 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/20">
          <button
            onClick={() => setPreviewMode(false)}
            className={`px-4 py-2 font-medium transition-colors ${
              !previewMode
                ? 'text-[#B886E8] border-b-2 border-[#B886E8]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setPreviewMode(true)}
            className={`px-4 py-2 font-medium transition-colors ${
              previewMode
                ? 'text-[#B886E8] border-b-2 border-[#B886E8]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Preview
          </button>
        </div>

        {previewMode ? (
          /* Preview Mode */
          <div className="bg-white rounded-lg p-8 text-gray-900 shadow-xl">
            {formData.image && (
              <img
                src={formData.image}
                alt={formData.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-4xl font-bold mb-4">{formData.title || 'Untitled'}</h1>
            <div className="flex gap-4 mb-4 text-sm text-gray-600">
              <span>{formData.category}</span>
              {formData.tags && (
                <>
                  <span>•</span>
                  <span>Tags: {formData.tags}</span>
                </>
              )}
            </div>
            <p className="text-xl text-gray-700 mb-6">{formData.excerpt}</p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br />') }}
            />
          </div>
        ) : (
          /* Edit Mode */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slug (URL-friendly)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                  placeholder="auto-generated-from-title"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Leave empty to auto-generate from title
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                  placeholder="e.g., Weight Loss, Nutrition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Featured Image URL *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="flex-1 px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                    placeholder="https://example.com/image.jpg"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className={`px-4 py-2 bg-[#61338A] hover:bg-[#7a4ba3] text-white rounded-lg transition-colors font-medium cursor-pointer flex items-center justify-center whitespace-nowrap ${
                      uploading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {uploading ? 'Uploading...' : 'Upload'}
                  </label>
                </div>
                {formData.image && (
                  <div className="mt-2">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg border-2 border-white/30"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                  placeholder="weight loss, nutrition, fitness"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt *
              </label>
              <textarea
                required
                rows="3"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                placeholder="Short summary of the blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Meta Description (for SEO)
              </label>
              <textarea
                rows="2"
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  className="w-full px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#E8D5FF] focus:border-[#E8D5FF]"
                placeholder="SEO description (150-160 characters recommended)"
                maxLength={160}
              />
              <p className="text-xs text-gray-400 mt-1">
                {formData.metaDescription.length}/160 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content *
              </label>
              <div className="bg-white rounded-lg border-2 border-white/30">
                <Editor
                  apiKey="bhvqdinw22m8eaypoig4hij7r3eqh3h4wrjcv8leedw0xnzq" // Get a free API key from https://www.tiny.cloud/auth/signup/
                  onInit={(evt, editor) => editorRef.current = editor}
                  value={formData.content}
                  onEditorChange={(content) => setFormData({ ...formData, content })}
                  init={{
                    height: 500,
                    menubar: 'file edit view insert format tools table help',
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'directionality'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic underline strikethrough | forecolor backcolor | ' +
                      'alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist | outdent indent | ' +
                      'link image | code | fullscreen | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height:1.6; }',
                    branding: false,
                    promotion: false,
                    resize: true,
                    elementpath: true,
                    statusbar: true,
                    paste_data_images: true,
                    images_upload_handler: async (blobInfo) => {
                      // For now, return a data URL. In production, upload to your server
                      return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(blobInfo.blob());
                        reader.onload = () => resolve(reader.result);
                      });
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 bg-[#61338A] border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#61338A]"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </div>

              <div className="flex items-center pt-8">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-[#61338A] bg-white/10 border-white/20 rounded focus:ring-[#61338A]"
                />
                <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-300">
                  Mark as Featured
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t-2 border-white/30">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-white text-[#61338A] hover:bg-[#E8D5FF] disabled:bg-white disabled:cursor-not-allowed rounded-lg transition-colors font-medium shadow-lg"
              >
                {saving ? 'Saving...' : isEditMode ? 'Update Blog' : 'Create Blog'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({ ...formData, status: 'DRAFT' });
                  handleSubmit({ preventDefault: () => {} });
                }}
                className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-medium border-2 border-white/30"
              >
                Save as Draft
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin-panel?tab=blogs')}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium border-2 border-white/20"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogForm;

