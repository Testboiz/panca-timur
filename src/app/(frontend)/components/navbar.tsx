'use client'

import { Button } from '@/components/ui/button'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleContactUs = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/62xxxxxx?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="hidden lg:flex px-8 py-6 justify-between items-center">
        <Image
          src="/dokumPancaTimurR/logo.jpg"
          width={64}
          height={46}
          className="object-contain"
          alt="Gambar Logo Panca Timur Raya"
        />
        <div className="flex flex-row nav gap-14">
          <Link href="#aboutus" className="flex items-center">
            About Us
          </Link>
          <Link href="#solutions" className="flex items-center">
            Solutions
          </Link>
          <Link href="#portfolio" className="flex items-center">
            Portfolio
          </Link>
          <Link href="#insightsupdates" className="flex items-center">
            Insights & Updates
          </Link>
        </div>
        <Button
          onClick={handleContactUs}
          variant={'default'}
          className="hidden flex w-[141px] flex-shrink-0"
        >
          <Phone className="w-4 h-4" />
          Contact Us
        </Button>
      </div>

      {/* tablet & mobile */}
      <div className="lg:hidden flex flex-row justify-between px-[32px] py-[20px] ">
        <Image
          src="/dokumPancaTimurR/logo.jpg"
          width={64}
          height={46}
          className="object-contain"
          alt="Gambar Logo Panca Timur Raya"
        />
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col justify-center items-center ">
          <div className="nav flex flex-col px-8 gap-[48px] justify-center items-center min-h-[calc(100vh-230px)]">
            <Link href="#aboutus" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="#solutions" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="#insightsupdates" onClick={() => setIsOpen(false)}>
              Insights & Updates
            </Link>
          </div>
          <Button
            onClick={handleContactUs}
            variant={'default'}
            className="flex flex w-[320px] flex-shrink-0 -mt-[80px]"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </Button>
          <div className="h-[30vh] w-full bg-gradient-to-t from-[#92BDEA] via-[#92BDEA]/40 to-white" />
        </div>
      )}
    </>
  )
}

export default Navbar
