import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://site-clients.vercel.app'
  
  const routes = [
    '',
    '/services',
    '/solutions-industrielles',
    '/gmao',
    '/cabinet-medical',
    '/hotel',
    '/realisations',
    '/about',
    '/contact',
  ]
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
