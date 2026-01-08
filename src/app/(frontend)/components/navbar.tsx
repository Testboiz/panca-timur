'use client'

import { Button } from '@/components/ui/button'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

const MotionLink = motion(Link)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleContactUs = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="hidden lg:flex px-8 py-6 justify-between items-center">
        <Link href={'/'} aria-label="kembali ke halaman utama (Landing Page)">
          <Image
            src="/dokumPancaTimurR/logo.jpg"
            width={64}
            height={46}
            className="object-contain"
            alt="Gambar Logo Panca Timur Raya"
          />
        </Link>
        <div className="flex flex-row nav gap-14">
          <MotionLink
            href={'/detail-about-us'}
            whileHover={{
              scale: 1.03,
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman about us"
          >
            About Us
          </MotionLink>
          <MotionLink
            href={'/detail-solutions'}
            whileHover={{
              scale: 1.03,
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman solutions"
          >
            Solutions
          </MotionLink>
          <MotionLink
            href={'/detail-portfolio'}
            whileHover={{
              scale: 1.03,
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman portfolio"
          >
            Portfolio
          </MotionLink>
          <MotionLink
            href={'/detail-insights-updates'}
            whileHover={{
              scale: 1.03,
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman insights updates"
          >
            Insights & Updates
          </MotionLink>
        </div>
        <Button
          onClick={handleContactUs}
          variant={'default'}
          className="hidden flex w-[141px] flex-shrink-0"
          aria-label="Kontak Panca Timur Raya"
        >
          <Phone className="w-4 h-4" />
          Contact Us
        </Button>
      </div>

      {/* tablet & mobile */}
      <div className="lg:hidden flex flex-row justify-between px-[32px] py-[20px] ">
        <Link href={'/'} aria-label="kembali ke halaman utama (Landing Page)">
          <Image
            src="/dokumPancaTimurR/logo.jpg"
            width={64}
            height={46}
            className="object-contain"
            alt="Gambar Logo Panca Timur Raya"
          />
        </Link>

        <button onClick={toggleMenu} aria-label="Buka menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col justify-center items-center ">
          <div className="nav flex flex-col px-8 gap-[48px] justify-center items-center min-h-[calc(100vh-230px)]">
            <MotionLink
              href={'/detail-about-us'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.03,
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              About Us
            </MotionLink>
            <MotionLink
              href={'/detail-solutions'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.03,
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              Solutions
            </MotionLink>
            <MotionLink
              href={'/detail-portfolio'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.03,
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              Portfolio
            </MotionLink>
            <MotionLink
              href={'/detail-insights-updates'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.03,
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ scale: 0.97, color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              Insights & Updates
            </MotionLink>
            <Button
              onClick={handleContactUs}
              variant={'default'}
              className="flex flex w-[320px] flex-shrink-0"
              aria-label="Kontak Panca Timur Raya"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
          <div className="h-[30vh] w-full bg-gradient-to-t from-[#92BDEA] via-[#92BDEA]/40 to-white" />
        </div>
      )}
    </>
  )
}

export default Navbar
