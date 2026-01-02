import type { CollectionConfig } from 'payload'

export const Portofolio: CollectionConfig = {
  slug: 'portofolio',
  admin: {
    useAsTitle: 'tag',
  },
  labels: {
    singular: {
      id: 'Portofolio',
      en: 'Portofolio',
    },
    plural: {
      id: 'Portofolio',
      en: 'Portofolios',
    },
  },
  auth: false,
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
      label: {
        id: 'Tag Portofolio',
        en: 'Tag',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        id: 'Gambar',
        en: 'Image',
      },
    },
  ],
}
