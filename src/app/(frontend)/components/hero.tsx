'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden">
      <div className="flex flex-col gap-4 max-w-3xl px-6 lg:px-8 w-full">
        <h1 className="titleh1 text-[#10385d]">
          Delivering{' '}
          <span className="relative inline-block">
            Quality
            <span className="absolute left-0 bottom-0 -translate-y-1 md:-translate-y-1.5 w-full max-w-[162px] h-[2.5px] lg:h-[4px] bg-[#10385D] rounded-full" />
          </span>{' '}
          Mechanical Electrical and Plumbing Solutions
        </h1>

        <p className="alternative">
          Sejak 2013, PT. Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical,
          Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar
          industri.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          <Button
            onClick={handleBookaConsultation}
            className="w-full lg:w-[243px]"
            aria-label="Chat ke WhatsApp Panca Timur Raya untuk Booking Konsultasi"
          >
            <Phone />
            Book a Consultation
          </Button>

          <Link
            href={'/detail-portfolio'}
            aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
          >
            <Button
              variant="secondary"
              className="w-full lg:w-[243px]"
              aria-label="Lihat lebih lanjut Projek Portofolio (View Projects)"
            >
              View Projects
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[653px]">
        <Image
          className="w-full h-auto object-contain"
          src="/dokumPancaTimurR/electrical2.jpg"
          width={653}
          height={505}
          alt="Gambar Logo Panca Timur Raya"
        />
      </div>
    </div>
  )
}

export default Hero
