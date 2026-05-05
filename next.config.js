const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',
  basePath: '/quirkbyte-chronicles',
  trailingSlash: true,
}

module.exports = withMDX(nextConfig)
