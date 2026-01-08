'use client'

import { Card } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Tape from './marquee'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AnimatedNumber from './animated-number'

import { motion } from 'motion/react'

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      <h1 className="titleh1 text-center text-[#10385D] py-8 md:py-12">Portfolio</h1>
      <div className="flex flex-col md:flex-row pl-14 md:pl-15 lg:pl-18 xl:pl-32 gap-[40px] md:gap-[44px] lg:gap-[60px] xl:gap-[180px]">
        <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-16 xl:gap-20">
          <div className="flex items-stretch">
            <div className="relative flex flex-col items-center">
              <span className="w-7 h-7 rounded-full bg-[#10385D]" />
              <span className="w-[6px] flex-1 bg-[#10385D]" />
            </div>
            <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
              <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                <AnimatedNumber value={11} suffix="+" />
              </p>
              <p className="stattext text-[#10385D]">Years of Experience</p>
            </div>
          </div>
          <div className="flex items-stretch">
            <div className="relative flex flex-col items-center">
              <span className="w-7 h-7 rounded-full bg-[#10385D]" />
              <span className="w-[6px] flex-1 bg-[#10385D]" />
            </div>
            <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
              <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                <AnimatedNumber value={114} suffix="+" />
              </p>
              <p className="stattext text-[#10385D]">Projects Completed</p>
            </div>
          </div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="absolute top-0 left-0 transform rotate-0 z-10">
            <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
              <Image
                src="/dokumPancaTimurR/projek1.jpg"
                alt="Card 1"
                className="object-cover w-full h-full p-4"
                fill
              />
            </Card>
          </div>
          <div className="absolute top-14 left-26 md:top-18 md:left-35 transform rotate-[16deg] z-0">
            <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
              <Image
                src="/dokumPancaTimurR/mechanicalplumbing1.jpg"
                alt="Card 2"
                className="object-cover w-full h-full p-4"
                fill
              />
            </Card>
          </div>
        </motion.div>
      </div>
      <div>
        <h3 className="titleh3 text-center pt-82 md:pt-28 lg:pt-52">Trusted By</h3>
        <Tape />
      </div>
      <Link href={'/detail-portfolio'} className="p-4 md:p-8 flex justify-center">
        <Button variant="secondary" className="w-full md:w-[691px] lg:w-[243px] ">
          View Projects
          <ArrowUpRight />
        </Button>
      </Link>
    </div>
  )
}

export default Portfolio
