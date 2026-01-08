'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

const AboutUs = () => {
  return (
    <div className="mt-6 flex flex-col bg-[#10385D] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[51px] px-[20px] md:py-[40px] md:px-[44px] lg:py-[90px] lg:px-[100px]">
      <h1 className="text-[white] titleh1">About Us</h1>
      <motion.p
        className="p text-[white] text-center"
        initial={{ opacity: 0.5, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        PT. Panca Timur Raya merupakan perusahaan swasta berskala nasional yang berkomitmen
        meningkatkan performa perusahaan melalui penguatan manajemen, pengembangan budaya
        perusahaan, implementasi sistem informasi, penguatan manajemen risiko, dan peningkatan
        kepuasan pelanggan.
      </motion.p>
      <Link
        href={'/detail-about-us'}
        className="w-full flex justify-center"
        aria-label="Link lebih lanjut mengenai Perusahaan (About Our Company)"
      >
        <Button
          variant="secondary"
          className=" w-full lg:w-[243px]"
          aria-label="Lihat lebih lanjut mengenai Perusahaan (About Our Company)"
        >
          About Our Company
          <ArrowRight />
        </Button>
      </Link>
    </div>
  )
}

export default AboutUs
