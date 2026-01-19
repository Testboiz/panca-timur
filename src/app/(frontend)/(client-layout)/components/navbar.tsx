'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'
import { ContactUsButton, ContactUsButtonMobile } from './book-a-consultation-button'
import { SiteConfig } from '@/payload-types'

const MotionLink = motion.create(Link)

const Navbar = ({ config }: { config: SiteConfig }) => {
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

  return (
    <>
      <div className="hidden lg:flex px-8 py-6 justify-between items-center">
        <Link href={'/'} aria-label="kembali ke halaman utama (Landing Page)">
          {/* <Image
            src="/dokumPancaTimurR/logo.jpg"
            width={64}
            height={46}
            style={{ height: 'auto' }}
            className="object-contain"
            alt="Gambar Logo Panca Timur Raya"
          /> */}
          {typeof config.logo === 'string' ? (
            <Image
              src={config.logo}
              alt={config.logo}
              width={64}
              height={46}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          ) : (
            <Image
              src={config?.logo?.url ?? '/dokumPancaTimurR/logo.jpg'}
              alt={config.logo?.alt ?? 'Gambar Logo Panca Timur Raya'}
              width={64}
              height={46}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          )}
        </Link>
        <div className="flex flex-row nav gap-14">
          <MotionLink
            href={'/detail-about-us'}
            whileHover={{
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman about us"
          >
            About Us
          </MotionLink>
          <MotionLink
            href={'/detail-solutions'}
            whileHover={{
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman solutions"
          >
            Solutions
          </MotionLink>
          <MotionLink
            href={'/detail-portfolio'}
            whileHover={{
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman portfolio"
          >
            Portfolio
          </MotionLink>
          <MotionLink
            href={'/detail-insights-updates'}
            whileHover={{
              color: '#0070c0',
              translateY: -2,
              textDecoration: 'underline',
            }}
            whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex items-center"
            aria-label="ke halaman insights updates"
          >
            Insights & Updates
          </MotionLink>
        </div>
        <ContactUsButton />
      </div>

      {/* tablet & mobile */}
      <div className="lg:hidden flex flex-row justify-between px-[32px] py-[20px] ">
        <Link href={'/'} aria-label="kembali ke halaman utama (Landing Page)">
          {/* <Image
            src="/dokumPancaTimurR/logo.jpg"
            width={64}
            height={46}
            style={{ height: 'auto' }}
            className="object-contain"
            alt="Gambar Logo Panca Timur Raya"
          /> */}
          {typeof config.logo === 'string' ? (
            <Image
              src={config.logo}
              alt={config.logo}
              width={64}
              height={46}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          ) : (
            <Image
              src={config?.logo?.url ?? '/dokumPancaTimurR/logo.jpg'}
              alt={config.logo?.alt ?? 'Gambar Logo Panca Timur Raya'}
              width={64}
              height={46}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          )}
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
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              About Us
            </MotionLink>
            <MotionLink
              href={'/detail-solutions'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              Solutions
            </MotionLink>
            <MotionLink
              href={'/detail-portfolio'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              Portfolio
            </MotionLink>
            <MotionLink
              href={'/detail-insights-updates'}
              onClick={() => setIsOpen(false)}
              whileHover={{
                color: '#0070c0',
                translateY: -2,
                textDecoration: 'underline',
              }}
              whileTap={{ color: '#0070c0', textDecoration: 'underline' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              Insights & Updates
            </MotionLink>
            <ContactUsButtonMobile />
          </div>
          <div className="h-[30vh] w-full bg-gradient-to-t from-[#92BDEA] via-[#92BDEA]/40 to-white" />
        </div>
      )}
    </>
  )
}

export default Navbar
