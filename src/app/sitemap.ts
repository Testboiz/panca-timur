import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const { docs: posts } = await payload.find({
    collection: 'blogs',
    limit: 1000,
  })

  const postsUrls = posts.map((post) => {
    return {
      url: `${baseUrl}/detail-insight-updates/${post.id}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/detail-about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/detail-solutions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/detail-portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/detail-insight-updates`,
      lastModified: new Date(),
    },
    ...postsUrls,
  ]
}
