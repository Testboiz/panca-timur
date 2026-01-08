import { isSuperAdmin } from '@/access/is-super-admin'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: isSuperAdmin,
  },
  admin: {
    group: {
      id: 'Pengaturan Payload',
      en: 'Payload Settings',
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: {
        id: 'Teks Alternatif',
        en: 'Alt Text',
      },
    },
  ],
  upload: true,
}
