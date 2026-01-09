import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Panca Timur Raya',
  description:
    'Projek Portofolio PT Panca Timur Raya. Solusi Mechanical, Electrical, dan Plumbing untuk berbagai kebutuhan proyek. Dirancang dengan perencanaan matang, standar keselamatan, dan efisiensi kerja. Mendukung performa bangunan yang andal dan berkelanjutan.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
