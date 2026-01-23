import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const TextConfig: GlobalConfig = {
  slug: 'texts',
  admin: {
    group: {
      id: 'Pengaturan Umum',
      en: 'General Settings',
    },
  },
  label: {
    id: 'Konfigurasi Teks',
    en: 'Text Configuration',
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'collapsible',
          label: {
            id: 'Halaman Landing Page',
            en: 'Landing Page',
          },
          admin: {
            initCollapsed: true,
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
                  name: 'hero_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'hero_description',
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
                id: 'Teks atas',
                en: 'Top Card',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'top_card_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'top_card_description',
                  type: 'text',
                  label: {
                    id: 'Deskripsi',
                    en: 'Description',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'collapsible',
          label: {
            id: 'Halaman About Us',
            en: 'About Us Page',
          },
          admin: {
            initCollapsed: true,
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
                    features: ({ defaultFeatures }) => [
                      ...defaultFeatures.filter((feature) => feature.key !== 'relationship'),
                    ],
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
              ],
            },
          ],
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          type: 'collapsible',
          label: {
            id: 'Halaman Solutions',
            en: 'Solutions Page',
          },
          admin: {
            initCollapsed: true,
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
                  name: 'solutions_hero_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'solutions_hero_description',
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
                id: 'Bagian Services',
                en: 'Services Section',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'solutions_services_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'solutions_services_description',
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
                id: 'Bagian Products',
                en: 'Products Section',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'solutions_products_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'solutions_products_description',
                  type: 'text',
                  label: {
                    id: 'Deskripsi',
                    en: 'Description',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'collapsible',
          label: {
            id: 'Halaman Portofolio',
            en: 'Portofolio Page',
          },
          admin: {
            initCollapsed: true,
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
                  name: 'portofolio_hero_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'portofolio_hero_description',
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
                id: 'Bagian Proyek Portofolio',
                en: 'Portofolio Projects Section',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'portofolio_project_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'portofolio_project_description',
                  type: 'text',
                  label: {
                    id: 'Deskripsi',
                    en: 'Description',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'collapsible',
          label: {
            id: 'Halaman Blog',
            en: 'Blog Page',
          },
          admin: {
            initCollapsed: true,
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
                  name: 'blog_hero_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'blog_hero_description',
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
                id: 'Bagian Blog',
                en: 'Blog Section',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'blog_section_heading',
                  type: 'text',
                  label: {
                    id: 'Judul',
                    en: 'Heading',
                  },
                },
                {
                  name: 'blog_section_description',
                  type: 'text',
                  label: {
                    id: 'Deskripsi',
                    en: 'Description',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'collapsible',
          label: {
            id: 'Bagian Bawah',
            en: 'Footer Section',
          },
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'footer_heading',
              type: 'text',
              label: {
                id: 'Judul',
                en: 'Heading',
              },
            },
            {
              name: 'footer_description',
              type: 'text',
              label: {
                id: 'Deskripsi',
                en: 'Description',
              },
            },
          ],
        },
      ],
    },
  ],
}
