'use client'

import Image from 'next/image'
import Navbar from '../components/navbar'
import { Button } from '@/components/ui/button'
import { Phone, RefreshCcw } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Footer from '../components/footer'
import { motion } from 'motion/react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React from 'react'

// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Portfolio Page | Panca Timur Raya',
// }

export default function PortfolioPage() {
  const galleryAll = [
    { src: '/dokumPancaTimurR/electrical1.jpg', alt: 'electrical1' },
    { src: '/dokumPancaTimurR/electrical2.jpg', alt: 'electrical2' },
    { src: '/dokumPancaTimurR/electrical3.jpg', alt: 'electrical3' },
    { src: '/dokumPancaTimurR/electrical4.jpg', alt: 'electrical4' },
    { src: '/dokumPancaTimurR/electrical5.jpg', alt: 'electrical5' },
    { src: '/dokumPancaTimurR/electrical6.jpg', alt: 'electrical6' },
    { src: '/dokumPancaTimurR/electrical7.jpg', alt: 'electrical7' },
    { src: '/dokumPancaTimurR/electrical8.jpg', alt: 'electrical8' },

    { src: '/dokumPancaTimurR/hvac1.jpg', alt: 'hvac1' },
    { src: '/dokumPancaTimurR/hvac2.jpg', alt: 'hvac2' },
    { src: '/dokumPancaTimurR/hvac3.jpg', alt: 'hvac3' },
    { src: '/dokumPancaTimurR/hvac4.jpg', alt: 'hvac4' },
    { src: '/dokumPancaTimurR/hvac5.jpg', alt: 'hvac5' },
    { src: '/dokumPancaTimurR/hvac6.jpg', alt: 'hvac6' },
    { src: '/dokumPancaTimurR/hvac7.jpg', alt: 'hvac7' },
    { src: '/dokumPancaTimurR/hvac8.jpg', alt: 'hvac8' },
    { src: '/dokumPancaTimurR/hvac9.jpg', alt: 'hvac9' },
    { src: '/dokumPancaTimurR/hvac10.jpg', alt: 'hvac10' },
    { src: '/dokumPancaTimurR/hvac11.jpg', alt: 'hvac11' },
    { src: '/dokumPancaTimurR/hvac12.jpg', alt: 'hvac12' },

    { src: '/dokumPancaTimurR/mechanicalplumbing1.jpg', alt: 'mechanicalplumbing1' },
    { src: '/dokumPancaTimurR/mechanicalplumbing2.jpg', alt: 'mechanicalplumbing2' },
    { src: '/dokumPancaTimurR/mechanicalplumbing3.jpg', alt: 'mechanicalplumbing3' },
    { src: '/dokumPancaTimurR/mechanicalplumbing4.jpg', alt: 'mechanicalplumbing4' },
    { src: '/dokumPancaTimurR/mechanicalplumbing5.jpg', alt: 'mechanicalplumbing5' },
  ]

  const galleryElectrical = [
    { src: '/dokumPancaTimurR/electrical1.jpg', alt: 'electrical1' },
    { src: '/dokumPancaTimurR/electrical2.jpg', alt: 'electrical2' },
    { src: '/dokumPancaTimurR/electrical3.jpg', alt: 'electrical3' },
    { src: '/dokumPancaTimurR/electrical4.jpg', alt: 'electrical4' },
    { src: '/dokumPancaTimurR/electrical5.jpg', alt: 'electrical5' },
    { src: '/dokumPancaTimurR/electrical6.jpg', alt: 'electrical6' },
    { src: '/dokumPancaTimurR/electrical7.jpg', alt: 'electrical7' },
    { src: '/dokumPancaTimurR/electrical8.jpg', alt: 'electrical8' },
  ]

  const galleryHvac = [
    { src: '/dokumPancaTimurR/hvac1.jpg', alt: 'hvac1' },
    { src: '/dokumPancaTimurR/hvac2.jpg', alt: 'hvac2' },
    { src: '/dokumPancaTimurR/hvac3.jpg', alt: 'hvac3' },
    { src: '/dokumPancaTimurR/hvac4.jpg', alt: 'hvac4' },
    { src: '/dokumPancaTimurR/hvac5.jpg', alt: 'hvac5' },
    { src: '/dokumPancaTimurR/hvac6.jpg', alt: 'hvac6' },
    { src: '/dokumPancaTimurR/hvac7.jpg', alt: 'hvac7' },
    { src: '/dokumPancaTimurR/hvac8.jpg', alt: 'hvac8' },
    { src: '/dokumPancaTimurR/hvac9.jpg', alt: 'hvac9' },
    { src: '/dokumPancaTimurR/hvac10.jpg', alt: 'hvac10' },
    { src: '/dokumPancaTimurR/hvac11.jpg', alt: 'hvac11' },
    { src: '/dokumPancaTimurR/hvac12.jpg', alt: 'hvac12' },
  ]

  const galleryMechanicalPlumbing = [
    { src: '/dokumPancaTimurR/mechanicalplumbing1.jpg', alt: 'mechanicalplumbing1' },
    { src: '/dokumPancaTimurR/mechanicalplumbing2.jpg', alt: 'mechanicalplumbing2' },
    { src: '/dokumPancaTimurR/mechanicalplumbing3.jpg', alt: 'mechanicalplumbing3' },
    { src: '/dokumPancaTimurR/mechanicalplumbing4.jpg', alt: 'mechanicalplumbing4' },
    { src: '/dokumPancaTimurR/mechanicalplumbing5.jpg', alt: 'mechanicalplumbing5' },
  ]

  const [visibleCount, setVisibleCount] = React.useState(6)

  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        <Image
          className="object-cover"
          fill
          alt="Image Portfolio"
          src={'/dokumPancaTimurR/hvac1.jpg'}
        />
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          Proven Experience in <br className="hidden xl:block" />
          Mechanical Electrical <br className="hidden xl:block" />
          and Plumbing Works
        </h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">
            Solusi Mechanical, Electrical, dan Plumbing untuk berbagai kebutuhan proyek. Dirancang
            dengan perencanaan matang, standar keselamatan, dan efisiensi kerja. Mendukung performa
            bangunan yang andal dan berkelanjutan.
          </p>
          <div>
            <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
              <Phone />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">Portfolio</h1>
        <p className="p text-[#747775]">Selected projects delivered by our experienced team.</p>
      </div>

      <div>
        <Tabs defaultValue="all" className="w-full">
          <ScrollArea className="w-full  py-4 ">
            <TabsList className="flex w-max flex-nowrap justify-start">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mechanicalplumbing">Mechanical & Plumbing</TabsTrigger>
              <TabsTrigger value="hvac">HVAC</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <ScrollBar orientation="horizontal" />
            </TabsList>
          </ScrollArea>

          <TabsContent value="all" className="mt-[8px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px] "
            >
              {galleryAll.slice(0, visibleCount).map((item, index) => (
                <div key={index} className="relative w-[350px] h-[467px]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
            {visibleCount < galleryAll.length && (
              <div className="mt-[32px] px-6 lg:px-0 flex justify-center">
                <Button
                  variant="secondary"
                  className="w-full  lg:w-[243px]"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More
                  <RefreshCcw />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="mechanicalplumbing" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]  "
            >
              {galleryMechanicalPlumbing.slice(0, visibleCount).map((item, index) => (
                <div key={index} className="relative w-[350px] h-[467px]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
            {visibleCount < galleryMechanicalPlumbing.length && (
              <div className="mt-[32px] px-6 lg:px-0 flex justify-center">
                <Button
                  variant="secondary"
                  className="w-full  lg:w-[243px]"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More
                  <RefreshCcw />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="hvac" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]  "
            >
              {galleryHvac.slice(0, visibleCount).map((item, index) => (
                <div key={index} className="relative w-[350px] h-[467px]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
            {visibleCount < galleryHvac.length && (
              <div className="mt-[32px] px-6 lg:px-0 flex justify-center">
                <Button
                  variant="secondary"
                  className="w-full  lg:w-[243px]"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More
                  <RefreshCcw />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="electrical" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px] "
            >
              {galleryElectrical.slice(0, visibleCount).map((item, index) => (
                <div key={index} className="relative w-[350px] h-[467px]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
            {visibleCount < galleryElectrical.length && (
              <div className="mt-[32px] px-6 lg:px-0 flex justify-center">
                <Button
                  variant="secondary"
                  className="w-full  lg:w-[243px]"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More
                  <RefreshCcw />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </>
  )
}
