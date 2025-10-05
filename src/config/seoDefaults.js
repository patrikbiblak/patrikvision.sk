// SEO Configuration - Used across all pages
export const SEO_DEFAULTS = {
  siteName: 'PatrikVision',
  author: 'PatrikVision',
  robots: 'index, follow',
  languages: 'en,sk,hu',
  revisitAfter: '7 days',
  geoRegion: 'SK',
  geoPlacename: 'Slovakia',
  geoPosition: '48.6690;19.6990',
  icbm: '48.6690, 19.6990',
  twitterSite: '@patrikvision',
  twitterCreator: '@patrikvision',
  ogImage: 'https://patrikvision.sk/images/PatrikVision.png'
};

// Generate SEO meta tags for a page
export const generateSEOTags = (title, description, keywords, url = '', type = 'website') => {
  const fullTitle = `${title} | ${SEO_DEFAULTS.siteName}`;
  const fullUrl = `https://patrikvision.sk${url}`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    url: fullUrl,
    type,
    ...SEO_DEFAULTS
  };
};
