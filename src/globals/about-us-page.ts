import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const AboutUsConfig: GlobalConfig = {
  slug: 'about-us-page',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Halaman About Us',
    en: 'About Us Page',
  },

  fields: [
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Gambar Utama',
        en: 'Main Image Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'about_us_hero',
          type: 'upload',
          required: true,
          relationTo: 'media',
          label: {
            id: 'Gambar About Us Page',
            en: 'About Us Page Picture',
          },
        },
        {
          name: 'about_us_hero_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_hero_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Our Company',
        en: 'Our Company Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'about_us_our_company_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_description_left',
          type: 'text',
          label: {
            id: 'Deskripsi Kiri',
            en: 'Left Description',
          },
        },
        {
          name: 'about_us_description_right',
          type: 'text',
          label: {
            id: 'Deskripsi Kanan',
            en: 'Right Description',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Visi Misi',
        en: 'Vision and Mission Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'about_us_vision_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_vision_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
        {
          name: 'about_us_mission_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_mission_description',
          type: 'richText',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
          editor: lexicalEditor({
            admin: {
              placeholder: {
                en: 'Write your mission here',
                id: 'Tuliskan misi disini',
              },
            },
          }),
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Our Culture',
        en: 'Our Culture Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'about_us_our_culture_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_our_culture_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Legal',
        en: 'Legal Section Description',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'about_us_legal_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'about_us_legal_subtitle',
          type: 'text',
          label: {
            id: 'Subtitel',
            en: 'Subtitle',
          },
        },
        {
          name: 'about_us_legal_descriptions',
          type: 'richText',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
          editor: lexicalEditor({
            admin: {
              placeholder: {
                en: 'Write the legal description',
                id: 'Tuliskan deskripsi informasi legal',
              },
            },
            features: ({ defaultFeatures }) => [
              ...defaultFeatures.filter((feature) => feature.key !== 'relationship'),
            ],
          }),
        },
        {
          type: 'collapsible',
          label: {
            id: 'Dokumen Legal',
            en: 'Legal Documents',
          },
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'about_us_legal_document_1',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: {
                id: 'Dokumen Perusahaan Perizinan Berusaha Berbasis Resiko',
                en: 'Risk based Company Permit',
              },
            },
            {
              name: 'about_us_legal_document_2',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: {
                id: 'Dokumen Akta Pendirian Perseoran Terbatas',
                en: 'Deed of Establishment Document',
              },
            },
            {
              name: 'about_us_legal_document_3',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: {
                id: 'Dokumen Akta Pengesahan Badan Hukum',
                en: 'Deed of Incorporation Document',
              },
            },
          ],
        },
      ],
    },
  ],
}
