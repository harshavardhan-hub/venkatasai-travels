/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect non-www and http to https://www (301 = permanent, tells Google which is real)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'venkatasaitravels.com' }],
        destination: 'https://www.venkatasaitravels.com/:path*',
        permanent: true, // 301 redirect — Google will transfer SEO credit to www version
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Force HTTPS in browsers after first secure visit (1 year)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Block clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Referrer policy for privacy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
