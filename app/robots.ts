export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://procraft-closets-v2.vercel.app/sitemap.xml',
  }
}