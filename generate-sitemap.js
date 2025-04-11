import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the sitemap path
const sitemapPath = join(__dirname, 'public', 'sitemap.xml');

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://www.thunderinfotech.cloud' });

// Pipe the sitemap to a write stream
const writeStream = createWriteStream(sitemapPath);
sitemapStream.pipe(writeStream);

// Write URLs
sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemapStream.write({ url: '/thunder', changefreq: 'weekly', priority: 0.7 });
sitemapStream.write({ url: '/services', changefreq: 'weekly', priority: 0.8 });
sitemapStream.write({ url: '/thunder-contact', changefreq: 'weekly', priority: 0.8 });
sitemapStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

// Close the stream
sitemapStream.end();

// Wait for the stream to finish
await streamToPromise(sitemapStream);

console.log('✅ Sitemap generated at public/sitemap.xml');