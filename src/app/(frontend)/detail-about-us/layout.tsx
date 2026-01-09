import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Panca Timur Raya',
  description:
    'Tentang PT Panca Timur Raya, terdiri dari deskripsi perusahaan, visi, misi, budaya, dan informasi legal. Setiap proyek yang andal lahir dari perencanaan matang dan tim profesional. PT Panca Timur Raya menghadirkan solusi konstruksi yang aman dan efisien. Kami bekerja terstruktur untuk memastikan kepuasan klien. ',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
