import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      id: 'Produk',
      en: 'Product',
    },
    plural: {
      id: 'Produk',
      en: 'Products',
    },
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        id: 'Nama',
        en: 'Name',
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
