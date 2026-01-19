import { Metadata } from 'next'
import './styles.css'
import { Manrope } from 'next/font/google'
import Navbar from './(client-layout)/components/navbar'
import Footer from './(client-layout)/components/footer'

import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Panca Timur Raya',
    default: 'Website Panca Timur Raya',
  },
  description:
    ' PT. Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical, Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar industri.',
  icons: {
    icon: 'dokumPancaTimurR/logo.jpg',
  },
  openGraph: {
    title: 'Panca Timur Raya',
    description:
      'Solusi konstruksi Mechanical, Electrical, dan Plumbing (MEP) profesional dan terpercaya.',
    images: [
      {
        url: '/dokumPancaTimurR/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo Panca Timur Raya',
      },
    ],
    type: 'website',
    locale: 'id_ID',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await payload.findGlobal({
    slug: 'site-config',
  })
  const footerConfig = await payload.findGlobal({
    slug: 'footer-config',
  })
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Navbar config={config} />
        {children}
        <Footer globalConfig={config} textConfig={footerConfig} />
      </body>
    </html>
  )
}
