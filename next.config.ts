/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isGithubPages ? '/my-website' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
