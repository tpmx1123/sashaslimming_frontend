import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://sashaslimming.com';
const DEFAULT_IMAGE = 'https://res.cloudinary.com/di4caiech/image/upload/v1764652891/Group_1171288780_3_qna2ox.png';

/**
 * SEO Component - Dynamically updates meta tags for better SEO ranking
 * Usage: <SEO title="Page Title" description="Page description" keywords="keyword1, keyword2" />
 */
const SEO = ({ 
  title = 'Sasha Slimming - Advanced Body Contouring & Fat Reduction Solutions',
  description = 'Transform your body with Sasha Slimming\'s advanced non-surgical fat reduction, inch loss, skin tightening, and body sculpting treatments. Expert consultations available.',
  keywords = 'fat reduction, inch loss, body contouring, skin tightening, non-surgical slimming, body sculpting, fat removal, weight loss, body transformation, slimming clinic',
  image = DEFAULT_IMAGE,
  type = 'website',
  canonical = null,
  noindex = false
}) => {
  const location = useLocation();
  const currentUrl = canonical || `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update title
    document.title = title;

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Sasha Slimming');
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags (Facebook, LinkedIn, etc.)
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Sasha Slimming', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Structured Data (JSON-LD) for better SEO
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Sasha Slimming',
      description: description,
      url: SITE_URL,
      image: image,
      logo: DEFAULT_IMAGE,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+91-9234569999'
      },
      sameAs: [
        // Add social media links if available
      ],
      priceRange: '$$',
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      medicalSpecialty: [
        'Body Contouring',
        'Fat Reduction',
        'Skin Tightening',
        'Non-Surgical Slimming'
      ]
    };

    structuredData.textContent = JSON.stringify(jsonLd);

  }, [title, description, keywords, image, type, currentUrl, noindex]);

  return null; // This component doesn't render anything
};

export default SEO;

