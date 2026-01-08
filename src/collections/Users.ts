import { isSuperAdmin } from '@/access/is-super-admin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  admin: {
    useAsTitle: 'email',
    group: {
      id: 'Pengaturan Payload',
      en: 'Payload Settings',
    },
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
    {
      name: 'role',
      admin: {
        condition: (_, siblingData, { user }) => {
          if (!user) return false
          if (user.role !== 'super-admin') return false
          if (siblingData?.id === user.id) return false
          return true
        },
      },
      label: {
        id: 'Peran',
        en: 'Role',
      },
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
      ],
    },
  ],
}
