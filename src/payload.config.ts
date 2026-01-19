// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Portofolio } from './collections/Portofolio'
import { Services } from './collections/Services'
import { Blogs } from './collections/Blogs'
import { Documents } from './collections/Documents'
import { Companies } from './collections/Companies'

import { en } from '@payloadcms/translations/languages/en'
import { id } from '@payloadcms/translations/languages/id'

import { AboutUsConfig } from './globals/about-us-page'
import { InsightsConfig } from './globals/insights-page'
import { LandingConfig } from './globals/landing-page'
import { PortofolioConfig } from './globals/portofolio-page'
import { SolutionsConfig } from './globals/solutions-page'
import { FooterConfig } from './globals/footer'
import { SiteConfig } from './globals/logo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Companies, Documents, Products, Services, Portofolio, Blogs],
  globals: [
    AboutUsConfig,
    InsightsConfig,
    LandingConfig,
    PortofolioConfig,
    SolutionsConfig,
    FooterConfig,
    SiteConfig,
  ],
  i18n: {
    supportedLanguages: { en, id },
    fallbackLanguage: 'id',
    translations: {
      id: {
        lexical: {
          general: {
            slashMenuListGroupLabel: 'Daftar',
            slashMenuBasicGroupLabel: 'Komponen Dasar',
          },
          heading: {
            label: 'Heading',
          },
          checklist: {
            label: 'Ceklis',
          },
          orderedList: {
            label: 'Poin Poin Nomor',
          },
          unorderedList: {
            label: 'Poin Poin Titik',
          },
          horizontalRule: {
            label: 'Garis Horizontal',
          },
          upload: {
            label: 'Upload Gambar',
          },
          blockquote: {
            label: 'Kutipan',
          },
          relationship: {
            label: 'Link blog lain',
          },
          paragraph: {
            label: 'Teks paragraf',
          },
        },
      },
    },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
