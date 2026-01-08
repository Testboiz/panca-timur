import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

interface TextNode {
  text: string
}

interface ContentBlock {
  children?: TextNode[]
}

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },

  versions: {
    drafts: true,
  },
  labels: {
    singular: {
      id: 'Blog',
      en: 'Blog',
    },
    plural: {
      id: 'Blog',
      en: 'Blogs',
    },
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
          id: 'Akan dibuat otomatis setelah blog disimpan',
          en: 'This would automatically filled after being saved',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            if (siblingData.excerpt) return siblingData.excerpt

            const content = siblingData.content
            if (!content) return ''

            const text: string = (content.root.children as ContentBlock[])
              .map((block) => block.children?.map((c: TextNode) => c.text).join(''))
              .join(' ')

            return text.slice(0, 160)
          },
        ],
      },
      label: {
        id: 'Tampilan Ringkas (berubah setiap perubahan blog)',
        en: 'Excerpt (updated every blog change)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        admin: {
          placeholder: {
            en: 'Write your blog here',
            id: 'Tuliskan blog anda disini',
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
