import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: {
      id: 'Pengguna (Admin)',
      en: 'User',
    },
    plural: {
      id: 'Pengguna (Admin)',
      en: 'Users',
    },
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
