import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Konfigurasi Website',
    en: 'Website Config',
  },

  fields: [
    {
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'address',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        admin: {
          placeholder: {
            en: 'Write your address here',
            id: 'Tuliskan alamat anda disini',
          },
        },
        features: ({ defaultFeatures }) => [
          ...defaultFeatures.filter((feature) => feature.key !== 'relationship'),
          // TODO : set features
        ],
      }),
      label: {
        id: 'Alamat',
        en: 'Address',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      hooks: {
        beforeChange: [
          ({ value }) => {
            if (!value) return value

            let digits = value.replace(/\D/g, '')

            if (digits.startsWith('0')) {
              digits = '62' + digits.slice(1)
            }

            if (!digits.startsWith('62')) {
              digits = '62' + digits
            }

            return digits
          },
        ],
      },
    },
  ],
}
