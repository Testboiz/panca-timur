import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

import Tape from '../components/marquee'
import AnimatedNumber from '../components/animated-number'
import { ServicesCarousel } from '../components/services-carousel'
import { ProductsGrid } from '../components/products-grid'
import { Blogs } from '../components/blogs'
import { BookAConsultationButton } from '../components/book-a-consultation-button'

import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

export const metadata = {
  title: 'Panca Timur Raya | Mechanical Electrical Plumbing Contractor',
  description:
    'Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical, Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar industri.',
  keywords:
    'Panca Timur Raya, konstruksi, electrical, hvac, mechanical, plumbing, solusi, proyek MEP',
  locale: 'id_ID',
  type: 'website',
}

export default async function HomePage() {
  const config = await payload.findGlobal({
    slug: 'landing-page',
  })
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-4 max-w-3xl px-6 lg:px-8 w-full">
          <h1 className="titleh1 text-[#10385d]">{config.hero_heading}</h1>

          <p className="alternative">{config.hero_description}</p>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
            <BookAConsultationButton />

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
          {typeof config.landing_hero === 'string' ? (
            <Image
              src={config.landing_hero}
              alt={config.landing_hero}
              width={653}
              height={505}
              className="w-full h-auto object-contain"
              priority
              loading="eager"
            />
          ) : (
            <Image
              src={config?.landing_hero?.url ?? '/dokumPancaTimurR/electrical2.jpg'}
              alt={config.landing_hero?.alt ?? 'Gambar Logo Panca Timur Raya'}
              loading="eager"
              priority
              width={653}
              height={505}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col bg-[#10385D] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[51px] px-[20px] md:py-[40px] md:px-[44px] lg:py-[90px] lg:px-[100px]">
        <h1 className="text-[white] titleh1">{config.top_card_heading}</h1>
        <p className="p text-[white] text-center">{config.top_card_description}</p>
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
      <>
        <div className="mt-10 bg-[#F5F7FA] py-[25px] justify-items-center ">
          <h1 className="titleh1 text-[#10385D] lg:mb-[32px] text-center ">Solutions</h1>
          <h2 className="titleh2 text-[#10385D] lg:mb-[24px]">Services</h2>

          <ServicesCarousel />

          <h2 className="titleh2 text-[#10385D] mt-12 lg:mb-[24px]">Products</h2>
          <ProductsGrid isForLandingPage={true} />

          <div className="flex w-full justify-center p-4 ">
            <Link
              href={'/detail-solutions'}
              className=" w-full flex justify-center "
              aria-label="Link lihat semua solusi layanan dan produk (Lihat semua solusi)"
            >
              <Button
                variant="secondary"
                className="flex w-full mt-4 md:w-[691px] lg:w-[243px] "
                aria-label="Lihat semua solusi layanan dan produk (Lihat semua solusi)"
              >
                View All Solutions
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </>
      <div className="overflow-x-hidden">
        <h1 className="titleh1 text-center text-[#10385D] py-8 md:py-12">Portfolio</h1>
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 w-full max-w-[1280px] px-4 sm:px-6 md:px-16 xl:px-32">
          <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-16 xl:gap-20">
            <div className="flex items-stretch mx-auto">
              <div className="relative flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-[#10385D]" />
                <span className="w-[6px] flex-1 bg-[#10385D]" />
              </div>
              <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
                <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                  <AnimatedNumber value={11} suffix="+" />
                </p>
                <p className="stattext text-[#10385D] whitespace-nowrap">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-stretch mx-auto">
              <div className="relative flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-[#10385D]" />
                <span className="w-[6px] flex-1 bg-[#10385D]" />
              </div>
              <div className="-ml-3 bg-gradient-to-r from-[#D2E6FA] to-white px-[32px] py-4">
                <p className="statnum text-[48px] font-bold text-[#10385D] leading-none">
                  <AnimatedNumber value={114} suffix="+" />
                </p>
                <p className="stattext text-[#10385D] whitespace-nowrap">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center w-full">
            <div className="absolute top-0 left-1/3 -translate-x-1/3 z-10">
              <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
                {typeof config.top_card_image_1 === 'string' ? (
                  <Image
                    src={config.top_card_image_1}
                    alt={config.top_card_image_1}
                    fill
                    className="object-cover w-full h-full p-4"
                  />
                ) : (
                  <Image
                    src={config?.top_card_image_1?.url ?? '/dokumPancaTimurR/projek1.jpg'}
                    alt={config.top_card_image_1?.alt ?? 'Image Project Portfolio'}
                    fill
                    className="object-cover w-full h-full p-4"
                  />
                )}
              </Card>
            </div>
            <div className="absolute top-14 md:top-18 left-2/3 -translate-x-2/3 transform rotate-[16deg] z-0">
              <Card className="w-[160px] h-[213px] md:w-[200px] md:h-[267px] lg:w-[300px] lg:h-[400px]">
                {typeof config.top_card_image_2 === 'string' ? (
                  <Image
                    src={config.top_card_image_2}
                    alt={config.top_card_image_2}
                    fill
                    className="object-cover w-full h-full p-4"
                  />
                ) : (
                  <Image
                    src={
                      config?.top_card_image_2?.url ?? '/dokumPancaTimurR/mechanicalplumbing1.jpg'
                    }
                    alt={config.top_card_image_2?.alt ?? 'Image Project Portfolio'}
                    fill
                    className="object-cover w-full h-full p-4"
                  />
                )}
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h2 className="titleh3 text-center pt-82 md:pt-28 lg:pt-52">Trusted By</h2>
          <Tape />
        </div>
        <Link
          href={'/detail-portfolio'}
          className="p-4 md:p-8 flex justify-center"
          aria-label="Link lebih lanjut Projek Portofolio (View Projects)"
        >
          <Button
            variant="secondary"
            className="w-full md:w-[691px] lg:w-[243px] "
            aria-label="Lihat lebih lanjut Projek Portofolio (View Projects)"
          >
            View Projects
            <ArrowUpRight />
          </Button>
        </Link>
      </div>

      <div className="flex justify-center mt-6 bg-[#F5F7FA]">
        <div className="flex flex-col items-center py-4 lg:py-6">
          <h1 className="titleh1 text-[#10385d] mb-8">Insights & Updates</h1>
          <Blogs isForLandingPage={true} />
          <Link
            href={'/detail-insights-updates'}
            className=" w-full flex justify-center "
            aria-label="Link lihat semua insights dan update (lihat semua blog)"
          >
            <Button
              variant="secondary"
              className="flex w-full mt-[15px] md:mt-[24px] lg:mt-[32px] md:w-[691px] lg:w-[243px] "
              aria-label="Lihat semua insights dan update (lihat semua blog)"
            >
              View All Insights
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
