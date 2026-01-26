'use client'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePhoneContext } from '../../providers/phone-number.provider'

export const BookAConsultationButton = () => {
  const phone = usePhoneContext()
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`
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
  const phone = usePhoneContext()
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <Button
      onClick={handleBookaConsultation}
      variant={'default'}
      className="hidden flex w-[300px] md:w-[351px] lg:w-[141px] flex-shrink-0"
      aria-label="Kontak Panca Timur Raya"
    >
      <Phone className="w-4 h-4" />
      Contact Us
    </Button>
  )
}

export const ContactUsButtonMobile = () => {
  const phone = usePhoneContext()
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <Button
      onClick={handleBookaConsultation}
      variant={'default'}
      className="hidden flex w-[300px] md:w-[351px] lg:w-[141px] flex-shrink-0"
      aria-label="Kontak Panca Timur Raya"
    >
      <Phone className="w-4 h-4" />
      Contact Us
    </Button>
  )
}
