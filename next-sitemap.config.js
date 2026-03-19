/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.venkatasaitravels.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.venkatasaitravels.com/sitemap.xml',
    ],
  },
  // Homepage gets highest priority
  transform: async (config, path) => {
    // Set priority based on page type
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.match(/^\/(mini-bus|medium-bus|big-bus)$/)) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.match(/^\/(about|contact|tour-packages)$/)) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/blog') {
      priority = 0.7
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
