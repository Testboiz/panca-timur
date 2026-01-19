import Navbar from '../components/navbar'
import Footer from '../components/footer'
import AboutUs from '../components/about-us'
import config from '@payload-config'
import { getPayload } from 'payload'
import { Metadata } from 'next'

const payload = await getPayload({ config })

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Tentang PT Panca Timur Raya, terdiri dari deskripsi perusahaan, visi, misi, budaya, dan informasi legal. Setiap proyek yang andal lahir dari perencanaan matang dan tim profesional. PT Panca Timur Raya menghadirkan solusi konstruksi yang aman dan efisien. Kami bekerja terstruktur untuk memastikan kepuasan klien. ',
}

export default async function AboutUsPage() {
  const config = await payload.findGlobal({
    slug: 'about-us-page',
  })
  return <AboutUs config={config} />
}
