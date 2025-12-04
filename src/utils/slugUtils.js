/**
 * Generate a URL-friendly slug from a title
 * Matches the backend Java slug generation logic
 * @param {string} title - The title to convert to a slug
 * @returns {string} - The generated slug
 */
export const generateSlug = (title) => {
  if (!title) return '';
  
  // Convert to lowercase
  let slug = title.toLowerCase().trim();
  
  // Remove accents/diacritics (simplified version - full normalization would require a library)
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Replace spaces and special characters with hyphens
  slug = slug.replace(/[^a-z0-9\s-]/g, ''); // Remove special characters except spaces and hyphens
  slug = slug.replace(/\s+/g, '-'); // Replace spaces with hyphens
  slug = slug.replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
  slug = slug.replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  return slug;
};

/**
 * Get the slug for a blog post
 * Priority: database slug > generated from title > ID
 * @param {Object} post - The blog post object
 * @returns {string} - The slug to use for the URL
 */
export const getBlogSlug = (post) => {
  if (!post) return '';
  
  // Priority 1: Use slug from database if it exists
  if (post.slug && post.slug.trim()) {
    return post.slug;
  }
  
  // Priority 2: Generate from title (backend will try to match by title if slug doesn't exist)
  if (post.title) {
    return generateSlug(post.title);
  }
  
  // Priority 3: Fallback to ID
  return post.id || '';
};

