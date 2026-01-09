import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights and Updates | Panca Timur Raya',
  description:
    'Insights dan Updates PT Panca Timur Raya, Insight dan pengalaman yang lahir dari proyek nyata. Mengulas praktik industri dan solusi yang kami terapkan. Dibagikan untuk memperluas wawasan dan pemahaman teknis. ',
}

export default function InsightsUpdatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
