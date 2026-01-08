import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: {
      id: 'Layanan',
      en: 'Service',
    },
    plural: {
      id: 'Layanan',
      en: 'Services',
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        id: 'Judul',
        en: 'Title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        placeholder: {
          id: 'Tuliskan penjelasan singkat dari layanan ini untuk halaman utama',
          en: 'Insert short description for the main page',
        },
      },
      label: {
        id: 'Penjelasan Singkat',
        en: 'Excerpt',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        admin: {
          placeholder: {
            en: 'Explain the services here',
            id: 'Jelaskan layanan yang diberikan disini',
          },
        },
      }),

      label: {
        id: 'Konten',
        en: 'Content',
      },
    },
    {
      name: 'featuredImg',
      type: 'upload',
      relationTo: 'media',
      label: {
        id: 'Gambar Sampul',
        en: 'Featured Image',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
      label: {
        id: 'Penulis',
        en: 'Author',
      },
    },
  ],
}
