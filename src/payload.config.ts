// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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

import { en } from '@payloadcms/translations/languages/en'
import { id } from '@payloadcms/translations/languages/id'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Blogs, Users, Media, Portofolio, Products, Services],
  editor: lexicalEditor(),
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
