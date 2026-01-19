'use client'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const BookAConsultationButton = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <Button
      onClick={handleBookaConsultation}
      className="w-full lg:w-[243px]"
      aria-label="Chat ke WhatsApp Panca Timur Raya untuk Booking Konsultasi"
    >
      <Phone />
      Book a Consultation
    </Button>
  )
}

export const ContactUsButton = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <Button
      onClick={handleBookaConsultation}
      variant={'default'}
      className="hidden flex w-[141px] flex-shrink-0"
      aria-label="Kontak Panca Timur Raya"
    >
      <Phone className="w-4 h-4" />
      Contact Us
    </Button>
  )
}

export const ContactUsButtonMobile = () => {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <Button
      onClick={handleBookaConsultation}
      variant={'default'}
      className="hidden flex w-[141px] flex-shrink-0"
      aria-label="Kontak Panca Timur Raya"
    >
      <Phone className="w-4 h-4" />
      Contact Us
    </Button>
  )
}
