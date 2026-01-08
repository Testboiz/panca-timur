'use client'

import { Button } from '@/components/ui/button'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <div className="">
      <div className="mt-6 flex flex-col  bg-[linear-gradient(180deg,_#10385D_0%,_#0070C0_52.88%,_#E1E1E1_100%)] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[40px] px-[20px] md:py-[54px] md:px-[80px] lg:py-[90px] lg:px-[180px]">
        <h1 className="text-[white] text-center titleh1">Let’s Build Something Great Together!</h1>
        <p className="p text-[white] text-center">
          Dapatkan konsultasi cepat dan solusi terbaik untuk kebutuhan proyek Mechanical Electrical
          Plumbing Anda.
        </p>
        <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
          <Phone /> Book a Consultation
        </Button>
      </div>
      <div className="pt-[58px] flex justify-between p-8 flex-col md:flex-row">
        <div className=" w-[306px]">
          <Link href={'/'}>
            <Image
              src="/dokumPancaTimurR/logo.jpg"
              width={128}
              height={93}
              className="object-contain"
              alt="Gambar Logo Panca Timur Raya"
            />
          </Link>
          <p className="footer mt-[13px]">
            Head Office:Komp. Perumahan Pondok Cempaka Indah Blok F No.7, Bandulan-Mulyorejo,
            Malang, Jawa Timur Representative Office:Perumahan Masnaga Jalan Gunung Kerinci 1 Blok A
            No.873 Bintara, Bekasi Barat
          </p>
          <p className="text-[8px] font-[400] text-[#747775] mt-[43px]">
            @ Copyright 2025. All Rights Reserved.
          </p>
        </div>
        <div className="text-left mt-8 md:mt-0 md:text-right flex flex-col gap-[12px]">
          <p className="font-[700] text-[20px]">Menu</p>
          <Link href={'/detail-about-us'}>About Us</Link>
          <Link href={'/detail-solutions'}>Solutions</Link>
          <Link href={'/detail-portfolio'}>Portfolio</Link>
          <Link href={'/detail-insights-updates'}>Insights & Updates</Link>
          <div className="flex flex-row gap-4 justify-start md:justify-end">
            <Link href={'mailto:panca_timur_raya@yahoo.com'} target="_blank">
              <Mail />
            </Link>
            <Link href={'https://wa.me/6281394056196'} target="_blank">
              <MessageCircle />
            </Link>
          </div>
          <p className="text-[12px] font-[400]">Mechanical Electrical • Plumbing Contractor</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
