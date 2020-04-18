const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
}

module.exports = withPlugins([
    [withMDX, {
        extension: /\.mdx?$/,
    }],
], nextConfig);
