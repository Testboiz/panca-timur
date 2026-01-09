import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | Panca Timur Raya',
  description:
    'Solusi yang ditawarkan PT Panca Timur Raya. Layanan Mechanical, Electrical, dan Plumbing yang terintegrasi dan terukur. Fokus pada keselamatan kerja, efisiensi sistem, dan kualitas pelaksanaan. Solusi tepat guna untuk mendukung keandalan setiap proyek.',
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
